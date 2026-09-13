import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { Pause, Play, X } from "lucide-react";
import { birthdayData } from "../data/birthdayData";
import type { GalleryPhoto } from "../data/birthdayData";

const SLIDE_DURATION = 4200;

function StoryProgressBar({
  active,
  done,
  paused,
  duration,
  onComplete,
}: {
  active: boolean;
  done: boolean;
  paused: boolean;
  duration: number;
  onComplete: () => void;
}) {
  const controls = useAnimationControls();

  useEffect(() => {
    if (done) {
      controls.set({ scaleX: 1 });
      return;
    }
    if (!active) {
      controls.set({ scaleX: 0 });
      return;
    }
    if (paused) {
      controls.stop();
      return;
    }
    controls
      .start({
        scaleX: 1,
        transition: { duration: duration / 1000, ease: "linear" },
      })
      .then(() => {
        if (active) onComplete();
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, paused, done]);

  return (
    <div className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/30">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={controls}
        style={{ transformOrigin: "left" }}
        className="h-full w-full rounded-full bg-white"
      />
    </div>
  );
}

export default function PortraitStory({
  startIndex,
  onClose,
}: {
  startIndex: number;
  onClose: () => void;
}) {
  const photos: GalleryPhoto[] = birthdayData.portraits;
  const [index, setIndex] = useState(startIndex);
  const [paused, setPaused] = useState(false);
  const holdTimer = useRef<number | null>(null);

  const goNext = () => {
    setIndex((i) => (i + 1 < photos.length ? i + 1 : i));
    if (index + 1 >= photos.length) onClose();
  };
  const goPrev = () => setIndex((i) => Math.max(0, i - 1));

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const startHold = () => {
    holdTimer.current = window.setTimeout(() => setPaused(true), 180);
  };
  const endHold = () => {
    if (holdTimer.current) clearTimeout(holdTimer.current);
    setPaused(false);
  };

  const current = photos[index];

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.6}
        onDragEnd={(_, info) => {
          if (info.offset.y > 120) onClose();
        }}
        className="relative flex h-full max-h-[100svh] w-full max-w-md flex-col overflow-hidden bg-black sm:rounded-2xl"
      >
        {/* progress bars */}
        <div className="absolute inset-x-0 top-[max(0.5rem,env(safe-area-inset-top))] z-20 flex gap-1.5 px-3">
          {photos.map((p, i) => (
            <StoryProgressBar
              key={p.id}
              active={i === index}
              done={i < index}
              paused={paused}
              duration={SLIDE_DURATION}
              onComplete={goNext}
            />
          ))}
        </div>

        {/* header */}
        <div className="absolute inset-x-0 top-[max(1.5rem,calc(env(safe-area-inset-top)+1rem))] z-20 flex items-center justify-between px-4">
          <span className="font-script text-lg text-white italic drop-shadow">
            {birthdayData.recipientName}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? "Play" : "Pause"}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm"
            >
              {paused ? <Play size={14} /> : <Pause size={14} />}
            </button>
            <button
              onClick={onClose}
              aria-label="Close"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* image */}
        <div className="relative flex flex-1 items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={current.id}
              src={current.src}
              alt={current.caption}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="h-full w-full object-cover"
            />
          </AnimatePresence>

          {/* tap zones */}
          <button
            aria-label="Previous photo"
            className="absolute inset-y-0 left-0 z-10 w-1/3"
            onPointerDown={startHold}
            onPointerUp={endHold}
            onPointerLeave={endHold}
            onClick={goPrev}
          />
          <button
            aria-label="Next photo"
            className="absolute inset-y-0 right-0 z-10 w-2/3"
            onPointerDown={startHold}
            onPointerUp={endHold}
            onPointerLeave={endHold}
            onClick={goNext}
          />

          {/* caption */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-5 pt-16 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
            <AnimatePresence mode="wait">
              <motion.p
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="font-script text-lg text-white italic drop-shadow"
              >
                {current.caption}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

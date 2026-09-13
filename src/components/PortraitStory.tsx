import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Pause, Play, X } from "lucide-react";
import { birthdayData } from "../data/birthdayData";
import type { GalleryPhoto } from "../data/birthdayData";

const SLIDE_DURATION = 4200;

function StoryProgressBar({
  state,
  progress,
}: {
  state: "upcoming" | "active" | "done";
  progress: number;
}) {
  const scaleX = state === "done" ? 1 : state === "active" ? progress : 0;

  return (
    <div className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/30">
      <div
        style={{ transform: `scaleX(${scaleX})`, transformOrigin: "left" }}
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
  const [progress, setProgress] = useState(0);
  const holdTimer = useRef<number | null>(null);
  const elapsedRef = useRef(0);

  const goNext = () =>
    setIndex((i) => {
      if (i + 1 >= photos.length) {
        onClose();
        return i;
      }
      return i + 1;
    });
  const goPrev = () => setIndex((i) => Math.max(0, i - 1));

  // reset progress whenever the slide changes
  useEffect(() => {
    elapsedRef.current = 0;
    setProgress(0);
  }, [index]);

  // single owned animation-frame loop drives both the visual progress and
  // the advance — it cancels itself on every dependency change, so pausing
  // and resuming can never spawn a second overlapping timer.
  useEffect(() => {
    if (paused) return;
    let raf = 0;
    const startedAt = performance.now() - elapsedRef.current;

    const tick = (now: number) => {
      const elapsed = now - startedAt;
      elapsedRef.current = elapsed;
      const p = Math.min(1, elapsed / SLIDE_DURATION);
      setProgress(p);
      if (p >= 1) {
        goNext();
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, paused]);

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
  }, []);

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
              state={i < index ? "done" : i === index ? "active" : "upcoming"}
              progress={progress}
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

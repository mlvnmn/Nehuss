import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { birthdayData } from "../data/birthdayData";

export default function Gallery() {
  const photos = birthdayData.galleryPhotos;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const goNext = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % photos.length));
  const goPrev = () =>
    setActiveIndex((i) =>
      i === null ? null : (i - 1 + photos.length) % photos.length
    );

  useEffect(() => {
    if (activeIndex === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") setActiveIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  const active = activeIndex !== null ? photos[activeIndex] : null;

  return (
    <section className="relative w-full px-5 py-20 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="mb-10 text-center"
      >
        <p className="font-script mb-1 text-lg italic text-[#a45c47]">
          Us, in no particular order
        </p>
        <h2 className="font-display text-3xl font-semibold text-[#3e1f2e] sm:text-4xl">
          Our Gallery
        </h2>
      </motion.div>

      <div className="mx-auto max-w-md columns-2 gap-3 sm:gap-4">
        {photos.map((photo, i) => (
          <motion.button
            key={photo.id}
            type="button"
            onClick={() => setActiveIndex(i)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
            className="mb-3 block w-full overflow-hidden rounded-2xl glass shadow-md shadow-rose-200/30 sm:mb-4"
          >
            <img
              src={photo.src}
              alt={photo.caption}
              loading="lazy"
              width={400}
              height={500}
              className="h-auto w-full object-cover"
            />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#3e1f2e]/70 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.7}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) goNext();
                else if (info.offset.x > 60) goPrev();
              }}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative max-h-[85svh] w-full max-w-sm overflow-hidden rounded-2xl bg-[#fffaf3] shadow-2xl"
            >
              <button
                onClick={() => setActiveIndex(null)}
                aria-label="Close photo"
                className="absolute top-3 right-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm"
              >
                <X size={16} />
              </button>

              <span className="absolute top-3 left-3 z-20 rounded-full bg-black/40 px-2.5 py-1 text-xs text-white backdrop-blur-sm">
                {activeIndex! + 1} / {photos.length}
              </span>

              <button
                onClick={goPrev}
                aria-label="Previous photo"
                className="absolute top-1/2 left-2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm active:scale-90"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={goNext}
                aria-label="Next photo"
                className="absolute top-1/2 right-2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm active:scale-90"
              >
                <ChevronRight size={18} />
              </button>

              <AnimatePresence mode="wait">
                <motion.img
                  key={active.id}
                  src={active.src}
                  alt={active.caption}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="max-h-[70svh] w-full object-contain"
                />
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p
                  key={active.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, delay: 0.05 }}
                  className="font-script px-5 py-4 text-center text-base italic text-[#3e1f2e]"
                >
                  {active.caption}
                </motion.p>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

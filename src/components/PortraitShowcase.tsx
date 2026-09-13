import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play } from "lucide-react";
import { birthdayData } from "../data/birthdayData";
import PortraitStory from "./PortraitStory";

export default function PortraitShowcase() {
  const [storyIndex, setStoryIndex] = useState<number | null>(null);
  const preview = birthdayData.portraits.slice(0, 5);

  return (
    <section className="relative w-full px-5 py-20 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="mb-3 text-center"
      >
        <p className="font-script mb-1 text-lg italic text-[#a45c47]">
          Tap to press play
        </p>
        <h2 className="font-display text-3xl font-semibold text-[#3e1f2e] sm:text-4xl">
          Entee Nehussntee Photoessss
        </h2>
      </motion.div>

      <motion.button
        type="button"
        onClick={() => setStoryIndex(0)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative mx-auto mt-8 block h-64 w-full max-w-xs"
      >
        {preview.map((p, i) => (
          <div
            key={p.id}
            className="absolute inset-0 overflow-hidden rounded-3xl border-2 border-white/80 shadow-lg shadow-rose-300/30"
            style={{
              transform: `rotate(${(i - 2) * 6}deg) translateX(${(i - 2) * 14}px)`,
              zIndex: preview.length - Math.abs(i - 2),
            }}
          >
            <img
              src={p.src}
              alt={p.caption}
              className="h-full w-full object-cover"
            />
          </div>
        ))}

        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: [0.9, 1.05, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-[#a45c47] shadow-xl"
          >
            <Play size={22} fill="currentColor" className="ml-0.5" />
          </motion.div>
        </div>
      </motion.button>

      <p className="mt-6 text-center text-xs tracking-wide text-[#a45c47] uppercase">
        tap the stack to play
      </p>

      <AnimatePresence>
        {storyIndex !== null && (
          <PortraitStory
            startIndex={storyIndex}
            onClose={() => setStoryIndex(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

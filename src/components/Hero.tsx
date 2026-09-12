import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";
import { ChevronDown, Sparkles } from "lucide-react";
import { birthdayData } from "../data/birthdayData";

function NameCycler({
  words,
  interval = 550,
}: {
  words: string[];
  interval?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words, interval]);

  return (
    <span className="font-script relative inline-grid min-h-[1.2em] place-items-center italic text-[#3e1f2e]">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -14, filter: "blur(4px)" }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="col-start-1 row-start-1 whitespace-nowrap"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function fireConfetti() {
  const colors = ["#f6bcc2", "#e8b4a0", "#cba135", "#fde2e4", "#fff7f0"];

  confetti({
    particleCount: 120,
    spread: 90,
    origin: { y: 0.6 },
    colors,
    scalar: 1.1,
    ticks: 220,
  });

  const duration = 1500;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 60,
      origin: { x: 0, y: 0.7 },
      colors,
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 60,
      origin: { x: 1, y: 0.7 },
      colors,
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-6 flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-wide text-[#8a5145]"
      >
        <Sparkles size={14} />
        <span>{birthdayData.birthDate}</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="font-display text-gradient animate-shimmer text-[2.75rem] leading-[1.1] font-semibold sm:text-6xl md:text-7xl"
      >
        {birthdayData.heroTitle}
        <br />
        <NameCycler words={birthdayData.recipientNicknames} />
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35 }}
        className="font-script mx-auto mt-6 max-w-md text-lg leading-relaxed text-[#6b3a4f] sm:text-xl"
      >
        {birthdayData.heroSubtitle}
        {birthdayData.heroSubtitleHighlight}
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.55 }}
        whileTap={{ scale: 0.94 }}
        onClick={fireConfetti}
        className="mt-10 rounded-full bg-gradient-to-r from-[#e8b4a0] via-[#f6bcc2] to-[#cba135] px-8 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg shadow-rose-300/50 active:shadow-md"
      >
        {birthdayData.heroButtonText} ✨
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.6 },
          y: { delay: 1.2, duration: 1.8, repeat: Infinity },
        }}
        className="absolute bottom-8 text-[#a45c47]"
      >
        <ChevronDown size={26} />
      </motion.div>
    </section>
  );
}

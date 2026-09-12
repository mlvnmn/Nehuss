import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Sparkles } from "lucide-react";
import { birthdayData } from "../data/birthdayData";

export default function CakeInteraction() {
  const [blownOut, setBlownOut] = useState(false);

  const handleBlow = () => {
    if (blownOut) return;
    setBlownOut(true);
    const colors = ["#f6bcc2", "#e8b4a0", "#cba135", "#fde2e4"];
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.5 },
      colors,
      startVelocity: 35,
      scalar: 1.1,
    });
  };

  return (
    <section className="relative flex w-full flex-col items-center px-5 py-20 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="mb-3 text-center"
      >
        <p className="font-script mb-1 text-lg italic text-[#a45c47]">
          Make a wish
        </p>
        <h2 className="font-display text-3xl font-semibold text-[#3e1f2e] sm:text-4xl">
          Blow Out the Candle
        </h2>
        <p className="mt-2 text-sm text-[#6b3a4f]">
          {blownOut ? "" : "Tap the flame ✨"}
        </p>
      </motion.div>

      <motion.button
        type="button"
        onClick={handleBlow}
        whileTap={{ scale: 0.96 }}
        className="relative mt-6 flex flex-col items-center focus:outline-none"
        aria-label="Blow out the candle"
      >
        {/* flame + smoke */}
        <div className="relative mb-1 h-14 w-6">
          <AnimatePresence>
            {!blownOut && (
              <motion.div
                exit={{ opacity: 0, scale: 0.3, y: -10 }}
                transition={{ duration: 0.35 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2"
              >
                <div className="animate-flicker h-9 w-5 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-gradient-to-t from-[#e8560e] via-[#f9a825] to-[#fff59d] shadow-[0_0_18px_6px_rgba(249,168,37,0.55)]" />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {blownOut && (
              <>
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0.6, y: 0, x: 0, scale: 0.6 }}
                    animate={{
                      opacity: 0,
                      y: -40 - i * 6,
                      x: i % 2 === 0 ? 14 : -14,
                      scale: 1.4,
                    }}
                    transition={{ duration: 1.4, delay: i * 0.15 }}
                    className="absolute bottom-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#cbb9b0]/70 blur-[2px]"
                  />
                ))}
              </>
            )}
          </AnimatePresence>
        </div>

        {/* wick */}
        <div className="h-3 w-1 rounded-full bg-[#4a3025]" />

        {/* candle */}
        <div className="h-16 w-4 rounded-t-sm bg-gradient-to-b from-[#f6bcc2] to-[#e8b4a0] shadow-inner" />

        {/* cake */}
        <div className="relative -mt-1">
          <div className="h-8 w-44 rounded-t-2xl bg-gradient-to-b from-[#fff2e6] to-[#f6dcc9] shadow-md sm:w-52" />
          <div className="h-14 w-52 rounded-b-3xl bg-gradient-to-b from-[#f6bcc2] to-[#e8899a] shadow-lg sm:w-60" />
          <div
            className="absolute -bottom-1 left-0 h-4 w-full bg-repeat-x opacity-90"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fff7f0 3px, transparent 3.5px)",
              backgroundSize: "14px 14px",
            }}
          />
        </div>
      </motion.button>

      <AnimatePresence>
        {blownOut && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 max-w-sm rounded-2xl glass p-6 text-center shadow-lg shadow-rose-200/40"
          >
            <Sparkles className="mx-auto mb-3 text-[#cba135]" size={22} />
            <p className="font-script text-lg leading-relaxed text-[#3e1f2e] italic">
              {birthdayData.wishMessage}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

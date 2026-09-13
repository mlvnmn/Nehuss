import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, X } from "lucide-react";
import { birthdayData } from "../data/birthdayData";

function useTypewriter(text: string, active: boolean, targetDurationMs = 9000) {
  const [output, setOutput] = useState("");
  const indexRef = useRef(0);
  const tickMs = 16;
  const charsPerTick = Math.max(1, Math.ceil(text.length / (targetDurationMs / tickMs)));

  useEffect(() => {
    if (!active) {
      setOutput("");
      indexRef.current = 0;
      return;
    }
    const interval = setInterval(() => {
      indexRef.current += charsPerTick;
      setOutput(text.slice(0, indexRef.current));
      if (indexRef.current >= text.length) clearInterval(interval);
    }, tickMs);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, text]);

  return output;
}

export default function LetterModal() {
  const [open, setOpen] = useState(false);
  const typed = useTypewriter(birthdayData.letterContent, open);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section className="relative flex w-full flex-col items-center px-5 py-24 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="mb-10 text-center"
      >
        <p className="font-script mb-1 text-lg italic text-[#a45c47]">
          One more thing
        </p>
        <h2 className="font-display text-3xl font-semibold text-[#3e1f2e] sm:text-4xl">
          A Letter For You
        </h2>
      </motion.div>

      <motion.button
        onClick={() => setOpen(true)}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative flex h-36 w-56 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-[#f6dcc9] to-[#f6bcc2] shadow-lg shadow-rose-300/40"
      >
        <div
          className="absolute inset-x-0 top-0 h-full"
          style={{
            clipPath: "polygon(0 0, 50% 45%, 100% 0)",
            background: "linear-gradient(135deg,#e8b4a0,#f6bcc2)",
          }}
        />
        <Mail className="relative z-10 mb-1 text-[#8a5145]" size={26} />
        <span className="relative z-10 text-xs font-medium tracking-wide text-[#8a5145]">
          tap to open
        </span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#3e1f2e]/60 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 40, scale: 0.92, rotateX: -8 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, y: 20, scale: 0.94 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative max-h-[85svh] w-full max-w-sm overflow-y-auto rounded-2xl bg-[#fffaf3] p-6 shadow-2xl"
              style={{
                backgroundImage:
                  "linear-gradient(#f3e4d0 1px, transparent 1px)",
                backgroundSize: "100% 1.7rem",
              }}
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close letter"
                className="sticky top-0 float-right -mt-1 -mr-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#f6dcc9] text-[#8a5145]"
              >
                <X size={16} />
              </button>
              <p className="font-script mt-2 min-h-[220px] leading-[1.7rem] whitespace-pre-line text-[#3e1f2e]">
                {typed}
                {typed.length < birthdayData.letterContent.length && (
                  <span className="animate-pulse">|</span>
                )}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Infinity as InfinityIcon, Heart } from "lucide-react";
import { birthdayData } from "../data/birthdayData";

function getTimeTogether(start: Date) {
  const now = new Date();
  let diff = now.getTime() - start.getTime();
  if (diff < 0) diff = 0;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export default function Footer() {
  const start = new Date(birthdayData.relationshipStartDate);
  const [time, setTime] = useState(getTimeTogether(start));

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeTogether(start)), 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const units = [
    { label: "days", value: time.days },
    { label: "hours", value: time.hours },
    { label: "min", value: time.minutes },
    { label: "sec", value: time.seconds },
  ];

  return (
    <footer className="relative w-full px-5 pt-16 pb-12 text-center sm:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#e8b4a0] to-[#cba135] text-white shadow-lg shadow-rose-300/40"
      >
        <InfinityIcon size={26} />
      </motion.div>

      <p className="font-script mb-6 text-lg text-[#6b3a4f] italic">
        Time we've spent together, and counting
      </p>

      <div className="mx-auto mb-10 grid max-w-xs grid-cols-4 gap-2">
        {units.map((u) => (
          <div
            key={u.label}
            className="rounded-xl glass px-1 py-3 shadow-sm shadow-rose-200/30"
          >
            <div className="font-display text-xl font-semibold text-[#3e1f2e] sm:text-2xl">
              {u.value}
            </div>
            <div className="text-[10px] tracking-wide text-[#a45c47] uppercase">
              {u.label}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-1.5 text-sm text-[#a45c47]">
        <span>Made with</span>
        <Heart size={13} className="fill-[#e8899a] text-[#e8899a]" />
        <span>for {birthdayData.recipientName}</span>
      </div>
    </footer>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { birthdayData } from "../data/birthdayData";

function FlipCard({ title, note }: { title: string; note: string }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative h-40 w-full cursor-pointer [perspective:1000px] sm:h-44"
      onClick={() => setFlipped((f) => !f)}
    >
      <motion.div
        className="relative h-full w-full [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* front */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-2xl glass p-4 text-center shadow-md shadow-rose-200/30 [backface-visibility:hidden]">
          <Heart size={22} className="fill-[#e8b4a0] text-[#e8b4a0]" />
          <h3 className="font-display text-sm font-semibold text-[#3e1f2e]">
            {title}
          </h3>
          <span className="text-[10px] tracking-wide text-[#a45c47] uppercase">
            tap to reveal
          </span>
        </div>

        {/* back */}
        <div
          className="absolute inset-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#e8b4a0] via-[#f6bcc2] to-[#cba135] p-4 text-center shadow-md shadow-rose-300/40 [backface-visibility:hidden]"
          style={{ transform: "rotateY(180deg)" }}
        >
          <p className="font-script text-base leading-snug text-white italic">
            {note}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function NotesGrid() {
  return (
    <section className="relative w-full px-5 py-20 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="mb-12 text-center"
      >
        <p className="font-script mb-1 text-lg italic text-[#a45c47]">
          A few little truths
        </p>
        <h2 className="font-display text-3xl font-semibold text-[#3e1f2e] sm:text-4xl">
          Things I Adore About You
        </h2>
      </motion.div>

      <div className="mx-auto grid max-w-md grid-cols-2 gap-4">
        {birthdayData.loveNotes.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            <FlipCard title={item.title} note={item.note} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

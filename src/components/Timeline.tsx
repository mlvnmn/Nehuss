import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { birthdayData } from "../data/birthdayData";

export default function Timeline() {
  return (
    <section className="relative w-full px-5 py-20 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="mb-14 text-center"
      >
        <p className="font-script mb-1 text-lg italic text-[#a45c47]">
          Every moment, remembered
        </p>
        <h2 className="font-display text-3xl font-semibold text-[#3e1f2e] sm:text-4xl">
          Memory Lane
        </h2>
      </motion.div>

      <div className="relative mx-auto max-w-md">
        {/* vertical line */}
        <div className="absolute top-0 bottom-0 left-[22px] w-px bg-gradient-to-b from-transparent via-[#e8b4a0] to-transparent" />

        <div className="flex flex-col gap-10">
          {birthdayData.memories.map((memory, i) => (
            <motion.div
              key={memory.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="relative pl-14"
            >
              <div className="absolute top-1 left-0 flex h-11 w-11 items-center justify-center rounded-full glass shadow-md shadow-rose-200/50">
                <Heart size={16} className="fill-[#e8b4a0] text-[#e8b4a0]" />
              </div>

              <div className="overflow-hidden rounded-2xl glass shadow-lg shadow-rose-200/30">
                <div className="h-40 w-full overflow-hidden sm:h-48">
                  <motion.img
                    src={memory.imagePlaceholder}
                    alt={memory.title}
                    loading="lazy"
                    width={600}
                    height={400}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-display mb-1 text-base font-semibold text-[#3e1f2e]">
                    {memory.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#6b3a4f]">
                    {memory.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

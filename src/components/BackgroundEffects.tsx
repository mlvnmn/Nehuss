import { useMemo } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, Star } from "lucide-react";

const ICONS = [Heart, Sparkles, Star];

interface Particle {
  id: number;
  icon: typeof Heart;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

function useParticles(count: number): Particle[] {
  return useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        icon: ICONS[i % ICONS.length],
        left: Math.random() * 100,
        size: 10 + Math.random() * 18,
        duration: 10 + Math.random() * 14,
        delay: Math.random() * 10,
        opacity: 0.15 + Math.random() * 0.35,
      })),
    [count]
  );
}

export default function BackgroundEffects() {
  const particles = useParticles(18);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* warm gradient base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 10%, #fdeef0 0%, transparent 45%), radial-gradient(circle at 85% 15%, #f6e3cf 0%, transparent 40%), radial-gradient(circle at 50% 90%, #f3d9dd 0%, transparent 50%), linear-gradient(180deg, #fff7f0 0%, #fde9ec 40%, #fbe4d8 100%)",
        }}
      />

      {particles.map((p) => {
        const Icon = p.icon;
        return (
          <motion.div
            key={p.id}
            className="absolute text-rose-300"
            style={{ left: `${p.left}%`, opacity: p.opacity, color: "#e8b4a0" }}
            initial={{ y: "110vh", rotate: 0 }}
            animate={{ y: "-10vh", rotate: 360 }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Icon size={p.size} fill="currentColor" strokeWidth={0.5} />
          </motion.div>
        );
      })}
    </div>
  );
}

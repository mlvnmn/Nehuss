import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Music2, VolumeX } from "lucide-react";
import { birthdayData } from "../data/birthdayData";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onError = () => setReady(false);
    audio.addEventListener("error", onError);
    return () => audio.removeEventListener("error", onError);
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio || !ready) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.volume = 0.45;
      audio.play().catch(() => setReady(false));
      setPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={birthdayData.playlist.src} loop preload="none" />
      <motion.button
        onClick={toggle}
        aria-label={playing ? "Pause music" : "Play music"}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed top-[max(1rem,env(safe-area-inset-top))] right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full glass shadow-lg shadow-rose-200/40"
      >
        {playing && ready ? (
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="text-[#a45c47]"
          >
            <Music2 size={18} />
          </motion.span>
        ) : (
          <span className="text-[#a45c47]">
            {ready ? <Music2 size={18} /> : <VolumeX size={18} />}
          </span>
        )}
      </motion.button>
    </>
  );
}

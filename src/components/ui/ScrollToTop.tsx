import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");
  const { scrollYProgress } = useScroll();

  // Create a spring for smooth progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Transform scroll progress to a percentage (0 to 100)
  const progressPercent = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrollPercent = (scrollPos / (docHeight - windowHeight)) * 100;

      setIsVisible(scrollPos > windowHeight * 0.2);

      // Update message based on thresholds
      if (scrollPercent >= 95) {
        setMessage("Energy Full! Scroll up?");
      } else if (scrollPercent >= 70) {
        setMessage("You're almost there...");
      } else {
        setMessage("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center gap-4">
      {/* Dynamic Message Pop-up */}
      {message && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-slate-900 text-amber-500 px-4 py-2 rounded-lg text-sm font-bold border border-amber-500/30 whitespace-nowrap"
        >
          {message}
        </motion.div>
      )}

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: isVisible ? 1 : 0 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="w-14 h-14 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center shadow-2xl relative"
      >
        {/* Progress Ring */}
        <svg className="absolute w-16 h-16 -rotate-90">
          <motion.circle
            cx="32"
            cy="32"
            r="28"
            stroke="currentColor"
            strokeWidth="3"
            fill="transparent"
            // Change color to bright white/glow when energy is full
            className={`${progressPercent.get() >= 95 ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" : "text-amber-500"}`}
            style={{ pathLength: scaleX }}
          />
        </svg>

        {/* Icon: Glows when full */}
        <motion.svg
          className={`w-6 h-6 ${progressPercent.get() >= 95 ? "text-white" : "text-amber-500"}`}
          animate={{ scale: progressPercent.get() >= 95 ? 1.2 : 1 }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </motion.svg>
      </motion.button>
    </div>
  );
}

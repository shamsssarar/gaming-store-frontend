import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the loader in this session
    const hasSeenLoader = sessionStorage.getItem("hasSeenLoader");

    if (!hasSeenLoader) {
      setIsVisible(true);
      // Mark as seen so it doesn't show again on internal navigation
      sessionStorage.setItem("hasSeenLoader", "true");
      
      // Auto-hide after 2 seconds
      setTimeout(() => setIsVisible(false), 2000);
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-amber-500 font-black text-4xl"
          >
            SD <span className="text-white">Store</span>
            <motion.div 
              className="h-1 bg-amber-500 mt-2"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
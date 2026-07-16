import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll visibility
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // SVG parameters
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          id="back-to-top-fab"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-2 rounded-full bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 active:scale-95 transition-all cursor-pointer flex items-center justify-center group"
          aria-label="Back to top"
        >
          {/* Radial progress ring */}
          <svg className="absolute w-12 h-12 -rotate-90 pointer-events-none" viewBox="0 0 50 50">
            <circle
              className="text-slate-100 dark:text-slate-850"
              strokeWidth="2.5"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="25"
              cy="25"
            />
            <circle
              className="text-indigo-600 dark:text-indigo-400 transition-all duration-75"
              strokeWidth="2.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="25"
              cy="25"
            />
          </svg>

          {/* Icon inside the ring */}
          <div className="relative z-10 w-8 h-8 flex items-center justify-center group-hover:-translate-y-0.5 transition-transform">
            <ArrowUp className="w-4 h-4" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

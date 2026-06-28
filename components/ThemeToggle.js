import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    // Read saved preference
    const saved = localStorage.getItem('theme');
    const isDark = saved ? saved === 'dark' : true; // dark is default
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }

  return (
    <motion.button
      onClick={toggle}
      whileTap={{ scale: 0.85 }}
      whileHover={{ scale: 1.1 }}
      className="relative w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-gray-200 dark:border-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait">
        {dark ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0,   opacity: 1, scale: 1   }}
            exit={{    rotate: 90,  opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="text-lg absolute"
          >
            ☀️
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 90,  opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0,   opacity: 1, scale: 1   }}
            exit={{    rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="text-lg absolute"
          >
            🌙
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
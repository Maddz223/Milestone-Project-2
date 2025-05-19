import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// DarkModeToggle component to toggle between light and dark themes
const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  // Check local storage for the theme preference on initial load
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setIsDark(storedTheme === "dark");
  }, []);

  // Update the document class and local storage whenever the theme changes
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);
  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    // Button to toggle dark mode
    <button
      onClick={toggleDarkMode}
      aria-label="Toggle Dark Mode"
      aria-pressed={isDark}
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition relative w-10 h-10 flex items-center justify-center">
      {/* AnimatePresence from Framer Motion to handle the animation of the icons */}
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          // Sun icon for light mode
          <motion.svg
            key="sun"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute h-6 w-6 text-yellow-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
            transition={{ duration: 0.3 }}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1
                 M17.66 6.34l-.7-.7M6.34 17.66l-.7-.7
                 M17.66 17.66l-.7.7M6.34 6.34l-.7.7
                 M12 8a4 4 0 100 8 4 4 0 000-8z"/>
          </motion.svg>
        ) : (
          // Moon icon for dark mode
          <motion.svg
            key="moon"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute h-6 w-6 text-gray-800 dark:text-gray-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            initial={{ opacity: 0, scale: 0.8, rotate: 90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: -90 }}
            transition={{ duration: 0.3 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
            />
          </motion.svg>
        )}
      </AnimatePresence>
    </button>
  );
};

export default DarkModeToggle;
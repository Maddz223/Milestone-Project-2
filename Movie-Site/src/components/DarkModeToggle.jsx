import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  // Check initial mode based on localStorage or system preference
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    if (localStorage.theme === "dark") return true;
    if (
      !("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    )
      return true;
    return false;
  });

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
    <button
      onClick={toggleDarkMode}
      aria-label="Toggle Dark Mode"
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
    >
      {isDark ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          {/* Sun icon */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m14.07 6.36l-.7-.7M6.34 6.34l-.7-.7m12.02 12.02l-.7-.7M6.34 17.66l-.7-.7M12 8a4 4 0 100 8 4 4 0 000-8z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          {/* Moon icon */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
          />
        </svg>
      )}
    </button>
  );
};

export default DarkModeToggle;
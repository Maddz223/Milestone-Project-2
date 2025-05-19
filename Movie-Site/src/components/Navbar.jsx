import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

// Components
import SearchBar from "./SearchBar";
import DarkModeToggle from "./DarkModeToggle";


const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: "/", label: "Home", exact: true },
    { to: "/movies", label: "Movies" },
    { to: "/tv-series", label: "TV Series" },
    { to: "/watchlist", label: "Watchlist" },
    { to: "/contactUs", label: "Contact Us" },
  ];

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-3 flex flex-wrap items-center justify-center gap-10">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-black dark:text-white flex-shrink-0"
        >
          What2Watch
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-300 text-xl font-semibold flex-shrink-0">
          {links.map(({ to, label, exact }) => {
            const isActive = exact
              ? location.pathname === to
              : location.pathname.startsWith(to);
            return (
              <li key={to}>
                <NavLink
                  to={to}
                  className={`hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 ${
                    isActive ? "text-indigo-600 dark:text-indigo-400" : ""
                  }`}
                >
                  {label}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* SearchBar and Dark Mode Toggle */}
        <div className="hidden md:flex items-center gap-6 flex-grow min-w-[280px] max-w-md">
          <SearchBar />
          <DarkModeToggle />
        </div>

        {/* Mobile menu toggle button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none flex-shrink-0"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden text-center bg-white dark:bg-gray-900 px-6 pb-6 space-y-6">
          <ul className="flex flex-col gap-6 text-gray-700 dark:text-gray-300 text-lg font-semibold">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={handleLinkClick}
                  className="block hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="w-full">
            <SearchBar />
          </div>
          <DarkModeToggle />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
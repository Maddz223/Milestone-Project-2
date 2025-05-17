import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
import DarkModeToggle from "./DarkModeToggle";
import { Menu, X } from "lucide-react"; // optional icon package

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: "/", label: "Home", exact: true },
    { to: "/movies", label: "Movies" },
    { to: "/tv-series", label: "TV Series" },
    { to: "/watchlist", label: "Watchlist"},
    { to: "/contactUs", label: "Contact Us" },
  ];

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // close menu when a link is clicked
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-black dark:text-white"
        >
          What2Watch
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-300 text-xl font-semibold">
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

        {/* Right: Search + Toggle */}
        <div className="hidden md:flex items-center gap-3 w-full md:w-auto">
          <div className="w-full max-w-xs md:max-w-sm">
            <SearchBar />
          </div>
          <DarkModeToggle />
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={toggleMenu}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-4">
          <ul className="flex flex-col gap-4 text-gray-700 dark:text-gray-300 text-sm font-semibold">
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
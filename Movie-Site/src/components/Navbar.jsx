import { NavLink, Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home", exact: true },
    { to: "/movies", label: "Movies" },
    { to: "/tv-series", label: "TV Series" },
    { to: "/contactUs", label: "Contact Us" },
  ];

  return (
    <nav className="p-4 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Logo + Navigation */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-10">
          <Link
            to="/"
            className="text-2xl font-extrabold text-black dark:text-white mb-2 md:mb-0 cursor-pointer select-none"
          >
            Movie and TV Series
          </Link>
          <ul className="flex gap-6 text-gray-700 dark:text-gray-300 text-sm font-semibold">
            {links.map(({ to, label, exact }) => {
              // Hide the link if its path matches current location
              if (
                exact
                  ? location.pathname === to
                  : location.pathname.startsWith(to)
              ) {
                return null;
              }
              return (
                <li key={to}>
                  <NavLink
                    to={to}
                    className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                  >
                    {label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right: Search bar */}
        <div className="w-full md:w-1/2">
          <SearchBar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
// src/components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-around text-white">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/tv-series">TV Series</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
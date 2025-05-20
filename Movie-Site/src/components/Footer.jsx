import { Link } from 'react-router-dom';
import { Facebook, Instagram, Github } from 'lucide-react';

// Custom X (Twitter) Icon
const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-x-twitter"
    aria-hidden="true"
  >
    <path d="M8,2H3L16.7,22h5.1L8,2z" />
    <line x1="2.3" y1="22.1" x2="10.2" y2="12.8" />
    <line x1="19.8" y1="2" x2="13.3" y2="9.6" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 border-t border-gray-200 dark:border-gray-700 min-h-[96px]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        
        {/* Copyright */}
        <div className="text-center md:text-left text-sm">
          &copy; {new Date().getFullYear()} What2Watch. All rights reserved.
        </div>

        {/* Social Media Links */}
        <div className="flex gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-indigo-600 transition-colors duration-200"
          >
            <Github size={20} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-indigo-600 transition-colors duration-200"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-indigo-600 transition-colors duration-200"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (formerly Twitter)"
            className="hover:text-indigo-600 transition-colors duration-200"
          >
            <XIcon />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <Link to="/" className="hover:text-indigo-600 transition-colors duration-200">
            Home
          </Link>
          <Link to="/movies" className="hover:text-indigo-600 transition-colors duration-200">
            Movies
          </Link>
          <Link to="/tv-series" className="hover:text-indigo-600 transition-colors duration-200">
            TV Series
          </Link>
          <Link to="/watchlist" className="hover:text-indigo-600 transition-colors duration-200">
            Watchlist
          </Link>
          <Link to="/contactus" className="hover:text-indigo-600 transition-colors duration-200">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Github } from 'lucide-react';

// X Icon 
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
>
  <path d="M8,2H3L16.7,22h5.1L8,2z" />
  <line x1="2.3" y1="22.1" x2="10.2" y2="12.8" />
  <line x1="19.8" y1="2" x2="13.3" y2="9.6" />
</svg>
)

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="text-center md:text-left text-sm">
          &copy; {new Date().getFullYear()} What2Watch. All rights reserved.
        </div>
        {/* Social Links */} 
        <div className='flex gap-4'>
          <a href="https://github.com" target='_blank' rel='noopener noreferrer' className='hover:text-indigo-600 transition-colors duration-200'>
          <Github size={20} />
          </a>
          <a href="https://facebook.com" target='_blank' rel='noopener noreferrer' className='hover:text-indigo-600 transition-colors duration-200'>
          <Facebook size={20} />
          </a>
          <a href="https://instagram.com" target='_blank' rel='noopener noreferrer' className='hover:text-indigo-600 transition-colors duration-200'>
          <Instagram size={20} />
          </a>
          <a href="https://x.com" target='_blank' rel='noopener noreferrer' className='hover:text-indigo-600 transition-colors duration-200'>
          <XIcon size={20} />
          </a>
        </div>
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
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="text-center md:text-left text-sm">
          &copy; {new Date().getFullYear()} What2Watch. All rights reserved.
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
import { Suspense, lazy } from 'react'; // To help with performance
import { HashRouter, Routes, Route } from 'react-router-dom'; // Route handler

// Context
import { WatchlistProvider } from "./context/WatchlistContext";

// Components
import ScrollToTop from "./components/ScrollToTop";
import Navbar from './components/Navbar'; // Navbar import
import SearchResults from './components/SearchResults'; // SearchResults import
import Footer from "./components/Footer"; // Footer import

// Lazy Imports to help with performance
const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const TVSeries = lazy(() => import('./pages/TVSeries'));
const Watchlist = lazy(() => import('./pages/Watchlist'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const TVDetails = lazy(() => import('./pages/TVDetails'));

function App() {
  return (
    // Wrap the app with the WatchlistProvider to provide the watchlist context
    <WatchlistProvider>
      {/* Use HashRouter with basename to handle routing on GitHub Pages */}
      <HashRouter basename="/Milestone-Project-2/">
        {/* ScrollToTop component to scroll to the top of the page on route change */}
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
          {/* Navbar component for navigation */}
          <Navbar />
          {/* Suspense to handle lazy loading of components */}
          <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
            <main className="flex-grow">
              {/* Define routes for the application */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/tv-series" element={<TVSeries />} />
                <Route path="/watchlist" element={<Watchlist />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/movie/:movieId" element={<MovieDetails />} />
                <Route path="/tv/:tvId" element={<TVDetails />} />
                <Route path="/search" element={<SearchResults />} />
              </Routes>
            </main>
          </Suspense>
          <Footer />
        </div>
      </HashRouter>
    </WatchlistProvider>
  );
}

export default App;
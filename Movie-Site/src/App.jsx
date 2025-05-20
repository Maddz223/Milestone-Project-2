import { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Use HashRouter for GitHub Pages

import { WatchlistProvider } from "./context/WatchlistContext";

// Components
import ScrollToTop from "./components/ScrollToTop";
import Navbar from './components/Navbar';
import SearchResults from './components/SearchResults';
import Footer from "./components/Footer";

// Lazy Imports
const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const TVSeries = lazy(() => import('./pages/TVSeries'));
const Watchlist = lazy(() => import('./pages/Watchlist'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const TVDetails = lazy(() => import('./pages/TVDetails'));

function App() {
  return (
    <WatchlistProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
          <Navbar />
          <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
            <main className="flex-grow">
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
      </Router>
    </WatchlistProvider>
  );
}

export default App;
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchResults from './components/SearchResults';

{/* Lazy imports to help with first loading */ }
const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const TVSeries = lazy(() => import('./pages/TVSeries'));
const Watchlist = lazy(() => import('./pages/Watchlist'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const TVDetails = lazy(() => import('./pages/TVDetails'));


function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />{/* Movies Route */}
          <Route path="/tv-series" element={<TVSeries />} />{/* TV Series Route */}
          <Route path="/watchlist" element={<Watchlist />} />{/* Watchlist Route */}
          <Route path="/contactus" element={<ContactUs />} />{/* ContractUS Route */}
          <Route path="/movie/:movieId" element={<MovieDetails />} /> {/* Movie Details Route */}
          <Route path="/tv/:tvId" element={<TVDetails />} />{/* TV Series Details Route */}
          <Route path="/search" element={<SearchResults />} />{/* Search Results Route */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
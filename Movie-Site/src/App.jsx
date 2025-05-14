import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TVSeries from "./pages/TVSeries";
import Watchlist from "./pages/Watchlist";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Navbar";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />{/* Movies Route */}
        <Route path="/tv-series" element={<TVSeries />} />{/* TV Series Route */}
        <Route path="/watchlist" element={<Watchlist />} />{/* Watchlist Route */}
        <Route path="/contact-us" element={<ContactUs />} />{/* ContractUS Route */}
        <Route path="/movie/:movieId" element={<MovieDetails />} /> {/* Movie Details Route */}
      </Routes>
    </Router>
  );
}

export default App;
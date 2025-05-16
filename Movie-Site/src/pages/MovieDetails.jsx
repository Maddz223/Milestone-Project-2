import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import getCountryCode from "../utils/location";

// Components
import WatchlistButton from "../components/WatchlistButton";
import CastList from "../components/Castlist";
import TrailerGallery from "../components/TrailerGallery";
import TrailerModal from "../components/TrailerModal";
import WatchProviders from "../components/WatchProviders";

// Utils
import {
  addToWatchlist,
  removeFromWatchlist,
  isInWatchlist,
} from "../utils/watchlist";

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [trailers, setTrailers] = useState([]);
  const [watchProviders, setWatchProviders] = useState({});
  const [selectedTrailer, setSelectedTrailer] = useState(null);
  const [inWatchlist, setInWatchlist] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
        const country = getCountryCode();

        const [movieRes, castRes, trailersRes, providersRes] = await Promise.all([
          axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`),
          axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`),
          axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`),
          axios.get(`https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${API_KEY}`),
        ]);

        setMovieDetails(movieRes.data);
        setCast(castRes.data.cast);

        const filteredTrailers = trailersRes.data.results
          .filter((video) => video.type === "Trailer" && video.site === "YouTube")
          .slice(0, 3);
        setTrailers(filteredTrailers);

        const providersData = providersRes.data.results;
        setWatchProviders(providersData[country] ? { [country]: providersData[country] } : {});
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
        setMovieDetails(null);
        setCast([]);
        setTrailers([]);
        setWatchProviders({});
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  useEffect(() => {
    if (movieDetails) {
      setInWatchlist(isInWatchlist(movieDetails.id, "movie"));
    }
  }, [movieDetails]);

  const toggleWatchlist = () => {
    if (!movieDetails) return;
    if (inWatchlist) {
      removeFromWatchlist(movieDetails.id, "movie");
    } else {
      addToWatchlist({ ...movieDetails, type: "movie" });
    }
    setInWatchlist(!inWatchlist);
  };

  if (!movieDetails) {
    return (
      <div className="container mx-auto p-4 text-center">
        <p className="text-lg text-gray-700 dark:text-gray-300">Loading Movie details...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 rounded-lg bg-gray-100 dark:bg-gray-900 p-6">
        {/* Poster + Watchlist */}
        <div className="flex flex-col items-center">
          <img
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                : "https://via.placeholder.com/500x750?text=No+Image"
            }
            alt={movieDetails.title}
            className="w-64 sm:w-72 lg:w-80 object-cover rounded-lg mb-4 shadow-lg"
          />
          <WatchlistButton inWatchlist={inWatchlist} onToggle={toggleWatchlist} />
        </div>

        {/* Movie Info */}
        <div className="flex-1 text-center lg:text-left space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">{movieDetails.title}</h2>
          <p><strong>Release Date:</strong> {movieDetails.release_date}</p>
          <p><strong>Rating:</strong> {movieDetails.vote_average} / 10</p>
          <p><strong>Overview:</strong> {movieDetails.overview}</p>

          <CastList cast={cast} />
          <TrailerGallery trailers={trailers} onSelect={setSelectedTrailer} />
          {selectedTrailer && (
            <TrailerModal trailer={selectedTrailer} onClose={() => setSelectedTrailer(null)} />
          )}
          <WatchProviders providers={watchProviders} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
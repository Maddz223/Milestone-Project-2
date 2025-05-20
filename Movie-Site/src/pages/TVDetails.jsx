import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Components
import WatchlistButton from "../components/WatchlistButton";
import CastList from "../components/Castlist";
import TrailerGallery from "../components/TrailerGallery";
import TrailerModal from "../components/TrailerModal";
import WatchProviders from "../components/WatchProviders";

// Context
import { useWatchlist } from "../context/WatchlistContext";

// Utils
import getCountryCode from "../utils/location";

// Localized date formatter
const formatLocalizedDate = (dateString) => {
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  return new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

const TVDetails = () => {
  const { tvId } = useParams();
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();

  const [tvDetails, setTvDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [trailers, setTrailers] = useState([]);
  const [watchProviders, setWatchProviders] = useState({});
  const [selectedTrailer, setSelectedTrailer] = useState(null);
  const [inWatchlist, setInWatchlist] = useState(false);

  // Fetch TV details, cast, trailers, and watch providers
  useEffect(() => {
    const fetchTvDetails = async () => {
      try {
        const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
        const country = getCountryCode();

        // Fetch all required data concurrently
        const [tvRes, castRes, trailersRes, providersRes] = await Promise.all([
          axios.get(`https://api.themoviedb.org/3/tv/${tvId}?api_key=${API_KEY}&language=en-US`),
          axios.get(`https://api.themoviedb.org/3/tv/${tvId}/credits?api_key=${API_KEY}`),
          axios.get(`https://api.themoviedb.org/3/tv/${tvId}/videos?api_key=${API_KEY}&language=en-US`),
          axios.get(`https://api.themoviedb.org/3/tv/${tvId}/watch/providers?api_key=${API_KEY}`),
        ]);
        setTvDetails(tvRes.data);
        setCast(castRes.data.cast);

        // Filter trailers to include only YouTube trailers, limit to 3
        const filteredTrailers = trailersRes.data.results
          .filter((video) => video.type === "Trailer" && video.site === "YouTube")
          .slice(0, 3);
        setTrailers(filteredTrailers);

        // Filter watch providers to include only the specified country
        const providersData = providersRes.data.results;
        setWatchProviders(providersData[country] ? { [country]: providersData[country] } : {});
      } catch (error) {
        console.error("Failed to fetch TV details:", error);
        // Reset state in case of error
        setTvDetails(null);
        setCast([]);
        setTrailers([]);
        setWatchProviders({});
      }
    };

    fetchTvDetails();
  }, [tvId]);

  // Check if the TV show is in the watchlist
  useEffect(() => {
    if (tvDetails) {
      setInWatchlist(isInWatchlist(tvDetails.id, "tv"));
    }
  }, [tvDetails, isInWatchlist]);

  // Toggle watchlist status
  const toggleWatchlist = () => {
    if (!tvDetails) return;
    if (inWatchlist) {
      removeFromWatchlist(tvDetails.id, "tv");
    } else {
      addToWatchlist({ ...tvDetails, type: "tv" });
    }
    setInWatchlist(!inWatchlist);
  };

  // Check if TV details are available
  if (!tvDetails) {
    return (
      <div className="container mx-auto p-4 text-center">
        <p className="text-lg text-gray-700 dark:text-gray-300">Loading TV details...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 rounded-lg bg-gray-100 dark:bg-gray-900 p-6">
        {/* Tv Poster*/}
        <div className="flex flex-col items-center">
          <img
            src={
              tvDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500${tvDetails.poster_path}`
                : "https://placehold.co/185x278?text=No+Image&font=roboto"
            }
            alt={tvDetails.name}
            loading="lazy"
            className="w-64 sm:w-72 lg:w-80 object-cover rounded-lg mb-4 shadow-lg" />
          {/* Add to Watchlist button */}
          <WatchlistButton inWatchlist={inWatchlist} onToggle={toggleWatchlist} />
        </div>

        {/* TV Show Info */}
        <div className="flex-1 flex flex-col items-center text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">{tvDetails.name}</h2>
          <p>
            <strong>First Shown Date:</strong> {formatLocalizedDate(tvDetails.first_air_date)}
          </p>
          <p>
            <strong>Rating:</strong> {tvDetails.vote_average} / 10
          </p>
          <p>
            <strong>Overview:</strong> {tvDetails.overview}
          </p>
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

export default TVDetails;
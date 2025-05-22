import { Link } from "react-router-dom";

// Context
import { useWatchlist } from "../context/WatchlistContext";

const Card = ({ movie, type }) => {
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();

  if (!movie || !type) {
    return null;
  }

  const inWatchlist = isInWatchlist(movie.id, type);

  const toggleWatchlist = () => {
    if (inWatchlist) {
      removeFromWatchlist(movie.id, type);
    } else {
      addToWatchlist({ ...movie, type });
    }
  };

  const imagePath = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : "https://placehold.co/300x450?text=No+Image&font=roboto";

  return (
    <div className="relative bg-slate-500 dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 text-center p-2 w-full sm:w-48">
      <Link
        to={`/${type}/${movie.id}`}
        aria-label={`View details of ${movie.title || movie.name}`}
      >
        <img
          src={imagePath}
          alt={movie.title + "Movie" || movie.name + "Movie" || "No Title"}
          className="w-full text-black dark:text-white h-64 object-cover rounded-md mb-2"
          loading="lazy"
        />
        <div className="text-sm font-medium text-white truncate">
          {movie.title || movie.name || "No Title"}
        </div>
      </Link>
      {/* Add to Watchlist button */}
      <button
        onClick={toggleWatchlist}
        className={`mt-2 text-xs font-semibold px-3 py-1 rounded-full transition-colors duration-200 ${inWatchlist ? "bg-red-500 hover:bg-red-600" : "bg-blue-600 hover:bg-blue-700"
          } text-white`}
        aria-label={inWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}>
        {inWatchlist ? "Remove" : "Add to Watchlist"}
      </button>
    </div>
  );
};

export default Card;
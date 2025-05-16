import { useState, useEffect } from "react";
import { addToWatchlist, removeFromWatchlist, isInWatchlist } from "../utils/watchlist";
import { Link } from "react-router-dom";

const Card = ({ movie, type }) => {
  const imagePath = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : "https://placehold.co/300x450?text=No+Image&font=roboto";

  const [inWatchlist, setInWatchlist] = useState(false);

  useEffect(() => {
    setInWatchlist(isInWatchlist(movie.id, type));
  }, [movie.id, type]);

  const toggleWatchlist = () => {
    if (inWatchlist) {
      removeFromWatchlist(movie.id, type);
    } else {
      addToWatchlist({ ...movie, type });
    }
    setInWatchlist(!inWatchlist);
  };

  return (
    <div className="relative bg-slate-500  dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 text-center p-2">
      <Link to={`/${type}/${movie.id}`}>
        <img
          src={imagePath}
          alt={movie.title || movie.name}
          className="w-full h-64 object-cover rounded-md mb-2"
        />
        <div className="text-sm font-medium text-white">
          {movie.title || movie.name}
        </div>
      </Link>
      <button
        onClick={toggleWatchlist}
        className={`mt-2 text-xs font-semibold px-2 py-1 rounded ${inWatchlist ? "bg-red-500 text-white" : "bg-blue-500 text-white"}`}
      >
        {inWatchlist ? "Remove" : "Add to Watchlist"}
      </button>
    </div>
  );
};

export default Card;
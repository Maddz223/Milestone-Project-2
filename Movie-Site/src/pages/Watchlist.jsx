import { Link } from "react-router-dom";

// Context
import { useWatchlist } from "../context/WatchlistContext";

const Watchlist = () => {
  const { watchlist, removeFromWatchlist } = useWatchlist();

  // Check if watchlist is empty
  if (watchlist.length === 0) {
    return (
      <div className="container mx-auto p-15 text-center">
        <h2 className="text-2xl font-semibold mb-4">Your Watchlist is Empty</h2>
        <p>Start adding some movies or TV shows!</p>
      </div>
    );
  }

  // Display watchlist items
  return (
    <div className="container mx-auto pt-15 px-4 py-6">
      <h2 className="text-3xl text-center font-bold mb-6">My Watchlist</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {/* Map through watchlist items */}
        {watchlist.map((item) => (
          <div key={`${item.type}-${item.id}`} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow">
            <Link to={`/${item.type === "movie" ? "movie" : "tv"}/${item.id}`}>
              {/* Movie or TV Show Poster */}
              <img
                src={
                  item.poster_path
                    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                    : "https://via.placeholder.com/500x750?text=No+Image"}
                alt={item.title || item.name}
                className="w-full h-64 object-cover rounded mb-3"
              />
              {/* Movie or TV Show Title */}
              <h3 className="text-md font-semibold text-center">{item.title || item.name}</h3>
            </Link>
            {/* Remove from watchlist button */}
            <button
              onClick={() => removeFromWatchlist(item.id, item.type)}
              className="mt-3 w-full bg-red-600 hover:bg-red-700 text-white text-sm py-1 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watchlist;
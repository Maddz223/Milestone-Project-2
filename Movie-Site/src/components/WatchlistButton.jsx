const WatchlistButton = ({ inWatchlist, onToggle }) => {
  return (
    // Watchlist Button
    <button
      onClick={onToggle}
      className={`text-sm font-semibold text-white px-4 py-2 rounded transition-colors duration-300 
      ${inWatchlist ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"}`}>
      {inWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
    </button>
  );
};

export default WatchlistButton;
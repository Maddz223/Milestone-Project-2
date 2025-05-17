const CastList = ({ cast }) => {
  if (!cast || cast.length === 0) return null;

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-4 text-center text-gray-900 dark:text-gray-100">Cast Members</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {cast.slice(0, 8).map((actor) => {
          const imageSrc = actor.profile_path
            ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
            : "https://placehold.co/185x278?text=No+Image&font=roboto";

          return (
            <div
              key={actor.id}
              className="w-28 text-center bg-slate-700 dark:bg-gray-800 rounded-lg p-2 shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={imageSrc}
                alt={actor.name}
                className="w-full h-36 object-cover rounded"
                onError={(e) => (e.target.src = "https://placehold.co/185x278?text=No+Image&font=roboto")}
                loading="lazy"
              />
              <div className="mt-2">
                <p className="text-sm font-medium text-white truncate">{actor.name}</p>
                <p className="text-xs text-gray-400 truncate">{actor.character}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CastList;
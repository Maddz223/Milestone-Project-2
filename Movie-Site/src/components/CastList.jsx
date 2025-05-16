const CastList = ({ cast }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mt-6 mb-2">Cast:</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-center">
        {cast.slice(0, 12).map((actor) => (
          <div
            key={actor.id}
            className="bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden shadow p-2 flex flex-col items-center"
          >
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                  : "https://placehold.co/300x450?text=No+Image&font=roboto"
              }
              alt={actor.name}
              loading="lazy"
              className="w-full h-48 object-cover rounded-md mb-2"
            />
            <div className="text-sm font-medium text-gray-900 dark:text-white">{actor.name}</div>
            <div className="text-xs italic text-gray-600 dark:text-gray-400">as {actor.character}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CastList;
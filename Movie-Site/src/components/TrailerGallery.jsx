const TrailerGallery = ({ trailers, onSelect }) => {
  return (
    <div>
      <h3 className="text-xl text-center font-semibold mt-6 mb-2">Trailers:</h3>
      {trailers.length ? (
        <div className="flex flex-wrap justify-center gap-4">
          {/* Map through the trailers and display them */}
          {trailers.map((trailer) => (
            <div
              key={trailer.id}
              onClick={() => onSelect(trailer)}
              className="cursor-pointer bg-gray-200 dark:bg-gray-800 rounded-lg shadow p-2 w-64 hover:shadow-lg transition">
              {/* Trailer thumbnail */}
              <img
                src={`https://img.youtube.com/vi/${trailer.key}/hqdefault.jpg`}
                alt={trailer.name}
                loading="lazy"
                className="w-full h-44 object-cover rounded-md mb-2"
              />
              <div className="text-sm font-medium text-gray-900 dark:text-white">{trailer.name}</div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-400 text-center">No trailers available.</p>
      )}
    </div>
  );
};

export default TrailerGallery;
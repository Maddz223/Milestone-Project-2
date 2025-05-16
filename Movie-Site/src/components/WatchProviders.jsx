const WatchProviders = ({ providers }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mt-6 mb-2">Where to watch:</h3>
      {providers && Object.keys(providers).length > 0 ? (
        Object.entries(providers).map(([country, data]) => (
          <div key={country} className="flex justify-center flex-wrap gap-4 mt-2">
            {Array.isArray(data.flatrate) && data.flatrate.length > 0 ? (
              data.flatrate.map((provider) => (
                <div key={provider.provider_id} className="flex flex-col items-center w-20">
                  <img
                    src={`https://image.tmdb.org/t/p/w92${provider.logo_path}`}
                    alt={provider.provider_name}
                    loading="lazy"
                    className="w-10 h-10 object-contain"
                  />
                  <span className="text-xs text-center mt-1">{provider.provider_name}</span>
                </div>
              ))
            ) : (
              <span className="text-sm text-gray-500 w-full text-center">
                No streaming providers available.
              </span>
            )}
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-400">No streaming services available.</p>
      )}
      <p className="text-sm text-gray-500 mt-2 text-center">
        Watch provider data powered by{" "}
        <a
          href="https://www.justwatch.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          JustWatch
        </a>.
      </p>
    </div>
  );
};

export default WatchProviders;
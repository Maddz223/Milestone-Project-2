// Utils
import getCountryCode from "../utils/location";

const WatchProviders = ({ providers }) => {
  const userCountry = getCountryCode();
  const regionData = providers?.[userCountry];

  return (
    <div className="mt-6">
      <h3 className="text-xl text-center font-semibold mb-2 text-gray-900 dark:text-gray-100">
        Where to Watch ({userCountry}):
      </h3>

      {regionData?.flatrate?.length > 0 ? (
        <div className="flex justify-center flex-wrap gap-4 mt-2">
          {regionData.flatrate.map((provider) => (
            <div key={provider.provider_id} className="flex flex-col items-center w-20">
              <img
                src={`https://image.tmdb.org/t/p/w92${provider.logo_path}`}
                alt={provider.provider_name}
                onError={(e) => {
                  e.target.src = "https://placehold.co/40x40?text=N/A";
                }}
                className="w-10 h-10 object-contain"
                loading="lazy"
              />
              <span className="text-xs text-center mt-1 text-gray-800 dark:text-gray-200">
                {provider.provider_name}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-400 mt-2">
          No streaming providers available in your region.
        </p>
      )}

      <p className="text-sm text-gray-500 mt-4 text-center">
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
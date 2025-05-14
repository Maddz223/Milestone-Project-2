import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getCountryCode } from "../utils/location";
import TrailerModal from "../components/TrailerModal"; // Import the modal component

const TVDetails = () => {
    const { tvId } = useParams();
    const [tvDetails, setTvDetails] = useState(null);
    const [cast, setCast] = useState([]);
    const [trailers, setTrailers] = useState([]);
    const [watchProviders, setWatchProviders] = useState([]);
    const [selectedTrailer, setSelectedTrailer] = useState(null); // Modal state

    useEffect(() => {
        const fetchTvDetails = async () => {
            try {
                const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
                const country = getCountryCode();

                const tvResponse = await axios.get(
                    `https://api.themoviedb.org/3/tv/${tvId}?api_key=${API_KEY}&language=en-US`
                );
                setTvDetails(tvResponse.data);

                const castResponse = await axios.get(
                    `https://api.themoviedb.org/3/tv/${tvId}/credits?api_key=${API_KEY}`
                );
                setCast(castResponse.data.cast);

                const trailersResponse = await axios.get(
                    `https://api.themoviedb.org/3/tv/${tvId}/videos?api_key=${API_KEY}&language=en-US`
                );
                const limitedTrailers = trailersResponse.data.results
                    .filter(video => video.type === "Trailer" && video.site === "YouTube")
                    .slice(0, 3);
                setTrailers(limitedTrailers);

                const watchProvidersResponse = await axios.get(
                    `https://api.themoviedb.org/3/tv/${tvId}/watch/providers?api_key=${API_KEY}`
                );
                const providersData = watchProvidersResponse.data.results;
                setWatchProviders(providersData[country] ? { [country]: providersData[country] } : {});
            } catch (error) {
                console.error("Failed to fetch TV details:", error);
                setTvDetails(null);
                setCast([]);
                setTrailers([]);
                setWatchProviders({});
            }
        };

        fetchTvDetails();
    }, [tvId]);

    if (!tvDetails) {
        return (
            <div className="container mx-auto p-4">
                <p>Loading TV details...</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col lg:flex-row">
                <img
                    src={tvDetails.poster_path ? `https://image.tmdb.org/t/p/w500${tvDetails.poster_path}`
                        : "https://via.placeholder.com/300x450?text=No+Image"}
                    alt={tvDetails.name}
                    className="w-64 h-100 mr-8 mb-6 lg:mb-0"
                />
                <div className="text-left">
                    <h2 className="text-4xl font-bold">{tvDetails.name}</h2>
                    <p><strong>First Air Date:</strong> {tvDetails.first_air_date}</p>
                    <p><strong>Rating:</strong> {tvDetails.vote_average} / 10</p>
                    <p><strong>Overview:</strong> {tvDetails.overview}</p>

                    <h3 className="text-xl mt-4">Cast:</h3>
                    <ul>
                        {cast.slice(0, 7).map((actor) => (
                            <li key={actor.id}>{actor.name} as {actor.character}</li>
                        ))}
                    </ul>

                    <h3 className="text-xl mt-6 mb-2 font-semibold">Trailers:</h3>
                    {trailers.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {trailers.map((trailer) => (
                                <div
                                    key={trailer.id}
                                    className="cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-100 dark:bg-gray-800"
                                    onClick={() => setSelectedTrailer(trailer)}
                                >
                                    <img
                                        src={`https://img.youtube.com/vi/${trailer.key}/hqdefault.jpg`}
                                        alt={trailer.name}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-2 text-center text-sm font-medium text-gray-700 dark:text-gray-200">
                                        {trailer.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-600 dark:text-gray-400">No trailers available.</p>
                    )}

                    {/* Trailer Modal */}
                    {selectedTrailer && (
                        <TrailerModal
                            trailer={selectedTrailer}
                            onClose={() => setSelectedTrailer(null)}
                        />
                    )}

                    <h3 className="text-xl mt-6">Where to Watch:</h3>
                    {watchProviders && Object.keys(watchProviders).length > 0 ? (
                        Object.entries(watchProviders).map(([country, data]) => (
                            <div key={country}>
                                <div className="flex gap-4 flex-wrap mt-2">
                                    {data.flatrate && data.flatrate.map((provider) => (
                                        <div key={provider.provider_id} className="flex flex-col items-center w-20">
                                            <img
                                                src={`https://image.tmdb.org/t/p/w92${provider.logo_path}`}
                                                alt={provider.provider_name}
                                                className="w-10 h-10 object-contain"
                                            />
                                            <span className="text-xs text-center mt-1">{provider.provider_name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No streaming services available.</p>
                    )}
                    <p className="text-sm text-gray-500 mt-2">
                        Watch provider data powered by{" "}
                        <a href="https://www.justwatch.com" target="_blank" rel="noopener noreferrer" className="underline">JustWatch</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TVDetails;
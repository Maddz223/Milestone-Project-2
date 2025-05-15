import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getCountryCode } from "../utils/location";
import TrailerModal from "../components/TrailerModal";

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const [cast, setCast] = useState([]);
    const [trailers, setTrailers] = useState([]);
    const [watchProviders, setWatchProviders] = useState({});
    const [selectedTrailer, setSelectedTrailer] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
                const country = getCountryCode();

                const movieResponse = await axios.get(
                    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
                );
                setMovieDetails(movieResponse.data);

                const castResponse = await axios.get(
                    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
                );
                setCast(castResponse.data.cast);

                const trailersResponse = await axios.get(
                    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
                );
                const limitedTrailers = trailersResponse.data.results
                    .filter(video => video.type === "Trailer" && video.site === "YouTube")
                    .slice(0, 3);
                setTrailers(limitedTrailers);

                const watchProvidersResponse = await axios.get(
                    `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${API_KEY}`
                );
                const providersData = watchProvidersResponse.data.results;
                setWatchProviders(providersData[country] ? { [country]: providersData[country] } : {});
            } catch (error) {
                console.error("Failed to fetch movie details:", error);
                setMovieDetails(null);
                setCast([]);
                setTrailers([]);
                setWatchProviders({});
            }
        };

        fetchMovieDetails();
    }, [movieId]);

    if (!movieDetails) {
        return (
            <div className="container mx-auto p-4">
                <p>Loading Movie details...</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 rounded-lg bg-gray-1001">
                <img
                    src={movieDetails.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                        : "https://via.placeholder.com/500x750?text=No+Image"}
                    alt={movieDetails.title}
                    className="w-64 sm:w-72 lg:w-80 object-cover rounded-lg mb-2 bg-gray-100 dark:bg-gray-800 shadow hover:shadow-lg transition-shadow duration-300 p-2"
                />

                <div className="flex-1 text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">{movieDetails.title}</h2>
                    <p><strong>Release Date:</strong> {movieDetails.release_date}</p>
                    <p><strong>Rating:</strong> {movieDetails.vote_average} / 10</p>
                    <p><strong>Overview:</strong> {movieDetails.overview}</p>

                    <div>
                        <h3 className="text-xl font-semibold mt-6 mb-2 text-center ">Cast:</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {cast.slice(0, 12).map((actor) => (
                                <div
                                    key={actor.id}
                                    className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 text-center p-2"
                                >
                                    <img
                                        src={
                                            actor.profile_path
                                                ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                                                : "https://via.placeholder.com/185x278?text=No+Image"
                                        }
                                        alt={actor.name}
                                        className="w-full h-44 object-cover rounded-md mb-2"
                                    />
                                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                                        {actor.name}
                                    </div>
                                    <div className="text-xs text-gray-600 dark:text-gray-400 italic">
                                        as {actor.character}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl mt-6 mb-2 text-center font-semibold">Trailers:</h3>
                        {trailers.length > 0 ? (
                            <div className="flex flex-wrap justify-center gap-4">
                                {trailers.map((trailer) => (
                                    <div
                                        key={trailer.id}
                                        onClick={() => setSelectedTrailer(trailer)}
                                        className="cursor-pointer bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 text-center p-2 w-64"
                                    >
                                        <img
                                            src={`https://img.youtube.com/vi/${trailer.key}/hqdefault.jpg`}
                                            alt={trailer.name}
                                            className="w-full h-44 object-cover rounded-md mb-2"
                                        />
                                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                                            {trailer.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-600 text-center dark:text-gray-400">No trailers available.</p>
                        )}
                        {selectedTrailer && (
                            <TrailerModal
                                trailer={selectedTrailer}
                                onClose={() => setSelectedTrailer(null)}
                            />
                        )}
                    </div>

                    <div>
                        <h3 className="text-xl mt-6 text-center font-semibold">Where to Watch:</h3>
                        {watchProviders && Object.keys(watchProviders).length > 0 ? (
                            Object.entries(watchProviders).map(([country, data]) => (
                                <div key={country} className="mt-2 flex justify-center">
                                    <div className="flex gap-4 flex-wrap justify-center">
                                        {Array.isArray(data.flatrate) && data.flatrate.length > 0 ? (
                                            data.flatrate.map((provider) => (
                                                <div key={provider.provider_id} className="flex flex-col items-center w-20">
                                                    <img
                                                        src={`https://image.tmdb.org/t/p/w92${provider.logo_path}`}
                                                        alt={provider.provider_name}
                                                        className="w-10 h-10 object-contain"
                                                    />
                                                    <span className="text-xs text-center mt-1">{provider.provider_name}</span>
                                                </div>
                                            ))
                                        ) : (
                                            <span className="text-sm text-gray-500 text-center w-full">
                                                No streaming providers available.
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-600 dark:text-gray-400 mt-2">
                                No streaming services available.
                            </p>
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
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
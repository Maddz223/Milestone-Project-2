import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getCountryCode from "../utils/location";// Location component
import axios from "axios";// API Handler
import TrailerModal from "../components/TrailerModal";// Import the modal component
import { addToWatchlist, removeFromWatchlist, isInWatchlist } from "../utils/watchlist";// Import the watchlist utility

const MovieDetails = () => {
    const { movieId } = useParams();

    const [movieDetails, setMovieDetails] = useState(null);
    const [cast, setCast] = useState([]);
    const [trailers, setTrailers] = useState([]);
    const [watchProviders, setWatchProviders] = useState({});
    const [selectedTrailer, setSelectedTrailer] = useState(null);
    const [inWatchlist, setInWatchlist] = useState(false);

    useEffect(() => {{/* API Calling */}
        const fetchMovieDetails = async () => {
            try {
                const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
                const country = getCountryCode();
                    {/* API call for movies */}
                const movieResponse = await axios.get(
                    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
                );
                setMovieDetails(movieResponse.data);
                    {/* API call for movies cast */}
                const castResponse = await axios.get(
                    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
                );
                setCast(castResponse.data.cast);
                    {/* API call for movie trailers */}
                const trailersResponse = await axios.get(
                    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
                );
                const filteredTrailers = trailersResponse.data.results
                    .filter(video => video.type === "Trailer" && video.site === "YouTube")
                    .slice(0, 3);
                setTrailers(filteredTrailers);
                    {/* API call for tvseries watch providers */}
                const watchProvidersResponse = await axios.get(
                    `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${API_KEY}`
                );
                const providersData = watchProvidersResponse.data.results;
                setWatchProviders(providersData[country] ? { [country]: providersData[country] } : {});
            {/* error catching */}  
            } catch (error) {
                console.error("Failed to fetch movie details:", error);
                setMovieDetails(null);
                setCast([]);
                setTrailers([]);
                setWatchProviders({});
            }
        };
    {/* read results and import into Movie details page */}
        fetchMovieDetails();
    }, [movieId]);

    // Update watchlist state when movie details load
    useEffect(() => {
        if (movieDetails) {
            setInWatchlist(isInWatchlist(movieDetails.id, "movie"));
        }
    }, [movieDetails]);

    // Watchlist toggle handler
    const toggleWatchlist = () => {
        if (!movieDetails) return;

        if (inWatchlist) {
            removeFromWatchlist(movieDetails.id, "movie");
        } else {
            addToWatchlist({ ...movieDetails, type: "movie" });
        }
        setInWatchlist(!inWatchlist);
    };

    if (!movieDetails) {
        return (
            <div className="container mx-auto p-4">
                <p>Loading Movie details...</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 rounded-lg bg-gray-100 dark:bg-gray-900 p-6">
                {/* Left side: Poster + Watchlist button */}
                <div className="flex flex-col items-center">
                    <img
                        src={
                            movieDetails.poster_path
                                ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                                : "https://via.placeholder.com/500x750?text=No+Image"
                        }
                        alt={movieDetails.title}
                        loading="lazy"
                        className="w-64 sm:w-72 lg:w-80 object-cover rounded-lg mb-4 shadow-lg"
                    />

                    <button
                        onClick={toggleWatchlist}
                        className={`text-sm font-semibold px-4 py-2 rounded transition-colors duration-300 ${inWatchlist ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"
                            }`}
                    >
                        {inWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
                    </button>
                </div>

                {/* Details Section */}
                <div className="flex-1 text-center lg:text-left space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">{movieDetails.title}</h2>
                {/* Release date, Rating and overview */}
                    <p><strong>Release Date:</strong> {movieDetails.release_date}</p>
                    <p><strong>Rating:</strong> {movieDetails.vote_average} / 10</p>
                    <p><strong>Overview:</strong> {movieDetails.overview}</p>

                    {/* Cast */}
                    <div>
                        <h3 className="text-xl font-semibold mt-6 mb-2">Cast:</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-center">
                            {cast.slice(0, 12).map(actor => (
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

                    {/* Trailers */}
                    <div>
                        <h3 className="text-xl font-semibold mt-6 mb-2">Trailers:</h3>
                        {trailers.length ? (
                            <div className="flex flex-wrap justify-center gap-4">
                                {trailers.map(trailer => (
                                    <div
                                        key={trailer.id}
                                        onClick={() => setSelectedTrailer(trailer)}
                                        className="cursor-pointer bg-gray-200 dark:bg-gray-800 rounded-lg shadow p-2 w-64 hover:shadow-lg transition"
                                    >
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

                        {/* Trailer Modal */}
                        {selectedTrailer && (
                            <TrailerModal trailer={selectedTrailer} onClose={() => setSelectedTrailer(null)} />
                        )}
                    </div>

                    {/* Watch Providers */}
                    <div>
                        <h3 className="text-xl font-semibold mt-6 mb-2">Where to watch:</h3>
                        {watchProviders && Object.keys(watchProviders).length > 0 ? (
                            Object.entries(watchProviders).map(([country, data]) => (
                                <div key={country} className="flex justify-center flex-wrap gap-4 mt-2">
                                    {Array.isArray(data.flatrate) && data.flatrate.length > 0 ? (
                                        data.flatrate.map(provider => (
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
                        {/* justwatch */}
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
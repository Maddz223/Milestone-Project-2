import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getCountryCode } from "../utils/location"; // Checks users browser location to display where to watch in that country.

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const [cast, setCast] = useState([]);
    const [trailers, setTrailers] = useState([]);
    const [watchProviders, setWatchProviders] = useState({});

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
                const country = getCountryCode(); // Gets country code from browser.

                // Fetch movie details
                const movieResponse = await axios.get(
                    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
                );
                setMovieDetails(movieResponse.data);

                // Fetch cast
                const castResponse = await axios.get(
                    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
                );
                setCast(castResponse.data.cast);

                // Fetch trailers
                const trailersResponse = await axios.get(
                    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
                );
                const limitedTrailers = trailersResponse.data.results
                    .filter(video => video.type === "Trailer" && video.site === "YouTube")
                    .slice(0, 3); // limit to 3 trailers
                setTrailers(limitedTrailers);

                // Fetch where to watch
                const watchProvidersResponse = await axios.get(
                    `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${API_KEY}`
                );
                const providersData = watchProvidersResponse.data.results;
                setWatchProviders(providersData[country] ? { [country]: providersData[country] } : {}); // Sets country code from browser.
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
        <div className="container mx-auto p-4">
            <div className="flex">
                <img
                    src={movieDetails.poster_path ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                        : "https://via.placeholder.com/500x750?text=No+Image"}
                    alt={movieDetails.title}
                    className="w-64 h-100 mr-8"
                />
                <div className="text-left">
                    <h2 className="text-4xl font-bold">{movieDetails.title}</h2>
                    <p><strong>Release Date:</strong> {movieDetails.release_date}</p>
                    <p><strong>Rating:</strong> {movieDetails.vote_average} / 10</p>
                    <p><strong>Overview:</strong> {movieDetails.overview}</p>

                    <h3 className="text-xl mt-4">Cast:</h3>
                    <ul>
                        {cast.slice(0, 7).map((actor) => (// Sets the amount of actors to list
                            <li key={actor.id}>{actor.name} as {actor.character}</li>
                        ))}
                    </ul>

                    <h3 className="text-xl mt-6 mb-2 font-semibold">Trailers:</h3>
                    {trailers.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {trailers.map((trailer) => (
                                <div
                                    key={trailer.id}
                                    className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-100 dark:bg-gray-800"
                                >
                                    <iframe
                                        className="w-full h-64"
                                        src={`https://www.youtube.com/embed/${trailer.key}`}
                                        title={trailer.name}
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                    <div className="p-2 text-center text-sm font-medium text-gray-700 dark:text-gray-200">
                                        {trailer.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-600 dark:text-gray-400">No trailers available.</p>
                    )}

                    <h3 className="text-xl mt-4">Where to Watch:</h3>
                    {watchProviders && Object.keys(watchProviders).length > 0 ? (
                        Object.entries(watchProviders).map(([country, data]) => (
                            <div key={country}>
                                <div className="flex gap-4 flex-wrap">
                                    {data.flatrate &&
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
                                    }
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No streaming services available.</p>
                    )}
                    <p className="text-sm text-gray-500 mt-2">
                        Watch provider data powered by <a href="https://www.justwatch.com" target="_blank" rel="noopener noreferrer" className="underline">JustWatch</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
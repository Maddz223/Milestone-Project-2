import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getCountryCode } from "../utils/location"; // Checks users browser location to display where to watch in that country.

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const [cast, setCast] = useState([]);
    const [trailers, setTrailers] = useState([]);
    const [watchProviders, setWatchProviders] = useState([]);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

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
            setWatchProviders(watchProvidersResponse.data.results);
        };

        fetchMovieDetails();
    }, [movieId]);

    if (!movieDetails) return <div>Loading...</div>;

    return (
        <div className="container mx-auto p-4">
            <div className="flex">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
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
                        {cast.slice(0, 5).map((actor) => (
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
                                        frameBorder="0"
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
                    {watchProviders.length > 0 ? (
                        Object.entries(watchProviders).map(([country, data]) => (
                            <div key={country}>
                                <h4>{country}</h4>
                                <ul>
                                    {data.flatrate &&
                                        data.flatrate.map((provider) => (
                                            <li key={provider.provider_id}>
                                                {provider.provider_name}
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        ))
                    ) : (
                        <p>No streaming services available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
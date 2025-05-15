import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Function to navigate to movie details page.
const TrendingMovies = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // API fetch.
        const fetchTrendingMovies = async () => {
            const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
            const response = await axios.get(
                `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
            );
            setTrendingMovies(response.data.results);
        };
        fetchTrendingMovies();
    }, []);

    // Function to navigate to movie details page after clicking the poster.
    const handleMovieClick = (movieId) => {
        navigate(`/movie/${movieId}`);
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-4xl font-bold mb-6 text-center">Trending Movies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4">
                {trendingMovies.map((movie) => (
                    <div
                        //Makes the poster clickable.
                        key={movie.id}
                        className="cursor-pointer transform hover:scale-105 transition-all duration-300"
                        onClick={() => handleMovieClick(movie.id)}
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                        <h3 className="text-center text-sm mt-2 font-medium">{movie.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendingMovies;
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TrendingMovies = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
            const response = await axios.get(
                `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
            );
            setTrendingMovies(response.data.results);
        };
        fetchTrendingMovies();
    }, []);

    // Function to navigate to movie details page
    const handleMovieClick = (movieId) => {
        navigate(`/movie/${movieId}`);
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-4xl font-bold mb-4">Trending Movies</h2>
            <div className="grid grid-cols-4 gap-4">
                {trendingMovies.map((movie) => (
                    <div
                        key={movie.id}
                        className="cursor-pointer"
                        onClick={() => handleMovieClick(movie.id)}
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <h3 className="text-center">{movie.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendingMovies;
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Trending Movies Component
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
                        className="cursor-pointer transform hover:scale-105 transition-all"
                        onClick={() => handleMovieClick(movie.id)}
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className="w-full h-auto"
                        />
                        <h3 className="text-center mt-2">{movie.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Trending TV Series Component
const TrendingTV = () => {
    const [trendingTV, setTrendingTV] = useState([]);
    const navigate = useNavigate(); // Add navigate here

    useEffect(() => {
        const fetchTrendingTV = async () => {
            const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
            const response = await axios.get(
                `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`
            );
            setTrendingTV(response.data.results);
        };
        fetchTrendingTV();
    }, []);

    const handleTVClick = (tvId) => {
        navigate(`/tv/${tvId}`); // Navigate to TV detail page
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-4xl font-bold mb-4">Trending TV Series</h2>
            <div className="grid grid-cols-4 gap-4">
                {trendingTV.map((tv) => (
                    <div
                        key={tv.id}
                        className="cursor-pointer transform hover:scale-105 transition-all"
                        onClick={() => handleTVClick(tv.id)}
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
                            alt={tv.name}
                            className="w-full h-auto"
                        />
                        <h3 className="text-center mt-2">{tv.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Home Component
const Home = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold text-center my-8">
                Welcome to the Movie and TV Series App
            </h1>
            <TrendingMovies />
            <TrendingTV />
        </div>
    );
};

export default Home;
import { useEffect, useState } from "react";
import axios from "axios";

// TrendingMovies Component
const TrendingMovies = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);

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

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-4xl font-bold mb-4">Trending Movies</h2>
            <div className="grid grid-cols-4 gap-4">
                {trendingMovies.map((movie) => (
                    <div key={movie.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <h3>{movie.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

// TrendingTV Component
const TrendingTV = () => {
    const [trendingTV, setTrendingTV] = useState([]);

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

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-4xl font-bold mb-4">Trending TV Series</h2>
            <div className="grid grid-cols-4 gap-4">
                {trendingTV.map((tv) => (
                    <div key={tv.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
                            alt={tv.name}
                        />
                        <h3>{tv.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Home Component that includes TrendingMovies and TrendingTV
const Home = () => {
    return (
        <div>
            <h1>Welcome to the Movie & TV App</h1>
            <TrendingMovies />
            <TrendingTV />
        </div>
    );
};

export default Home;
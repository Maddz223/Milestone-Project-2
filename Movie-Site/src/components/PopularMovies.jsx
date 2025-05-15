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
                `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
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
        key={movie.id}
        className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg text-center p-2 cursor-pointer transform hover:scale-105 transition-all duration-300"
        onClick={() => handleMovieClick(movie.id)}
      >
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://placehold.co/300x450?text=No+Image&font=roboto"
          }
          alt={movie.title}
          className="w-full h-64 text-2xl object-cover rounded-md mb-2"
        />
        <div className="text-sm font-medium text-gray-900 dark:text-white">
          {movie.title}
        </div>
        {movie.release_date && (
          <div className="text-xs text-gray-600 dark:text-gray-400">
            {new Date(movie.release_date).getFullYear()}
          </div>
        )}
      </div>
    ))}
  </div>
</div>
    );
};

export default TrendingMovies;
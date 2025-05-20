import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Components
import Card from '../components/Card';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    // Fetch movies from TMDB API
    const fetchMovies = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`);
      setMovies(response.data.results);};
    fetchMovies();
  }, []);

  return (
    <div className="container mx-auto pt-15">
      <h1 className="text-4xl text-center font-bold mb-4">Discover Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4 pb-5">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} type="movie" />
        ))}
      </div>
    </div>
  );
};

export default Movies;

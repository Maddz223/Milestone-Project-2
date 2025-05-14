import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY');
      setMovies(response.data.results);
    };
    fetchMovies();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Popular Movies</h1>
      <div className="grid grid-cols-4 gap-4">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} type="movie" />
        ))}
      </div>
    </div>
  );
};

export default Movies;

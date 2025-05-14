import React from 'react';

const Card = ({ movie, type }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title || movie.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold">{movie.title || movie.name}</h3>
        <p>{movie.release_date || movie.first_air_date}</p>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default Card;

import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const storedWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    setWatchlist(storedWatchlist);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Your Watchlist</h1>
      <div className="grid grid-cols-4 gap-4">
        {watchlist.map((movie) => (
          <Card key={movie.id} movie={movie} type={movie.media_type || 'movie'} />
        ))}
      </div>
    </div>
  );
};

export default Watchlist;

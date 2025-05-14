import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';

const TVSeries = () => {
const [tvSeries, setTvSeries] = useState([]);
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchTVSeries = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`);
      setTvSeries(response.data.results);
    };
    fetchTVSeries();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Popular TV Series</h1>
      <div className="grid grid-cols-4 gap-4">
        {tvSeries.map((tv) => (
          <Card key={tv.id} movie={tv} type="tv" />
        ))}
      </div>
    </div>
  );
};

export default TVSeries;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Card = ({ movie, type }) => {
  const [watchProviders, setWatchProviders] = useState([]);
  const [region, setRegion] = useState('US'); // Default region
  
  useEffect(() => {
    const fetchWatchProviders = async () => {
          const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
      const endpoint = type === 'movie' 
        ? `https://api.themoviedb.org/3/movie/${movie.id}/watch/providers?api_key=${API_KEY}`
        : `https://api.themoviedb.org/3/tv/${movie.id}/watch/providers?api_key=${API_KEY}`;
      
      try {
        const response = await axios.get(endpoint);
        const providers = response.data.results?.[region]?.flatrate || [];
        setWatchProviders(providers);
      } catch (error) {
        console.error("Error fetching watch providers:", error);
      }
    };
    fetchWatchProviders();
  }, [movie.id, region, type]);

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

        {/* Watch Providers */}
        <div className="mt-2">
          {watchProviders.length > 0 && (
            <div>
              <h4 className="font-semibold">Where to Watch:</h4>
              <div className="flex space-x-4">
                {watchProviders.map((provider) => (
                  <div key={provider.provider_id}>
                    <img
                      src={`https://www.themoviedb.org/t/p/w92${provider.logo_path}`}
                      alt={provider.provider_name}
                      className="w-12 h-12"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

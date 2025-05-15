import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Function to navigate to Tv details page.
const PopularTV = () => {
  const [PopularTV, setPopularTV] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // API fetch.
    const fetchPopularTV = async () => {
      const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`
      );
      setPopularTV(response.data.results);
    };
    fetchPopularTV();
  }, []);

  // Function to navigate to tv details page after clicking the poster.
  const handleTVClick = (tvId) => {
    navigate(`/tv/${tvId}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-bold mb-6 text-center">Trending TV Series</h2>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4">
        {PopularTV.map((tv) => (
          <div
            key={tv.id}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg text-center p-2 cursor-pointer transform hover:scale-105 transition-transform duration-300"
            onClick={() => handleTVClick(tv.id)}
          >
            <img
              src={
                tv.poster_path
                  ? `https://image.tmdb.org/t/p/w500${tv.poster_path}`
                  : "https://placehold.co/300x450?text=No+Image&font=roboto"
              }
              alt={tv.name}
              className="w-full h-64 text-2xl object-cover rounded-md mb-2"
            />
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              {tv.name}
            </div>
            {tv.first_air_date && (
              <div className="text-xs text-gray-600 dark:text-gray-400">
                {new Date(tv.first_air_date).getFullYear()}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default PopularTV;
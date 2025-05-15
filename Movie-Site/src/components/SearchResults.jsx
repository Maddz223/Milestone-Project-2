import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Card from "./Card";

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");
  const [results, setResults] = useState([]);
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!query) return;
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${query}`
      );
      setResults(response.data.results);
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Search Results for "{query}"</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {results
          .filter((item) => item.media_type === "movie" || item.media_type === "tv")
          .map((item) => (
            <Card
              key={item.id}
              movie={item}
              type={item.media_type === "movie" ? "movie" : "tv"}
            />
          ))}
      </div>
    </div>
  );
};

export default SearchResults;
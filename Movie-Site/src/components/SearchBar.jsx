import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { debounce } from 'lodash';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  // Use useRef to persist the debounced function
  const handleSearchRef = useRef();

  useEffect(() => {
    handleSearchRef.current = debounce(async (searchTerm) => {
      if (!searchTerm.trim()) {
        setSuggestions([]);
        return;
      }
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${searchTerm}`
        );
        setSuggestions(response.data.results.slice(0, 5)); // Sets the suggested limits to 5
      } catch (err) {
        console.error('Suggestion fetch error:', err);
      }
    }, 300);
    return () => {
      handleSearchRef.current && handleSearchRef.current.cancel();
    };
  }, [API_KEY]);

  // Effect to handle search input changes
  useEffect(() => {
    if (handleSearchRef.current) {
      handleSearchRef.current(query);
    }
    return () => {
      if (handleSearchRef.current) handleSearchRef.current.cancel();
    };
  }, [query]);

  // Effect to close suggestions when clicking outside
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setShowSuggestions(false);
    }
  };
  const handleSuggestionClick = (suggestion) => {
    navigate(`/${suggestion.media_type}/${suggestion.id}`);
    setQuery('');
    setSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    // Search bar component
    <div className="relative w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex items-center">
        <label htmlFor="search-input" className="sr-only">Search</label>
        <input
          id="search-input"
          type="text"
          placeholder="Search..."
          className="w-full px-6 py-2 rounded-l-md border border-gray-500 dark:border-gray-700 bg-gray-300 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);}}/>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition">
          Search
        </button>
      </form>
      
      {/* Suggestions dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-gray-300 dark:bg-gray-800 border border-gray-500 dark:border-gray-700 rounded-md mt-1 shadow-lg">
          {suggestions.map((item) => (
            <li
              key={item.id}
              onClick={() => handleSuggestionClick(item)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-black dark:text-white text-sm"
            >
              {item.title || item.name} <span className="text-xs text-gray-500 dark:text-gray-400">({item.media_type})</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
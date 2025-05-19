import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { debounce } from 'lodash';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const handleSearch = debounce(async (searchTerm) => {
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
  }, 300); // Waits 300ms before firing API call

  // Effect to handle search input changes
  useEffect(() => {
    handleSearch(query);
    return () => handleSearch.cancel();
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
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-6 py-2 rounded-l-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-black dark:text-white focus:outline-none"
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
        <ul className="absolute z-10 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md mt-1 shadow-lg">
          {suggestions.map((item) => (
            <li
              key={item.id}
              onClick={() => handleSuggestionClick(item)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-white text-sm"
            >
              {item.title || item.name} <span className="text-xs text-gray-500">({item.media_type})</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
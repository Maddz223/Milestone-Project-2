import { Link } from 'react-router-dom';

const Card = ({ movie, type }) => {
  const imagePath = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : "https://placehold.co/300x450?text=No+Image&font=roboto";

  return (
    <Link to={`/${type}/${movie.id}`}>
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 text-center p-2 h-[350px]">
        <img
          src={imagePath}
          alt={movie.title || movie.name}
          className="w-full h-64 object-cover rounded-md mb-2"
        />
        <div className="text-sm font-medium text-gray-900 dark:text-white">
          {movie.title || movie.name}
        </div>
        {movie.release_date && (
          <div className="text-xs text-gray-600 dark:text-gray-400">
            {new Date(movie.release_date).getFullYear()}
          </div>
        )}
        {movie.vote_average !== undefined && (
          <div className="text-xs text-center text-yellow-600 dark:text-yellow-400 mt-1">
            ⭐ {movie.vote_average.toFixed(1)} / 10
          </div>
        )}
      </div>
    </Link>
  );
};

export default Card;
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

// Components
import SkeletonLoader from "../components/SkeletonLoader";

// This component fetches and displays popular movies from TMDB API
const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const navigate = useNavigate();

  // Fetch popular movies from TMDB API
  useEffect(() => {
    const fetchPopularMovies = async () => {
      const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
      setPopularMovies(response.data.results);
    };
    fetchPopularMovies();
  }, []);
  // Handle movie click to navigate to details page of movie.
  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-4xl font-bold mb-8 text-center">Trending Movies</h2>

      {/* Skeleton loader for loading state */}
      {popularMovies.length === 0 ? (
        <div className="flex justify-center gap-4 flex-wrap">
          {[...Array(6)].map((_, index) => (
            <SkeletonLoader key={index} />
          ))}
        </div>
      ) : (
        // Swiper carousel for displaying popular movies
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={5}
          loop={popularMovies.length > 3}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 80,
            modifier: 1.2,
            slideShadows: true,
          }}
          // Responsive breakpoints for different screen sizes
          breakpoints={{
            0: { slidesPerView: 1.2, spaceBetween: 10 },
            480: { slidesPerView: 1.5 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="w-full max-w-6xl mx-auto">
          {popularMovies.map((movie, index) => (
            <SwiperSlide
              key={movie.id}
              className="bg-slate-500 dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg text-center p-2 cursor-pointer transform hover:scale-105 transition-all duration-300"
              onClick={() => handleMovieClick(movie.id)}>
              {/* Movie poster image */}
              <img
                loading={index === 0 ? "eager" : "lazy"}
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
                    : "https://placehold.co/300x450?text=No+Image&font=roboto"
                }
                alt={movie.title}
                className="w-full h-64 object-cover rounded-md mb-2" />
              {/* Movie title*/}
              <div className="text-sm font-medium text-black dark:text-white">
                {movie.title}
              </div>
              {/* Movie release date */}
              {movie.release_date && (
                <div className="text-xs text-black dark:text-gray-400">
                  {new Date(movie.release_date).getFullYear()}
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default PopularMovies;
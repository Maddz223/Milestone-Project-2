import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const PopularMovies = () => {
  const [PopularMovies, setPopularMovies] = useState([]);
  const navigate = useNavigate();

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

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <div className="container mx-auto px-2 py-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Trending Movies</h2>

      {PopularMovies.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300">Loading...</p>
      ) : (
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={PopularMovies.length > 4}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1.5,
            slideShadows: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 1.5,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="w-full max-w-7xl mx-auto"
        >
          {PopularMovies.map((movie) => (
            <SwiperSlide
              key={movie.id}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl text-center p-2 cursor-pointer transition-transform transform hover:scale-105 duration-300"
              onClick={() => handleMovieClick(movie.id)}
            >
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "https://placehold.co/300x450?text=No+Image&font=roboto"
                }
                alt={movie.title}
                loading="lazy"
                className="w-full h-72 sm:h-80 md:h-96 object-cover rounded-md mb-2"
              />
              <div className="text-sm font-medium text-gray-900 dark:text-white line-clamp-1">
                {movie.title}
              </div>
              {movie.release_date && (
                <div className="text-xs text-gray-600 dark:text-gray-400">
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
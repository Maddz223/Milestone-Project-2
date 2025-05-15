import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const PopularTV = () => {
  const [PopularTV, setPopularTV] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPopularTV = async () => {
      const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`
      );
      setPopularTV(response.data.results);
    };
    fetchPopularTV();
  }, []);

  const handleTVClick = (tvId) => {
    navigate(`/tv/${tvId}`);
  };

  return (
    <div className="container mx-auto px-2 py-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Popular TV Series</h2>

      {PopularTV.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300">Loading...</p>
      ) : (
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={PopularTV.length > 4}
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
          {PopularTV.map((tv) => (
            <SwiperSlide
              key={tv.id}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl text-center p-2 cursor-pointer transition-transform transform hover:scale-105 duration-300"
              onClick={() => handleTVClick(tv.id)}
            >
              <img
                src={
                  tv.poster_path
                    ? `https://image.tmdb.org/t/p/w500${tv.poster_path}`
                    : "https://placehold.co/300x450?text=No+Image&font=roboto"
                }
                alt={tv.name}
                loading="lazy"
                className="w-full h-72 sm:h-80 md:h-96 object-cover rounded-md mb-2"
              />
              <div className="text-sm font-medium text-gray-900 dark:text-white line-clamp-1">
                {tv.name}
              </div>
              {tv.first_air_date && (
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {new Date(tv.first_air_date).getFullYear()}
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default PopularTV;
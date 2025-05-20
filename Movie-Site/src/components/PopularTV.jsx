import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

// Styles
import "../FixSwipers.css";
import "swiper/css";
import "swiper/css/effect-coverflow";

// Components
import SkeletonLoader from "../components/SkeletonLoader";

// Fetch popular TV shows
const fetchPopularTv = async (API_KEY) => {
  const response = await axios.get("https://api.themoviedb.org/3/tv/popular", {
    params: { api_key: API_KEY },
  });
  return response.data.results;
};

const PopularTv = () => {
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadTvShows = async () => {
      try {
        setLoading(true);
        setError(null);

        const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
        const popularTv = await fetchPopularTv(API_KEY);
        setTvShows(popularTv);
      } catch {
        setError("Failed to fetch popular TV shows.");
      } finally {
        setLoading(false);
      }
    };

    loadTvShows();
  }, []);

  const handleTvClick = (id) => {
    navigate(`/tv/${id}`);
  };

  return (
    <div className="popular-tv container mx-auto px-4 pt-5 py-6 relative overflow-x-hidden overflow-y-visible">
      <h2 className="text-4xl font-bold mb-8 text-center">Trending TV Shows</h2>

      {loading ? (
        <div className="flex justify-center pt-5 gap-4 flex-wrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonLoader key={i} />
          ))}
        </div>
      ) : error ? (
        <p className="text-center text-red-600">{error}</p>
      ) : tvShows.length === 0 ? (
        <p className="text-center">No popular TV shows found.</p>
      ) : (
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          loop={tvShows.length > 3}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 80,
            modifier: 1.2,
            slideShadows: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            480: { slidesPerView: 1.5 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="w-full max-w-6xl mx-auto"
        >
          {tvShows.map((show, i) => (
            <SwiperSlide key={show.id} className="overflow-visible relative z-10">
              <div
                onClick={() => handleTvClick(show.id)}
                className="relative group transition-transform duration-300 ease-in-out"
              >
                <div className="bg-slate-500 dark:bg-gray-800 rounded-lg shadow cursor-pointer p-2 relative group-hover:z-50 group-hover:-translate-y-3 group-hover:scale-[1.03] transition-all duration-300">
                  <img
                    srcSet={
                      show.poster_path
                        ? `https://image.tmdb.org/t/p/w342${show.poster_path}`
                        : "https://placehold.co/300x450?text=No+Image"
                    }
                    alt={`${show.name} poster`}
                    loading={i === 0 ? "eager" : "lazy"}
                    fetchPriority={i === 0 ? "high" : "auto"}
                    sizes="(max-width: 600px) 185px, 342px"
                    width={342}
                    height={513}
                    className="object-cover rounded-md mb-2 w-full h-full"
                  />
                  <div className="text-sm text-center font-semibold text-black dark:text-white">
                    {show.name}
                  </div>
                  <div className="text-xs text-center text-black dark:text-gray-300">
                    {show.first_air_date?.slice(0, 4)}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default PopularTv;
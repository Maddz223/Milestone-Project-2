import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import SkeletonLoader from "../components/SkeletonLoader";
import TrailerModal from "../components/TrailerModal"; // import your modal component

// Fetch trending movies (latest trailers)
const fetchLatestTrailers = async (API_KEY) => {
  const response = await axios.get("https://api.themoviedb.org/3/trending/movie/week", {
    params: { api_key: API_KEY },
  });
  return response.data.results;
};

// Fetch videos (trailers) for a specific movie ID
const fetchMovieVideos = async (movieId, API_KEY) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/videos`,
    { params: { api_key: API_KEY } }
  );
  return response.data.results;
};

const LatestTrailers = () => {
  const [trailers, setTrailers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTrailer, setSelectedTrailer] = useState(null);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const loadTrailers = async () => {
      try {
        setLoading(true);
        setError(null);
        const latestTrailers = await fetchLatestTrailers(API_KEY);
        setTrailers(latestTrailers);
      } catch {
        setError("Failed to fetch latest trailers.");
      } finally {
        setLoading(false);
      }
    };

    loadTrailers();
  }, [API_KEY]);

  // Handler when clicking a trailer slide
  const handleTrailerClick = async (movie) => {
    try {
      const videos = await fetchMovieVideos(movie.id, API_KEY);
      // Find official YouTube trailer
      const youtubeTrailer = videos.find(
        (vid) => vid.site === "YouTube" && vid.type === "Trailer"
      );

      if (youtubeTrailer) {
        setSelectedTrailer({ key: youtubeTrailer.key, name: movie.title || movie.name });
      } else {
        alert("Trailer not available.");
      }
    } catch {
      alert("Failed to load trailer.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-4xl font-bold mb-8 text-center">Latest Trailers</h2>

      {loading ? (
        <div className="flex justify-center gap-4 flex-wrap">
          {Array.from({ length: 6 }, (_, i) => (
            <SkeletonLoader key={i} />
          ))}
        </div>
      ) : error ? (
        <p className="text-center text-red-600">{error}</p>
      ) : trailers.length === 0 ? (
        <p className="text-center">No trailers found.</p>
      ) : (
        <>
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            loop={trailers.length > 3}
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
            {trailers.map((trailer, i) => (
              <SwiperSlide
                key={trailer.id}
                title={trailer.title || trailer.name}
                onClick={() => handleTrailerClick(trailer)}
                style={{ contain: "layout" }}
                className="bg-slate-500 dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg cursor-pointer p-2 transform hover:scale-105 transition-all duration-300"
              >
                <img
                  srcSet={
                    trailer.poster_path
                      ? `https://image.tmdb.org/t/p/w342${trailer.poster_path}`
                      : "https://placehold.co/300x450?text=No+Image"
                  }
                  alt={`${trailer.title || trailer.name} poster`}
                  loading={i === 0 ? "eager" : "lazy"}
                  fetchPriority={i === 0 ? "high" : "auto"}
                  sizes="(max-width: 600px) 185px, 342px"
                  width={342}
                  height={513}
                  className="object-cover rounded-md mb-2 w-full h-full"
                />
                <div className="text-sm text-center font-semibold text-black dark:text-white">
                  {trailer.title || trailer.name}
                </div>
                <div className="text-xs text-center text-black dark:text-gray-300">
                  {trailer.release_date?.slice(0, 4) || trailer.first_air_date?.slice(0, 4)}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Trailer Modal */}
          {selectedTrailer && (
            <TrailerModal trailer={selectedTrailer} onClose={() => setSelectedTrailer(null)} />
          )}
        </>
      )}
    </div>
  );
};

export default LatestTrailers;
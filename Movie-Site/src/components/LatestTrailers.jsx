import { useEffect, useState } from "react";
import axios from "axios";
import getCountryCode from "../utils/location";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import TrailerModal from "../components/TrailerModal";
import SkeletonLoader from "../components/SkeletonLoader";

const LatestTrailers = () => {
  const [trailers, setTrailers] = useState([]);
  const [selectedTrailer, setSelectedTrailer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLatestTrailers = async () => {
      try {
        setLoading(true);
        setError(null);

        const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
        const country = getCountryCode();

        // Fetch upcoming movies
        const upcomingRes = await axios.get(
          "https://api.themoviedb.org/3/movie/upcoming",
          {
            params: {
              api_key: API_KEY,
              language: "en-US",
              region: country,
            },
          }
        );

        const upcomingMovies = upcomingRes.data.results;

        // Fetch trailers for each movie and pick only the newest one
        const trailersPromises = upcomingMovies.map(async (movie) => {
          try {
            const res = await axios.get(
              `https://api.themoviedb.org/3/movie/${movie.id}/videos`,
              { params: { api_key: API_KEY, language: "en-US" } }
            );

            // Filter YouTube trailers only
            const trailers = res.data.results
              .filter(
                (video) =>
                  video.type === "Trailer" && video.site === "YouTube"
              )
              .map((trailer) => ({
                ...trailer,
                movieTitle: movie.title,
                posterPath: movie.poster_path,
              }));

            // Sort by published_at descending and pick newest trailer
            trailers.sort((a, b) => {
              if (a.published_at && b.published_at) {
                return new Date(b.published_at) - new Date(a.published_at);
              }
              return 0;
            });

            return trailers[0] || null; // return newest trailer or null if none
          } catch {
            return null;
          }
        });

        const trailersPerMovie = await Promise.all(trailersPromises);

        // Filter out movies without trailers
        let latestTrailers = trailersPerMovie.filter(Boolean);

        // Remove duplicates by trailer key
        const seen = new Set();
        latestTrailers = latestTrailers.filter((trailer) => {
          if (seen.has(trailer.key)) return false;
          seen.add(trailer.key);
          return true;
        });

        // Sort globally by published_at newest first
        latestTrailers.sort((a, b) => {
          if (a.published_at && b.published_at) {
            return new Date(b.published_at) - new Date(a.published_at);
          }
          return 0;
        });

        setTrailers(latestTrailers);
      } catch (err) {
        setError("Failed to fetch latest trailers.");
      } finally {
        setLoading(false);
      }
    };

    fetchLatestTrailers();
  }, []);

  const handleTrailerClick = (trailer) => {
    setSelectedTrailer(trailer);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Latest Trailers in Cinemas
      </h2>

      {loading ? (
        <div className="flex justify-center gap-4 flex-wrap">
          {[...Array(6)].map((_, index) => (
            <SkeletonLoader key={index} />
          ))}
        </div>
      ) : error ? (
        <p className="text-center text-red-600">{error}</p>
      ) : trailers.length === 0 ? (
        <p className="text-center">No trailers found.</p>
      ) : (
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={5}
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
            0: { slidesPerView: 1.2, spaceBetween: 10 },
            480: { slidesPerView: 1.5 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="w-full max-w-6xl mx-auto"
        >
          {trailers.map((trailer, index) => (
            <SwiperSlide
              key={`${trailer.key}-${index}`}
              className="bg-slate-500 dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg text-center p-2 cursor-pointer transform hover:scale-105 transition-all duration-300"
              onClick={() => handleTrailerClick(trailer)}
              title={`${trailer.movieTitle} - ${trailer.name}`}
            >
              <img
                loading={index === 0 ? "eager" : "lazy"}
                src={
                  trailer.posterPath
                    ? `https://image.tmdb.org/t/p/w342${trailer.posterPath}`
                    : "https://placehold.co/300x450?text=No+Image&font=roboto"
                }
                alt={`${trailer.movieTitle} poster`}
                className="w-full h-64 object-cover rounded-md mb-2"
              />
              <div className="text-sm font-medium text-black dark:text-white">
                {trailer.movieTitle}
              </div>
              <div className="text-xs text-black dark:text-gray-400">
                {trailer.name}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {selectedTrailer && (
        <TrailerModal
          trailer={selectedTrailer}
          onClose={() => setSelectedTrailer(null)}
        />
      )}
    </div>
  );
};

export default LatestTrailers;
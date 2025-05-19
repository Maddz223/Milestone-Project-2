// Components
import PopularTV from "../components/PopularTV";
import PopularMovies from "../components/PopularMovies";
import LatestTrailers from "../components/LatestTrailers";

// Home Component
const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-indigo-600 dark:text-indigo-400">
        Welcome to What2Watch
      </h1>
      <p className="max-w-3xl mx-auto text-center text-lg text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
        Your ultimate destination for all things movies and TV! Whether you're hunting for the latest blockbusters,
        binge-worthy series, or fresh trailers straight from the cinema, we’ve got you covered. Dive into our curated
        collections, stay updated with trending hits, and create your personal watchlist to never miss a moment of great
        entertainment. Sit back, relax, and let What2Watch guide you to your next favorite story. Happy watching!
      </p>
      <section className="mb-8">
        <LatestTrailers />
      </section>
      <section className="mb-8">
        <PopularMovies />
      </section>
      <section className="mb-8">
        <PopularTV />
      </section>
    </div>
  );
};

export default Home;
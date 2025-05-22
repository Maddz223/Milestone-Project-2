import { lazy, Suspense } from "react";

// Lazy load heavy components
const PopularTV = lazy(() => import("../components/PopularTV"));
const PopularMovies = lazy(() => import("../components/PopularMovies"));
const LatestTrailers = lazy(() => import("../components/LatestTrailers"));

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-4">
          Welcome to What2Watch
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Your ultimate destination for all things movies and TV! Whether you're hunting for the latest blockbusters,
          binge-worthy series, or fresh trailers straight from the cinema, we’ve got you covered. Dive into our curated
          collections, stay updated with trending hits, and create your personal watchlist to never miss a moment of
          great entertainment. Sit back, relax, and let What2Watch guide you to your next favorite story. Happy watching!
        </p>
      </header>

      <Suspense fallback={<SkeletonSection title="Latest Trailers" />}>
        <section className="mb-12">
          <LatestTrailers />
        </section>
      </Suspense>

      <Suspense fallback={<SkeletonSection title="Popular Movies" />}>
        <section className="mb-12">
          <PopularMovies />
        </section>
      </Suspense>

      <Suspense fallback={<SkeletonSection title="Popular TV" />}>
        <section className="mb-12">
          <PopularTV />
        </section>
      </Suspense>
    </div>
  );
};

// Optional skeleton loader
const SkeletonSection = ({ title }) => (
  <div className="animate-pulse text-center py-8">
    <h2 className="text-2xl font-bold text-gray-500 dark:text-gray-400 mb-4">{title}</h2>
    <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded-md max-w-4xl mx-auto"></div>
  </div>
);

export default Home;
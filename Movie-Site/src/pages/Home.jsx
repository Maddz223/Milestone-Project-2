// Components
import PopularTV from "../components/PopularTV";
import PopularMovies from "../components/PopularMovies";
import LatestTrailers from "../components/LatestTrailers";

// Home Component
const Home = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold text-center my-8">
                Welcome to the Movie and TV Series App
            </h1>
            <LatestTrailers />
            <PopularMovies />
            <PopularTV />
        </div>
    );
};

export default Home;
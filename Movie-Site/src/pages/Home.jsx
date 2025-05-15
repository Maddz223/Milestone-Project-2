import PopularTV from "../components/PopularTV";
import PopularMovies from "../components/PopularMovies";

// Home Component
const Home = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold text-center my-8">
                Welcome to the Movie and TV Series App
            </h1>
            <PopularMovies />
            <PopularTV />
        </div>
    );
};

export default Home;
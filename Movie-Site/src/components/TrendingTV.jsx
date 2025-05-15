import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Function to navigate to Tv details page.
const TrendingTV = () => {
    const [trendingTV, setTrendingTV] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // API fetch.
        const fetchTrendingTV = async () => {
            const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
            const response = await axios.get(
                `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`
            );
            setTrendingTV(response.data.results);
        };
        fetchTrendingTV();
    }, []);

    // Function to navigate to tv details page after clicking the poster.
    const handleTVClick = (tvId) => {
        navigate(`/tv/${tvId}`);
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-4xl font-bold mb-6 text-center">Trending TV Series</h2>
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4">
                {trendingTV.map((tv) => (
                    <div
                        //Makes the poster clickable.
                        key={tv.id}
                        className="cursor-pointer transform hover:scale-105 transition-all"
                        onClick={() => handleTVClick(tv.id)}
                    >
                        <img className="w-full h-auto rounded-lg shadow-md"
                            src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
                            alt={tv.name}
                        />
                        <h3 className="text-center text-sm mt-2 font-medium">{tv.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default TrendingTV;
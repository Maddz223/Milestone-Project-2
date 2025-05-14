import { useNavigate } from "react-router-dom";
const TrendingTV = () => {
    const [trendingTV, setTrendingTV] = useState([]);
    const navigate = useNavigate(); // <-- add this

    useEffect(() => {
        const fetchTrendingTV = async () => {
            const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
            const response = await axios.get(
                `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`
            );
            setTrendingTV(response.data.results);
        };
        fetchTrendingTV();
    }, []);

    const handleTVClick = (tvId) => {
        navigate(`/tv/${tvId}`); // <-- navigate to detail page
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-4xl font-bold mb-4">Trending TV Series</h2>
            <div className="grid grid-cols-4 gap-4">
                {trendingTV.map((tv) => (
                    <div
                        key={tv.id}
                        className="cursor-pointer transform hover:scale-105 transition-all"
                        onClick={() => handleTVClick(tv.id)} // <-- make clickable
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
                            alt={tv.name}
                            className="w-full h-auto"
                        />
                        <h3 className="text-center mt-2">{tv.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

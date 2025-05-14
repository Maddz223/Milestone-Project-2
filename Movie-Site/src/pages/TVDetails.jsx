import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const TVDetails = () => {
    const { tvId } = useParams();
    const [tvDetails, setTvDetails] = useState(null);
    const [cast, setCast] = useState([]);
    const [trailers, setTrailers] = useState([]);
    const [watchProviders, setWatchProviders] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

            const [detailsRes, creditsRes, videosRes, providersRes] = await Promise.all([
                axios.get(`https://api.themoviedb.org/3/tv/${tvId}?api_key=${API_KEY}&language=en-US`),
                axios.get(`https://api.themoviedb.org/3/tv/${tvId}/credits?api_key=${API_KEY}`),
                axios.get(`https://api.themoviedb.org/3/tv/${tvId}/videos?api_key=${API_KEY}&language=en-US`),
                axios.get(`https://api.themoviedb.org/3/tv/${tvId}/watch/providers?api_key=${API_KEY}`)
            ]);

            setTvDetails(detailsRes.data);
            setCast(creditsRes.data.cast.slice(0, 5));
            setTrailers(
                videosRes.data.results
                    .filter(v => v.type === "Trailer" && v.site === "YouTube")
                    .slice(0, 3)
            );
            setWatchProviders(providersRes.data.results);
        };

        fetchData();
    }, [tvId]);

    if (!tvDetails) return <div className="text-center mt-10">Loading...</div>;

    return (
        <div className="container mx-auto p-6">
            <div className="flex flex-col md:flex-row gap-6">
                <img
                    src={`https://image.tmdb.org/t/p/w500${tvDetails.poster_path}`}
                    alt={tvDetails.name}
                    className="w-64 h-100 rounded shadow-lg"
                />
                <div className="flex-1">
                    <h2 className="text-4xl font-bold mb-2">{tvDetails.name}</h2>
                    <p><strong>First Air Date:</strong> {tvDetails.first_air_date}</p>
                    <p><strong>Rating:</strong> {tvDetails.vote_average} / 10</p>
                    <p className="mt-4"><strong>Overview:</strong> {tvDetails.overview}</p>

                    <h3 className="text-xl mt-6 font-semibold">Cast:</h3>
                    <ul className="list-disc ml-5">
                        {cast.map(actor => (
                            <li key={actor.id}>{actor.name} as {actor.character}</li>
                        ))}
                    </ul>

                    <h3 className="text-xl mt-6 font-semibold">Where to Watch:</h3>
                    {watchProviders && Object.keys(watchProviders).length > 0 ? (
                        Object.entries(watchProviders).map(([country, data]) => (
                            <div key={country} className="mt-2">
                                <h4 className="font-medium">{country}</h4>
                                <ul className="list-disc ml-5">
                                    {data.flatrate?.map(provider => (
                                        <li key={provider.provider_id}>{provider.provider_name}</li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    ) : (
                        <p>No streaming services available.</p>
                    )}
                </div>
            </div>

            <div className="mt-10">
                <h3 className="text-2xl font-bold mb-4">Trailers</h3>
                {trailers.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {trailers.map(trailer => (
                            <div key={trailer.id} className="aspect-video w-full">
                                <iframe
                                    className="w-full h-full rounded shadow"
                                    src={`https://www.youtube.com/embed/${trailer.key}`}
                                    title={trailer.name}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No trailers available.</p>
                )}
            </div>
        </div>
    );
};

export default TVDetails;
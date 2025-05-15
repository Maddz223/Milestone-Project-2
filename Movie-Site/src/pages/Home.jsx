import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TrendingTV from "../components/TrendingTV";
import TrendingMovies from "../components/TrendingMovies";

// Home Component
const Home = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold text-center my-8">
                Welcome to the Movie and TV Series App
            </h1>
            <TrendingMovies />
            <TrendingTV />
        </div>
    );
};

export default Home;
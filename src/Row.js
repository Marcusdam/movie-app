import React, { useState, useEffect } from "react";
import axios from "./axios";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';
import profileImg from "./images/team-1.jpg";
import logo from './logo.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import Banner from "./component/Banner";
import { Link } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original";
const search_Url = `https://api.themoviedb.org/3/search/movie?api_key=a0d9586980219099c1ac3211b50757d4&query=`;

const Row = ({ title, fetchUrl, isLargeRow, isGrid }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [query, setQuery] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [fetchUrl]);

  const searchMovie = async (e) => {
    e.preventDefault();
    try {
      const requestSearch = await axios.get(search_Url + `${query}`);
      setMovies(requestSearch.data.results);
    } catch (error) {
      console.error("Error searching movies: ", error);
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoPlay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div>
      <div className="w-full fixed top-0 z-10">
        <div className=" bg-gray-900 py-2">
          <div className="flex justify-between items-center px-6">
            {toggle === false ? (
              <RxHamburgerMenu
                onClick={handleToggle} size={24}
                className="block md:hidden"
              />
            ) : (
              <AiOutlineClose
                onClick={handleToggle} size={24}
                className="block  md:hidden"
              />
            )}
            
            <div className="flex items-center ">
            <img className="w-16 md:w-28 md:-ml-10" src={logo} alt="logo" />
            <h2 className="hidden md:block text-white font-bold sm:text-xm md:text-lg lg:text-2xl">MovieHaven</h2>
            </div>
            <div className=" ">
            <form onSubmit={searchMovie} className="flex items-center ">
              <input
                onChange={(e) => setQuery(e.target.value)}
                className="border-2 w-full text-black pl-3 rounded-full border-black outline-none"
                type="text"
                placeholder="search..."
              />
              <button className= "bg-red-600 px-2 ml-4  rounded">Search</button>
              <img className="hidden lg:block  w-8 border-2 border-red-100 rounded-full ml-20" src={profileImg} alt="profile" />
            </form>
          </div>
          </div>
          {toggle && (
              <div className="w-56 h-full fixed z-10 top-20 sm:block md:block lg:hidden">
                <ul className="flex flex-col bg-gray-900 space-y-6 text-white p-6">
                  <Link to="/" className="hover:bg-red-600 px-5 py-2 rounded-md">Home</Link>
                  <Link to="/Upcoming" className="hover:bg-red-600 px-5 py-2 rounded-md">Upcoming</Link>
                  <Link to="/Popular" className="hover:bg-red-600 px-5 py-2 rounded-md">Popular</Link>
                  <Link to="/TopRated" className="hover:bg-red-600 px-5 py-2 rounded-md">Top Rated</Link>
                  <Link to="/TrendingNow" className="hover:bg-red-600 px-5 py-2 rounded-md">Trending Now</Link>
                  <Link to="/Action" className="hover:bg-red-600 px-5 py-2 rounded-md">Action</Link>
                  <Link to="/Comedies" className="hover:bg-red-600 px-5 py-2 rounded-md">Comedies</Link>
                  <Link to="/Romance" className="hover:bg-red-600 px-5 py-2 rounded-md">Romance</Link>
                  <Link to="/Horror" className="hover:bg-red-600 px-5 py-2 rounded-md">Horror</Link>
                  <Link to="/Documentaries" className="hover:bg-red-600 px-5 py-2 rounded-md">Documentaries</Link>
                </ul>
              </div>
            )}
          
        </div>
      </div>
      <Banner />
      <div>
        <div className="row bg-black font-bold w-full pr-6">
          <h2 className="text-xl py-3 px-8">{title}</h2>
          <div className="poster_card grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2">
            {movies &&
              movies.map((movie) => (
                <React.Fragment key={movie.id}>
                  <div className="overflow-hidden">
                    <img
                      onClick={() => handleClick(movie)}
                      className="mx-6 transition duration-500 hover:scale-105"
                      src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                      alt={movie.name}
                    />
                    <div>
                      <p className="py-3 mx-6 text-md text-white">{movie.title}</p>
                    </div>
                  </div>
                </React.Fragment>
              ))}
          </div>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
      </div>
    </div>
  );
};

export default Row;

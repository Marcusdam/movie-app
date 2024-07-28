import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./index.css";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer'
import profileImg from "./images/team-1.jpg";
import logo from './logo.png'
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
  const [toggle, setToggle] = useState (false);

  const handleToggle = () =>{
    setToggle(!toggle);
  }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

 

  const searchMovie = (e) => {
    e.preventDefault();

   
    const fetchSearch =async () => {
      const requestSearch = await axios.get(search_Url + `${query}`)
      setMovies(requestSearch.data.results)
    }
    fetchSearch()

  };

  const opts = {
    height: "390",
    width: "100",
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
        console.log('clicked')
    }
  };

  return (
    <div>
    
    <div>
       <div className="w-full fixed z-10 ">
       <div className="flex items-center justify-between relative bg-gray-900 ">
        <div className="flex items-center">

        {
                (toggle === false) ? <RxHamburgerMenu onClick={handleToggle}  className="text-4xl hover:border-2 transition-0.4s border-white ml-8 sm:flex md:flex lg:hidden"/>:   <AiOutlineClose onClick={handleToggle}  className="text-4xl hover:border-2 border-white rounded-full ml-8 sm:block md:block lg:hidden"/>
              }
           
          {
                (toggle === false) ? null : <div className="w-56 h-full fixed z-10  top-20 sm:block md:block lg:hidden">
                <ul className=" flex flex-col bg-gray-900 space-y-6 text-white p-6">
          
                  <Link to='/' className="hover:bg-red-600 px-5 py-2 rounded-md">Home</Link>
                  <Link to='/Upcoming' className="hover:bg-red-600 px-5 py-2 rounded-md">Upcoming</Link>
                  <Link to='/Popular' className="hover:bg-red-600 px-5 py-2 rounded-md">Popular</Link>
                  <Link to='Top Rated' className="hover:bg-red-600 px-5 py-2 rounded-md">Top Rated</Link>
                  <Link to='Trending Now' className="hover:bg-red-600 px-5 py-2 rounded-md">Trending Now</Link>
                  <Link to='/Action' className="hover:bg-red-600 px-5 py-2 rounded-md">Action</Link>
                  <Link to='Comedies' className="hover:bg-red-600 px-5 py-2 rounded-md">Comedies</Link>
                  <Link to='Romance' className="hover:bg-red-600 px-5 py-2 rounded-md">Romance</Link>
                  <Link to='Horror' className="hover:bg-red-600 px-5 py-2 rounded-md">Horror</Link>
                  <Link to='Documentaries' className="hover:bg-red-600 px-5 py-2 rounded-md">Documentries</Link>
                </ul>
                
              </div>
              }
        <img className="w-28" src={logo} alt="img" />
         <h2 className="text-white font-bold sm:text-xs md:text-lg lg:text-2xl"> MovieHaven</h2>
       </div>
       <div className="px-6">

        <form onSubmit={searchMovie} className="flex items-right ml-10">
       <input onChange={e =>  setQuery(e.target.value)}className="border-2 sm:w-1/8 md:w-48 lg:w-96 text-black pl-3 rounded-full border-black  focus-none outline-none" type="text" placeholder="search..." />      
      <button  className="bg-red-600 px-2 ml-3 rounded">Search</button>    
        <img className=" lg:block sm:hidden md:hidden w-8 border-2 border-red-100 rounded-full  ml-20" src={profileImg} alt="" />
        </form>
      
        
    </div>
       
      </div>
      
      </div>
      
    </div>
    
      
     <Banner/>
      
      
      <div>
      <div className="row bg-black font-bold w-full pr-6">
        <h2 className="text-xl  py-3 px-8">{title}</h2>

        <div
          className="poster_card grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2"
          
        >
          {movies &&
            movies.map((movie) => (
              <React.Fragment>
                <div className="overflow-hidden">
                  <img
                    key={movie.id}
                    onClick={() => handleClick(movie)}        className="mx-6 trasition duration-500 hover:scale-[1.08] "
                    src={`${base_url}${
                      isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                    alt={movie.name}
                  />

                  <div>
                    <p className="py-3 mx-6 text-md text-white ">{movie.title}</p>
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

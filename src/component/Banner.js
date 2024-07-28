import React, { useState, useEffect } from 'react'
import axios from 'axios';
// import requests from '../requests';

const Banner = () => {

    const [movie, setMovie ] = useState ([]);

   useEffect(() => {
    async function fetchData (){
        const request = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=a0d9586980219099c1ac3211b50757d4&with_genres=27')
        setMovie(request.data.results[Math.floor(Math.random()* request.data.results.length -1)]);
        return request; 
    } 
    fetchData()
   }, []) 
 
  return (
   <div>
     <header className='bg-cover bg-center h-[100vh] w-full p-20 object-fill shadow-md shadow-white'
    style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`
     
    }}>
      <div className=' mt-20 p-4 space-y-6 max-w-md text-white' >
        <h2 className='text-white text-3xl mt-10 font-bold'>{movie?.title || movie?.name || movie?.original_name}</h2>
        <div className='grid grid-cols-2'>
        <button className='px-6 py-2 bg-black opacity-80 rounded text-white mr-4 font-bold hover:bg-red-500' type='button' >Play</button>
        <button className='px-6 py-2 bg-black opacity-80 rounded text-white mx-4 font-bold hover:bg-red-500' type='button'>My List</button>
        </div>
        <div>
          <h1 className='text-sm'>{movie.overview}</h1>
        </div>


      </div>
    </header>
   </div>
  )
}

export default Banner

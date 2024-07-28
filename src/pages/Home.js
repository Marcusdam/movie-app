import React from 'react'
import Row from '../Row';
import requests from '../requests';


const Home = () => {
  return (
    <React.Fragment>
     
      
       <div className='text-white'>
        <Row title="NETFLIX ORIGINAL"  fetchUrl={requests.fetchActionMovies} isLargeRow isGrid />
        
        
        
       </div>     
    </React.Fragment>
  )
}

export default Home

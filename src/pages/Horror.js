import React from 'react'
import Row from '../Row'
import requests from '../requests'

const Horror = () => {
  return (
    <div className='text-white'>
      
      <Row title="Horro Movies" fetchUrl={requests.fetchHorrorMovies} /> 
    </div>
  )
}

export default Horror

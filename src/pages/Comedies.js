import React from 'react'
import requests from '../requests'
import Row from '../Row'

const Comedies = () => {
  return (
    <div className='text-white'>
      <Row title="Comedies" fetchUrl={requests.fetchComedyMovies} /> 
      
    </div >
  )
}

export default Comedies

import React from 'react'
import Row from '../Row'
import requests from '../requests'

const TopRated = () => {
  return (
    <div className='text-white'>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} /> 
      
    </div>
  )
}

export default TopRated


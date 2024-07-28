import React from 'react'
import Row from '../Row'
import requests from '../requests'

const Trending = () => {
  return (
    <div>
       <Row title="Trending Now" fetchUrl={requests.fetcTrending} /> 
    </div>
  )
}

export default Trending

import React from 'react'
import Row from '../Row'
import requests from '../requests'

const Popular = () => {
  return (
    <div className='text-white'>
        <Row title="Popular"  fetchUrl={requests.fetchPopular} isGrid />
      
    </div>
  )
}

export default Popular

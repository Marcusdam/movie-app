import React from 'react'
import Row from '../Row'
import requests from '../requests'

const Action = () => {
  return (
    <div className='text-white'>
       <Row title="Action"  fetchUrl={requests.fetchActionMovies} />
    </div>
  )
}

export default Action

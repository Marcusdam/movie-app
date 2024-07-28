import React from 'react'
import Row from '../Row'
import requests from '../requests'

const Upcoming = () => {
  return (
    <div className='text-white'>
      <Row title="Upcoming"  fetchUrl={requests.fetchUpcoming} />
    </div>
  )
}

export default Upcoming

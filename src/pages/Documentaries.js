import React from 'react'
import Row from '../Row'
import requests from '../requests'

const Documentaries = () => {
  return (
    <div className='text-white'>
      <Row title="Documentay" fetchUrl={requests.fetchDocumentaries} /> 
    </div>
  )
}

export default Documentaries

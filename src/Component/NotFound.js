import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='notFound'>
      <h2>Error 404</h2>
      <p>Page Not Found</p>
      <Link to='/' >Back Home</Link>
    </div>
  )
}

export default NotFound

import React from 'react'
import UseFetch from './useFetch'
import BlogList from './BlogList'


const Home = () => {
    const [data, Error, Loading] = UseFetch('http://localhost:5000/blogs');

    if (Loading) return(<h1 className='loading'>Loading...</h1>)
    if (Error) return <h1 className='error'>{Error}</h1>
    console.log(data)

  return (<>
  <BlogList blogs={data} />
  </>)
}

export default Home

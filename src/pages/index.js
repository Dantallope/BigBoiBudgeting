import React from 'react'
//import from react
import { useLoaderData } from 'react-router-dom'
// lets us use the loader
import { fetchData } from '../tools'
// loader
export function homeLoader(){
  const userName = fetchData("userName");
  return {userName}
}

const Home = () => {
  const {userName} = useLoaderData()

  return (
    <div>
        <h1>{userName}</h1>
    </div>
  )
}
// lets app.js access this file
export default Home

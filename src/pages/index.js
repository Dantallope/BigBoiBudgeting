import React from 'react'
//import from react
import { useLoaderData } from 'react-router-dom'
// lets us use the loader
import { fetchData } from '../tools'
// loader
export function homeLoader(){
  const userName = fetchData("userName")
  return {userName}
}

const Home = () => {
  const {userName} = useLoaderData()

  return (
    <div style = {{display:'flex',justifyContent:'center', alignContent:'center',height:'90vh'}}>
        <h1>Home</h1>
    </div>
  )
}
// lets app.js access this file
export default Home

import React from 'react'
import Header from "../components/Header"
import Navbar from '../components/Navbar'
import Trending from "../pages/Trending"

const Home = () => {
  return (
    <>
      <Header/>
      <Trending/>
      <Navbar/>
    </>
  )
}

export default Home
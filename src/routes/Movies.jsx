import React from 'react'
import Header from "../components/Header"
import Navbar from '../components/Navbar'
import Movies from "../pages/Movies"

const Home = () => {
  return (
    <>
      <Header/>
      <Movies/>
      <Navbar/>
    </>
  )
}

export default Home
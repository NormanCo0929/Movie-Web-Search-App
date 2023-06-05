import React from 'react'
import Header from "../components/Header"
import Navbar from '../components/Navbar'
import TvSeries from "../pages/TvSeries"

const Home = () => {
  return (
    <>
      <Header/>
      <TvSeries/>
      <Navbar/>
    </>
  )
}

export default Home
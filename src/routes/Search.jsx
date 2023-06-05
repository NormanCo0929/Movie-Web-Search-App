import React from 'react'
import Header from "../components/Header"
import Navbar from '../components/Navbar'
import Search from "../pages/Search"

const Home = () => {
  return (
    <>
      <Header/>
      <Search/>
      <Navbar/>
    </>
  )
}

export default Home
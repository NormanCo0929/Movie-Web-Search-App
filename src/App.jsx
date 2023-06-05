import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./routes/Home"
import Movies from "./routes/Movies"
import TvSeries from "./routes/TvSeries"
import Search from "./routes/Search"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/tvseries" element={<TvSeries/>}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>
    </>
  )
}

export default App

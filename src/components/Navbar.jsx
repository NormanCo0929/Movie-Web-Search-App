import React from 'react';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='bg-gray-800 text-green-400 h-16 md:text-xl lg:text-2xl md:h-20 lg:h-24 flex justify-between items-center fixed bottom-0 z-50 w-full'>
      <div className='px-1 md:px-8 lg:px-12 py-1 flex flex-col text-center m-2 cursor-pointer'onClick={() => navigate("/")}>
        <i className='bx bxs-hot'></i>
        <p>Trending</p>
      </div>
      <div className='px-1 md:px-8 lg:px-12 py-1 flex flex-col text-center m-2 cursor-pointer'onClick={() => navigate("/movies")}>
        <i className='bx bxs-movie-play'></i>
        <p>Movies</p>
      </div>
      <div className='px-1 md:px-8 lg:px-12 py-1 flex flex-col text-center m-2 cursor-pointer'onClick={() => navigate("/tvseries")}>
        <i className='bx bx-tv'></i>
        <p>TV Series</p>
      </div>
      <div className='px-1 md:px-8 lg:px-12 py-1 flex flex-col text-center m-2 cursor-pointer'onClick={() => navigate("/search")}>
        <i className='bx bx-search'></i>
        <p>Search</p>
      </div>
    </div>
  )
}

export default Navbar
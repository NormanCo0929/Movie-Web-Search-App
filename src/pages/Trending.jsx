import React, { useState, useEffect } from 'react'
import MovieTrending from '../components/MovieTrending';

const Trending = () => {
  const [movies, setMovies] = useState([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWFjMWU5YzI2NjNlMmYxMTQzMmMyNmU3ZTRlY2I4MyIsInN1YiI6IjY0MzI2MDRmNmRlYTNhMDBiNTRmNGU5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9bgEy_iDWQCzSslh0UtPE0AdrA7H1liKu-kgQuEUpRU`
    }
  };
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
      .then(response => response.json())
      .then(data => {
        // console.log(data.results)
        setMovies(data.results)
      })
      .catch(err => console.error(err));
  }, [])

  return (
    <div className='bg-gray-900'>
      <span className='text-white text-xl md:text-2xl lg:text-4xl font-bold flex justify-center items-center'>TRENDING</span>
      <div className='mx-auto grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid:cols-2'>
        {
        movies && movies.map((c) => (
          <MovieTrending
            key = {c.id}
            id = {c.id}
            poster = {c.poster_path}
            title = {c.title || c.name}
            date = {c.release_date}
            media_type = {c.media_type}
            vote_average = {c.vote_average}
            overview = {c.overview}
          />
        ))
        }
      </div>
      <span>Trending</span>
    </div>
  )
}

export default Trending
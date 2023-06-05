import React, { useState, useEffect } from 'react'
import MovieTrending from '../components/MovieTrending';

const Trending = () => {
  const [movies, setMovies] = useState([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWFjMWU5YzI2NjNlMmYxMTQzMmMyNmU3ZTRlY2I4MyIsInN1YiI6IjY0MzI2MDRmNmRlYTNhMDBiNTRmNGU5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9bgEy_iDWQCzSslh0UtPE0AdrA7H1liKu-kgQuEUpRU'
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
    // <div>{movies.map((movieReq) => <MovieTrending key={movieReq.id} {...movieReq}/>)}</div>
    <div className='bg-gray-900'>
      <span>Trending</span>
      <div>
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
    </div>
  )
}

export default Trending
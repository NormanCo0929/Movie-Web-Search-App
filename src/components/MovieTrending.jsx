import React from 'react'
import { img_300 } from '../config/config'

const MovieTrending = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
  overview
}) => {
  return (
    <div className='flex flex-col m-2 w-40 md:w-64 lg:w-80 p-2 bg-gray-700 rounded-xl relative hover:bg-gray-300'>
      <img src={ poster ? `${img_300}/${poster}` : unavailable} alt={title}
      className=''/>
      <b>{title}</b>
      <span>{media_type === "tv" ? "TV Series" : "Movie"}</span>
      <span>{date}</span>
    </div>
  )
}

export default MovieTrending
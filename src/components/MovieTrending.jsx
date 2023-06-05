import React from 'react'
import { img_300 } from '../config/config'
import { format } from "date-fns"

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
    <div className='flex flex-col mx-24 my-2 sm:m-2 md:m-2 lg:m-2 xl:m-2 p-2 bg-gray-700 rounded-xl relative hover:bg-gray-300 text-green-300 hover:text-black'>
      <img src={ poster ? `${img_300}/${poster}` : unavailable} alt={title}
      className='rounded-xl'/>
      <b>{title}</b>
      <div className='flex justify-between'>
        <span>{media_type === "tv" ? "TV Series" : "Movie"}</span>
        <span>{format(new Date(date), "MMMM dd, yyyy")}</span>
      </div>
    </div>
  )
}

export default MovieTrending
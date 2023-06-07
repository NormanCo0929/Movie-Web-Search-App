import React, { useState } from 'react'

const CustomPagination = ({ setPage, numOfPages = 10 }) => {
  let [num, setNum] = useState(1)
  let [cur, setCur] = useState(1)

  const handlePageChange = (page) => {
    setPage(page)
    window.scroll(0, 0)
  }

  const pages = [
    {page: num},
    {page: num + 1 },
    {page: num + 2 },
    {page: num + 3 },
  ]
  function Next() {
    setNum(++num)
  }
  function Back() {
    num > 1 && setNum(--num)
  }

  return (
    <div className='flex bg-white rounded-lg'
    count={numOfPages}
    onChange={(e) => handlePageChange(e.target.addEventListener)}>
      <div className='flex justify-center items-center rounded-l-lg h-12 w-12 border-2 border-gray-600 hover:bg-gray-600 hover:text-white'
      onClick={Back}><i className='bx bx-chevron-left' ></i></div>
      {
        pages.map((pg, i) => (
          <button className={`h-12 w-12 border-2 border-gray-600' ${cur === pg.page && 'bg-gray-600 text-white'}`}
          onClick={() => setCur(pg.page)}>{pg.page}</button>
        ))
      }
      <div className='flex justify-center items-center rounded-r-lg h-12 w-12 border-2 border-gray-600 hover:bg-gray-600 hover:text-white'
      onClick={Next}><i className='bx bx-chevron-right' ></i></div>
    </div>
  )
}

export default CustomPagination
import React from 'react'

const Pagination = ({current, onChange}) => {

  const handlePageChange = () => {
    window.scroll(0, 0);
  }

  let items = []
  const numOfPages = 5

  if (current > 1) {
    items.push(
      <li key="prev" onClick={() => {onChange(current - 1), handlePageChange()}}>
        <p className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</p>
      </li>
    )
  }

  for(let page = 1; page <= numOfPages; page++) {
    items.push(
      page === current ?
        <li key={page} onClick={() => {onChange(page), handlePageChange()}}>
          <p aria-current="page" className="px-3 py-2 leading-tight text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">{page}</p>
        </li>
      :
        <li key={page} onClick={() => {onChange(page), handlePageChange()}}>
          <p className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{page}</p>
        </li>
    )
  }

  if (current < numOfPages) {
    items.push(
      <li key="next" onClick={() => {onChange(current + 1), handlePageChange()}}>
        <p className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</p>
      </li>
    )
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px">
        {items}
      </ul>
    </nav>
  )
}

export default Pagination
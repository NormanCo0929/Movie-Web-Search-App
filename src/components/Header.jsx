import React from 'react'

const Header = () => {

  return (
    <div className='bg-gray-800 text-green-400 text-xl md:text-2xl lg:text-4xl font-bold h-12 md:h-14 lg:h-16 flex justify-center items-center sticky top-0 z-50 w-full'>
      <span className='cursor-pointer'onClick={() => window.scroll(0, 0)}>Movie Web Search App</span>
    </div>
  )
}

export default Header
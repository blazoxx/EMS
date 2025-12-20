import React from 'react'

const Header = ({data}) => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl sm:text-3xl font-semibold'>Hello <br /> <span className='text-3xl sm:text-5xl font-semibold'>{data.name} 👋</span></h1>
        <button className='bg-red-500 font-medium text-white px-5 py-3 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header
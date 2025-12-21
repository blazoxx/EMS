// import React, { useState } from 'react'

const Header = ({data}) => {

  // const [userName, setUserName] = useState('')

  // if(!data){
  //   setUserName('Admin')
  // }else{
  //   setUserName(data.name)
  // }

  const logoutHandler = () => {
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  }

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl sm:text-3xl font-semibold'>Hello <br /> <span className='text-3xl sm:text-5xl font-semibold'>username 👋</span></h1>
        <button onClick={logoutHandler} className='cursor-pointer bg-red-500 font-medium text-white px-5 py-3 rounded-sm active:scale-95'>Log Out</button>
    </div>
  )
}

export default Header
import React from 'react'
import { Link } from 'react-router-dom'


function Pnf() {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <img src="https://png.pngtree.com/png-vector/20221014/ourmid/pngtree-page-not-found-error-404-png-image_6279587.png" alt="" />
      <h1 className="text-blue-600 text-2xl">Look Like You're Lost !</h1>
      <p>The page you are looking is not available</p>
      <Link to={'/'} className='bg-black py-2 px-3 rounded my-3 text-white'>Home</Link>
    </div>
  )
}

export default Pnf
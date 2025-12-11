import React from 'react'
import { FaPowerOff } from 'react-icons/fa'

function AdminHeader() {
  return (
    <>
    {/* header upperpart */}
    <div className='flex justify-between items-center p-3 md:px-20'>
      {/* logo with title */}
      <div className="flex items-center">
        <img width={'50px'} height={'50px'} src="https://www.pngitem.com/pimgs/m/19-194508_book-stack-icon-free-clipart-library-library-transparent.png" alt="" />
        <p className="font-bold text-2xl">BOOKSTORE</p>
      </div>
      {/* logout */}
      <button className='bg-black px-3 py-2 rounded text-white flex items-center hover:bg-white hover:text-black border'><FaPowerOff className='me-2'/>LOG OUT</button>
    </div>
    {/* header lower part */}
    <div className="bg-black p-2">
      <marquee><p className="text-white">Welcome, Admin! Your'e all set to manage and monitor the system. Let's get into work!</p></marquee>
    </div>
    </>
  )
}

export default AdminHeader
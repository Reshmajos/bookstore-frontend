import React from 'react'
import {  FaBookReader, FaHome } from 'react-icons/fa'
import { FaGear } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function AdminSideBar() {
  return (
    <div className='bg-blue-100 md:min-h-screen h-fit md:flex flex-col text-center'>
      {/* admin */}
      <div className='flex items-center justify-center my-10'>
        <img style={{width:'100px',height:'100px',borderRadius:'50%'}} src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg" alt="" />
        </div>
        {/* name */}
        <h1 className="text-lg font-bold mb-5">Name</h1>
        {/* links */}
        <div className="mt-5 flex items-center justify-center flex-col">
          <div className="mb-3">
          <Link to={'/admin/home'} className='flex items-center'><FaHome className='me-2'/>Dashboard</Link>
          </div>
          <div className="mb-3">
          <Link to={'/admin/resources'} className='flex items-center'><FaBookReader className='me-2'/>Resources</Link>
          </div>
          <div className="mb-3">
          <Link to={'/admin/profile'} className='flex items-center'><FaGear className='me-2'/>Settings</Link>
          </div>
      
        </div>
    </div>
  )
}

export default AdminSideBar
import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSideBar from '../components/AdminSideBar'
import { FaPen } from 'react-icons/fa'

function AdminProfile() {
  return (
    <>
      <AdminHeader/>
      <div className="md:grid grid-cols-5">
        <div className="col-span-1">
          <AdminSideBar/>
        </div>
        <div className="col-span-4 p-10">
          <h1 className="text-center my-5 font-bold text-3xl">Settings</h1>
          <div className="md:grid grid-cols-2 items-center mt-10 gap-10">
            {/* text */}
            <div>
              <h2 className='text-xl font-bold mb-5'>Welcome to the Admin Settings Panel of BookStore Management.</h2>
              <p className='text-justify mb-5'>This section provides complete control over your personal admin account. Here, you can update your profile information, edit contact details, and manage your login credentials to ensure secure access to the system. You can also review a detailed history of your activities, including logins, changes made to the bookstore data, and other administrative actions. These tools help you monitor your account usage, maintain transparency, and quickly identify any unusual activity. Additionally, you can customize your profile settings to match your preferences, making your admin experience more organized and efficient. Overall, this panel helps you keep your account secure, accurate, and fully up to date.</p>

         <p className='font-bold mb-2'>🔧 Account Settings</p>
         <ul>
          <li>
             1. Profile Information: Full Name,Email Address,Phone Number,Profile Photo
          </li>
  
  <li>
    2. Login Credentials:Change Password, Update Login Email, Enable Two-Factor Authentication (2FA), View linked login devices
  </li>
  
 <li>
    3. Activity Logs:Login history,Books added/edited,Orders updated,Settings changes
 </li>
         </ul>
            </div>
            {/* form */}
            <div className="flex justify-center items-center flex-col rounded bg-blue-100 p-5">
{/* image */}
<label htmlFor="uploadImg">
  <input type="file" id='uploadImg' hidden/>
  <img style={{width:'200px',height:'200px',borderRadius:'50%'}} src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg" alt="" />
</label>
<button style={{marginTop:'-25px'}} className='bg-yellow-300 p-2 text-white rounded'><FaPen/></button>
{/* name */}
<div className="mt-10 mb-3 w-full px-5">
  <input type="text" placeholder='Username'className='bg-white p-2 rounded w-full' />
</div>
{/* password */}
<div className=" mb-3 w-full px-5">
  <input type="password" placeholder='New Password'className='bg-white p-2 rounded w-full' />
</div>
<div className=" mb-3 w-full px-5">
  <input type="password" placeholder='Confirm Password'className='bg-white p-2 rounded w-full' />
</div>
{/* button */}
<div className=" mb-3 w-full px-5 flex justify-center mt-5">
  <button className='px-3 py-2 rounded border bg-red-600 text-white hover:bg-white hover:border-red-600 hover:text-red-600'>RESET</button>
<button className='px-3 py-2 rounded border bg-blue-600 text-white hover:bg-white hover:border-blue-600 hover:text-blue-600 ms-5'>UPDATE</button>

</div>
</div>
          </div>
        </div>
      </div>
      <Footer/>
      </>
  )
}

export default AdminProfile
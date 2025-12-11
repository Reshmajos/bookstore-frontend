import React, { useState } from 'react'
import { FaEdit, FaPen } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'


function Edit() {
  const[offcanvasStatus,setoffcanvasStatus] = useState(false)
  return (
    <div>
        <button onClick={()=>setoffcanvasStatus(true)} className='flex items-center text-blue-600 rounded p-2 hover:text-white hover:bg-blue-600'>Edit <FaEdit className='ms-3'/></button>
        {/* offcanvas */}
        {
          offcanvasStatus &&
          <div>
            <div className="fixed inset-0 bg-gray-500/75 z-50 w-full h-full">
<div className="bg-white h-full w-90 z-52 fixed top-0 left-0">
{/* header */}
<div className="bg-black p-3 flex justify-between  text-white ">
<h3 className="text-lg">Update Profile</h3>
<button onClick={()=>setoffcanvasStatus(false)}><FaX/> </button>
</div>
{/* body */}
<div className="flex justify-center items-center flex-col mb-5 mt-10">
{/* image */}
<label htmlFor="uploadImg">
  <input type="file" id='uploadImg' hidden/>
  <img style={{width:'200px',height:'200px',borderRadius:'50%'}} src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg" alt="" />
</label>
<button style={{marginTop:'-25px'}} className='bg-yellow-300 p-2 text-white rounded'><FaPen/></button>
{/* name */}
<div className="mt-10 mb-3 w-full px-5">
  <input type="text" placeholder='Username'className='border border-gray-200 p-2 rounded w-full' />
</div>
{/* password */}
<div className=" mb-3 w-full px-5">
  <input type="password" placeholder='New Password'className='border border-gray-200 p-2 rounded w-full' />
</div>
<div className=" mb-3 w-full px-5">
  <input type="password" placeholder='Confirm Password'className='border border-gray-200 p-2 rounded w-full' />
</div>
{/* bio */}
<div className=" mb-3 w-full px-5">
  <textarea type="text" rows={3} placeholder='Bio'className='border border-gray-200 p-2 rounded w-full' />
</div>
{/* button */}
<div className=" mb-3 w-full px-5 flex justify-end mt-5">
  <button className='px-3 py-2 rounded border bg-red-600 text-white hover:bg-white hover:border-red-600 hover:text-red-600'>RESET</button>
<button className='px-3 py-2 rounded border bg-green-600 text-white hover:bg-white hover:border-green-600 hover:text-green-600 ms-5'>UPDATE</button>

</div>
</div>

</div>
   </div>
        </div>
        }
    </div>
  )
}

export default Edit

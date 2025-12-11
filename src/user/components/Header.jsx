import React, { useEffect, useState } from 'react'
import { use } from 'react'
import { FaAddressCard, FaBars, FaFacebook, FaInstagram, FaPowerOff, FaUser } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


function Header() {
  const [listStatus,setListStatus] = useState(false )
  const [dp,setDp] = useState("")
  const [token,setToken] = useState("")
  const [dropDown,setDropDown] = useState(false)

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      const userToken = sessionStorage.getItem("token")
      setToken(userToken)
      const user = JSON.parse(sessionStorage.getItem("user"))
      setDp(user.picture)
    }
  },[token])

  const menuBtnClick=()=>{
    setListStatus(!listStatus)
  }

  return (
    <>
    {/* header upper part- title and login */}
    <div className="grid grid-cols-3 p-2">
      {/* logo with title(in small screen) */}
      <div className="flex items-center">
        <img width={'60px'} height={'60px'} src="https://www.pngitem.com/pimgs/m/19-194508_book-stack-icon-free-clipart-library-library-transparent.png" alt="" />
        <div className="text-2xl font-bold ms-1 md:hidden">BOOKSTORE</div>
      </div>
      {/* title which is center,shown in medium screen */}
      <div className="md:flex justify-center items-center hidden">
<h1 className="text-3xl font-bold">BOOK STORE</h1>
      </div>
{/* login */}
<div className="md:flex justify-end items-center hidden">
{/* insta,facebook,twitter */}
<FaInstagram/>
<FaFacebook className='mx-2'/>
<FaXTwitter/>
{/* login link */}
{
  !token ?
  <Link to={'/login'} className='ms-4 border rounded p-2 hover:bg-black hover:text-white flex items-center' ><FaUser className='me-1'/>Login</Link>
  :
<div className="relative inline-block text-left ms-2">
  <button onClick={()=>setDropDown(!dropDown)} className="w-full bg-white px-3 py-2 shadow hover:bg-gray-50">
    <img width={'40px'} height={'40px'} style={{borderRadius:'50%'}}  src={dp?dp:"https://th.bing.com/th/id/OIP.St9mUbXptcUVd1cFzUqF3wHaIi?w=173&h=200&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"} alt="" />
  </button>
  {
    dropDown &&
    <div className="absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-lg origin-top-right ring-1 ring-black/5 focus:outline-hidden">
    <Link to={'/user/profile'} className=' px-4 py-2 text-sm text-gray-700 flex items-center'><FaAddressCard className='me-2'/>Profile</Link>
    <button className=' px-4 py-2 text-sm text-gray-700 flex items-center'><FaPowerOff className='me-2'/>Logout</button>
  </div>
  }
</div>
}
      </div>
    </div>
    {/* header lower part- links and menu + login button */}
    <nav className="w-full p-2 bg-black text-white md:flex justify-center items-center ">

                   {/* in small screen */}
<div className="flex justify-between items-center md:hidden">
{/* menu bar btn */}
<button onClick={menuBtnClick}><FaBars/></button>
{/* login link */}
{
  !token ?
  <Link to={'/login'} className='ms-4 border rounded p-2 hover:bg-black hover:text-white flex items-center' ><FaUser className='me-1'/>Login</Link>
  :
<div className="relative inline-block text-left ms-2">
  <button onClick={()=>setDropDown(!dropDown)} className="w-full bg-white px-3 py-2 shadow hover:bg-gray-50">
    <img width={'40px'} height={'40px'} style={{borderRadius:'50%'}}  src={dp?dp:"https://th.bing.com/th/id/OIP.St9mUbXptcUVd1cFzUqF3wHaIi?w=173&h=200&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"} alt="" />
  </button>
  {
    dropDown &&
    <div className="absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-lg origin-top-right ring-1 ring-black/5 focus:outline-hidden">
    <Link to={'/user/profile'} className=' px-4 py-2 text-sm text-gray-700 flex items-center'><FaAddressCard className='me-2'/>Profile</Link>
    <button className=' px-4 py-2 text-sm text-gray-700 flex items-center'><FaPowerOff className='me-2'/>Logout</button>
  </div>
  }
</div>
}
</div>
{/* ul-links md screen and small screen based on condition rendering */}
<ul className={listStatus?"flex flex-col":"md:flex justify-center items-center hidden"}>
  <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/'} >HOME</Link></li>
   <li className='md:mx-4 my-3 md:my-0'><Link to={'/books'} >BOOKS</Link></li>
    <li className='md:mx-4 mb-3 md:mb-0'><Link to={'/contact'} >CONTACT</Link></li>
</ul>
    </nav>
    </>
  )
}

export default Header
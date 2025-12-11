import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaCircleCheck } from 'react-icons/fa6'
import Edit from '../components/Edit'
import SellBook from '../components/SellBook'
import Purchase from '../components/Purchase'
import BookStatus from '../components/BookStatus'




function Profile() {

  const[tab,SetTab] = useState(1)
  const [dp,setDp] = useState("")
  const [username,setUsername] = useState("")
  console.log(dp);
  console.log(username);
  
  useEffect(()=>{
if(sessionStorage.getItem("token") && sessionStorage.getItem("user")){
  const user = JSON.parse(sessionStorage.getItem("user"))
  setUsername(user?.username)
  setDp(user?.picture)
}
  },[])

  return (
    <>
      <Header/>
      {/* black div */}
      <div style={{height:'200px'}} className="bg-black"></div>
      {/* profile image */}
      <div style={{width:'230px',height:'230px',borderRadius:'50%',marginLeft:'70px',marginTop:"-130px"}} className="bg-white p-3">
        <img style={{width:'200px',height:'200px',borderRadius:'50%'}} src={dp?dp:"https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg"} alt="" />
      </div>
      {/* name with edit block */}
      <div className="flex justify-between items-center md:px-20 px-5 my-5">
        <h1 className="text-2xl font-bold flex items-center ">{username?username:username} <FaCircleCheck className='text-blue-400 ms-5'/></h1>
        <Edit/>
      </div>
      <p className="text-justify md:px-20 px-5 my-5">“A book lover who enjoys spending time exploring fiction, self-help, and trending new releases. Always excited to discover fresh stories, inspiring ideas, and hidden gems. Loves a smooth browsing experience and enjoys adding favourite books to the wish-list for future reading..”</p>
      {/* tabs with content */}
      <div className="md:px-40">
        {/* tabs */}
        <div className="flex justify-center items-center my-8 font-medium text-lg">
          <p onClick={()=>SetTab(1)} className={tab==1?"text-blue-600 border-gray-200 border-t border-l border-r p-4 cursor-pointer":'border-gray-200 border-b  p-4 cursor-pointer'}>Sell Books</p>
          <p onClick={()=>SetTab(2)}  className={tab==2?"text-blue-600 border-gray-200 border-t border-l border-r p-4 cursor-pointer":'border-gray-200 border-b  p-4 cursor-pointer'}>Book Status</p>
          <p onClick={()=>SetTab(3)}  className={tab==3?"text-blue-600 border-gray-200 border-t border-l border-r p-4 cursor-pointer":'border-gray-200 border-b  p-4 cursor-pointer'}>Purchase History</p>
        </div>
        {/* contents */}
        {
          tab==1 &&
          <SellBook/>
          }
       { 
        tab==2 &&
        <BookStatus/>
        }
       { 
       tab==3 &&
        <Purchase/>
        }
      </div>
      <Footer/>
      </>
  )
}

export default Profile
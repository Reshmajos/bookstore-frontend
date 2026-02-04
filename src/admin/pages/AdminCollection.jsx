import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSideBar from '../components/AdminSideBar'
import { getAllAdminBooksAPI, getAllUsersAPI, updateBookStatusAPI } from '../../services/allAPI'
import serverURL from '../../services/serverURL'
import { ToastContainer, toast } from 'react-toastify';

function AdminCollection() {
   const[tab,setTab] = useState(1)
   const[allBooks,setAllBooks] = useState([])
   const[allUsers,setAllUsers] = useState([])

   console.log(allBooks);
   console.log(allUsers);
   
   

   useEffect(()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      if(tab==1){
        getAllBooks(token)
      }else if(tab==2){
        getAllUsers(token)
      }
    }
   },[tab])

   const getAllBooks = async (token)=>{
    const reqHeader = {
      "Authorization" : `Bearer ${token}`
    }
    const result = await getAllAdminBooksAPI(reqHeader)
    if(result.status==200){
      setAllBooks(result.data)
    }else {
      console.log(result);
      
    }
   }

   const getAllUsers = async (token)=>{
    const reqHeader = {
      "Authorization" : `Bearer ${token}`
    }
    const result = await getAllUsersAPI(reqHeader)
    if(result.status==200){
      setAllUsers(result.data)
    }else {
      console.log(result);
      
    }
   }

   const updateBookStatus = async (id)=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
      "Authorization" : `Bearer ${token}`
    }
    const result = await updateBookStatusAPI(id,reqHeader)
    if(result.status==200){
toast.success("Book status updated")
getAllBooks(token)
    }else{
      console.log(result);
      
    }
    }
   }

  return (
    <>
      <AdminHeader/>
      <div className="md:grid grid-cols-5">
        <div className="col-span-1">
          <AdminSideBar/>
        </div>
        <div className="col-span-4 p-10">
          <h1 className="my-5 text-center text-3xl font-bold">All Collections</h1>
          {/* tabs */}
          <div className="flex my-10 justify-center items-center">
            <p onClick={()=>setTab(1)} className={tab==1?'text-blue-600 font-bold border-t border-l border-r p-3 border-gray-200 text-xl cursor-pointer':"border-b font-bold border-gray-200 text-xl p-3 cursor-pointer "}>Books</p>
            <p onClick={()=>setTab(2)} className={tab==2?'text-blue-600 font-bold border-t border-l border-r p-3 border-gray-200 text-xl cursor-pointer':"border-b font-bold border-gray-200 text-xl p-3 cursor-pointer "}>Users</p>
          </div>
          {/* tab content*/}
          {/* books */}
          {
            tab==1 &&
            <div className='md:grid grid-cols-4 w-full my-5'>
              {/* duplicate book card */}
              {
                allBooks?.length>0?
                allBooks?.map(book=>(
                  <div key={book?._id} className="shadow rounded p-3 mx-4 mb-5 md:mb-0">
  <img src={book?.imageURL} alt="book" />
  <div className="flex justify-center items-center mt-4 flex-col">
    <h3 className="text-blue-600 font-bold text-lg">{book?.author}</h3>
    <h4>{book?.title}</h4>
    <h4>$ {book?.discountPrice}</h4>
    <div className='grid mt-3 w-full '>
      {
        book?.status != "approved" ?
        <button onClick={()=>updateBookStatus(book?._id)} className='bg-green-600  p-2 text-white'>APPROVE</button>
        :
        <img width={'40px'} src="https://static.vecteezy.com/system/resources/previews/010/152/436/original/tick-check-mark-icon-sign-symbol-design-free-png.png" alt="" />
          }
      </div>
  </div>
            </div>
                ))
                :
                <p>Loading......</p>
              }
          
              
            </div>
          }
          {/* users */}
          {
            tab==2 &&
            <div className='md:grid grid-cols-3 w-full my-5'>
              {/* duplicate users card */}
              {
                allUsers?.length>0?
                allUsers?.map(user=>(
                  <div key={user?._id} className="rounded bg-gray-200 m-2 p-3 text-wrap">
                <p className="text-red-600 font-bold">{user?._id}</p>
                <div className="flex items-center text-wrap mt-3">
               <img width={'100px'} height={'100px'} src={user?.picture?user?.picture.startsWith("https://1h3.googleusercontent.com")?user?.picture:`${serverURL}/uploads/${user.picture}`:"https://freepngimg.com/download/icon/thoughts/10268-woman-user-circle.png"} alt="" />
               {/* content */}
               <div className='ms-5'>
                <h4 className="font-bold text-2xl text-blue-800 ">{user?.username}</h4>
                <p>{user?.email}</p>
               </div>
                </div>
              </div>
                ))
                :
                <p>Loading.......</p>
              }
            </div>
          }
        </div>
      </div>
      <Footer/>
      {/* toast */}
            <ToastContainer
      position="top-right"
      autoClose={2000}
      theme="colored"
      />
      </>
  )
}

export default AdminCollection
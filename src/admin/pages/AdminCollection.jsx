import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSideBar from '../components/AdminSideBar'

function AdminCollection() {
   const[tab,setTab] = useState(1)

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
              <div className="shadow rounded p-3 mx-4 mb-5 md:mb-0">
  <img src="https://m.media-amazon.com/images/I/81q77Q39nEL.jpg" alt="book" />
  <div className="flex justify-center items-center mt-4 flex-col">
    <h3 className="text-blue-600 font-bold text-lg">Author</h3>
    <h4>title</h4>
    <h4>$ price</h4>
    <div className='grid mt-3 w-full'>
      <button className='bg-green-600  p-2 text-white'>APPROVE</button>
      </div>
  </div>
            </div>
            {/* duplicate book card */}
              <div className="shadow rounded p-3 mx-4 mb-5 md:mb-0">
  <img src="https://m.media-amazon.com/images/I/81q77Q39nEL.jpg" alt="book" />
  <div className="flex justify-center items-center mt-4 flex-col">
    <h3 className="text-blue-600 font-bold text-lg">Author</h3>
    <h4>title</h4>
    <h4>$ price</h4>
    <div className='grid mt-3 w-full'>
      <button className='bg-green-600  p-2 text-white'>APPROVE</button>
      </div>
  </div>
            </div>
            {/* duplicate book card */}
              <div className="shadow rounded p-3 mx-4 mb-5 md:mb-0">
  <img src="https://m.media-amazon.com/images/I/81q77Q39nEL.jpg" alt="book" />
  <div className="flex justify-center items-center mt-4 flex-col">
    <h3 className="text-blue-600 font-bold text-lg">Author</h3>
    <h4>title</h4>
    <h4>$ price</h4>
    <div className='grid mt-3 w-full'>
      <button className='bg-green-600  p-2 text-white'>APPROVE</button>
      </div>
  </div>
            </div>
            {/* duplicate book card */}
              <div className="shadow rounded p-3 mx-4 mb-5 md:mb-0">
  <img src="https://m.media-amazon.com/images/I/81q77Q39nEL.jpg" alt="book" />
  <div className="flex justify-center items-center mt-4 flex-col">
    <h3 className="text-blue-600 font-bold text-lg">Author</h3>
    <h4>title</h4>
    <h4>$ price</h4>
    <div className='grid mt-3 w-full'>
      <button className='bg-green-600  p-2 text-white'>APPROVE</button>
      </div>
  </div>
            </div>
            </div>
          }
          {/* users */}
          {
            tab==2 &&
            <div className='md:grid grid-cols-3 w-full my-5'>
              {/* duplicate users card */}
              <div className="rounded bg-gray-200 m-2 p-3 text-wrap">
                <p className="text-red-600 font-bold">ID:fddfs345455n</p>
                <div className="flex items-center text-wrap mt-3">
               <img width={'100px'} height={'100px'} src="https://freepngimg.com/download/icon/thoughts/10268-woman-user-circle.png" alt="" />
               {/* content */}
               <div className='ms-5'>
                <h4 className="font-bold text-2xl text-blue-800 ">name</h4>
                <p>demo@gmail.com</p>
               </div>
                </div>
              </div>
               <div className="rounded bg-gray-200 m-2 p-3 text-wrap">
                <p className="text-red-600 font-bold">ID:fddfs345455n</p>
                <div className="flex items-center text-wrap mt-3">
               <img width={'100px'} height={'100px'} src="https://freepngimg.com/download/icon/thoughts/10268-woman-user-circle.png" alt="" />
               {/* content */}
               <div className='ms-5'>
                <h4 className="font-bold text-2xl text-blue-800 ">name</h4>
                <p>demo@gmail.com</p>
               </div>
                </div>
              </div>
               <div className="rounded bg-gray-200 m-2 p-3 text-wrap">
                <p className="text-red-600 font-bold">ID:fddfs345455n</p>
                <div className="flex items-center text-wrap mt-3">
               <img width={'100px'} height={'100px'} src="https://freepngimg.com/download/icon/thoughts/10268-woman-user-circle.png" alt="" />
               {/* content */}
               <div className='ms-5'>
                <h4 className="font-bold text-2xl text-blue-800 ">name</h4>
                <p>demo@gmail.com</p>
               </div>
                </div>
              </div>
               <div className="rounded bg-gray-200 m-2 p-3 text-wrap">
                <p className="text-red-600 font-bold">ID:fddfs345455n</p>
                <div className="flex items-center text-wrap mt-3">
               <img width={'100px'} height={'100px'} src="https://freepngimg.com/download/icon/thoughts/10268-woman-user-circle.png" alt="" />
               {/* content */}
               <div className='ms-5'>
                <h4 className="font-bold text-2xl text-blue-800 ">name</h4>
                <p>demo@gmail.com</p>
               </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
      <Footer/>
      </>
  )
}

export default AdminCollection
import React, { useContext, useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../components/Header'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { getAllBooksAPI } from '../../services/allAPI'
import { searchContext } from '../../contextAPI/ShareContext'


function Books() {
 const {searchKey,setSearchKey} = useContext(searchContext)
  const[showCategoryList,setshowCategoryList] = useState(false)
  const[token,setToken] = useState("")
  const[allBooks,setAllBooks] = useState([])

  console.log(allBooks);

  const getAllBooks =  async(token)=>{
    const reqHeader = {
      "Authorization" : `Bearer ${token}`
    }
    const result = await getAllBooksAPI(reqHeader,searchKey)
    if(result.status==200){
      setAllBooks(result.data)
    }else{
      console.log(result);
      
    }
  }
  
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      const userToken = sessionStorage.getItem("token")
      setToken(userToken)
      getAllBooks(userToken)
    }
  },[searchKey])

  
  return (
    <>
    <Header/>
    {/* login-book page */}
   { token? 
    <>
    {/*title and search book */}
    <div className="flex flex-col justify-center items-center my-5">
      {/* title  */}
      <h1 className="text-3xl font-bold my-5">All Books</h1>
      {/* search box */}
      <div className="flex my-5">
        <input value={searchKey} onChange={e=>setSearchKey(e.target.value)} placeholder='Search by title' type="text" className='border p-2 border-gray-400 w-100'/>
        <button className="bg-black p-2 text-white">Search</button>
      </div>
    </div>
     {/* book and filter grid */}
     <div className="md:grid grid-cols-4 md:px-20 p-5 mb-10">
      {/* filter */}
      <div className="col-span-1">
        {/* filter title & bar button(btn in small scrn) */}
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Filter</h1>
          <button onClick={()=>setshowCategoryList(!showCategoryList)} className="text-2xl md:hidden"><FaBars/></button>
        </div>
        {/* filter option */}
        <div className={showCategoryList?"block":"md:block hidden"}>
          {/* category 1 */}
          <div className="mt-3">
            <input type="radio" name="filter" id="all" />
            <label htmlFor="all" className='ms-3'>All</label>
          </div>
          {/* book category */}
          <div className="mt-3">
            <input type="radio" name="filter" id="demo" />
            <label htmlFor="demo" className='ms-3'>Category name</label>
          </div>
        </div>
      </div>
      {/* book row */}
      <div className="col-span-3">
        <div className="md:grid grid-cols-4 mt-5 md:mt-0">
   {/* book card div 1 */}
   {
    allBooks?.length>0 ?
    allBooks?.map(book=>(
      <div key={book?._id} className="shadow rounded p-3 mx-4 mb-5 md:mb-0">
  <img src={book?.imageURL} alt="book" />
  <div className="flex justify-center items-center mt-4 flex-col">
    <h3 className="text-blue-600 font-bold text-lg">{book?.author}</h3>
    <h4>{book?.title.slice(0,9)}...</h4>
    <Link to={`/books/${book?._id}/view`} className="bg-black py-2 px-5 mt-2 text-white">View</Link>
  </div>
</div>
    ))
    :
    <p className="font-bold">Loading....</p>
   }
        </div>
      </div>
     </div>
    </>
  :  
  <div className='w-full h-screen flex justify-center items-center flex-col'>
{/* not login book page */}
<img className='w-50' src="https://cdn.pixabay.com/animation/2023/06/13/15/12/15-12-30-710_512.gif" alt="" />
<p className="text-xl font-bold my-15">Please <Link to={'/login'} className='underline text-blue-500'>Login</Link>to Explore More...</p>
  </div>
  }


     
    <Footer/>
    </>
  )
}

export default Books
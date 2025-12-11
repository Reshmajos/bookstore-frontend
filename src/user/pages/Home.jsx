import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaSearch } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

function Home() {
  const navigate = useNavigate()
  const[searchKey,setSearchKey] = useState("")

const handleSearch = ()=>{
  if(!searchKey){
    toast.warning("Please provide a book title here..")
  }else if(!sessionStorage.getItem("token")){
    toast.warning("Please login to search book...")
    setTimeout(()=>{
      navigate('/login')
    },2500);
  }else if(sessionStorage.getItem("token") && searchKey){
    navigate('/books')
  }else{
    toast.error("something went wrong")
  }
}

  return (
    <div>
      <Header/>
      <div>
        {/* landing part */}
        <div style={{height:'500px'}} className="flex justify-center items-center flex-col bg-[url(/image.jpeg)] bg-cover bg-center text-white">
<div style={{height:'500px',backgroundColor:'rgba(0,0,0,0.5)'}} className=" w-full flex justify-center items-center flex-col ">
<h1 className="text-5xl font-bold mb-2">Wonderfull Gifts</h1>
<p>Gift your family and friends a book</p>
{/* search */}
<div className="mt-9 flex items-center">
  <input onChange={e=>setSearchKey(e.target.value)} type="text" className='bg-white rounded-3xl text-black w-100 placeholder-gray-500 p-2 ' placeholder='Search Books here' />
 <button onClick={handleSearch} className='text-gray-500' style={{marginLeft:'-40px'}} ><FaSearch /></button>
</div>

</div>
        </div>
        {/* new arrival part */}
        <section className='md:px-40 p-5 my-5 flex flex-col justify-center items-center' >
<h1 className="text-3xl font-bold">NEW ARRIVALS</h1>
<h2 className="text-2xl">Explore Our Latest Collection</h2>
{/* books row and col */}
<div className="md:grid grid-cols-4 w-full mt-10">
  {/* duplicate book card div */}
<div className="shadow rounded p-3 mx-4 mb-5 md:mb-0">
  <img src="https://m.media-amazon.com/images/I/81q77Q39nEL.jpg" alt="book" />
  <div className="flex justify-center items-center mt-4 flex-col">
    <h3 className="text-blue-600 font-bold text-lg">Author</h3>
    <h4>title</h4>
    <h4>$ price</h4>
  </div>
</div>
 {/* duplicate book card div */}
<div className="shadow rounded p-3 mx-4">
  <img src="https://m.media-amazon.com/images/I/81NQA1BDlnL.jpg" alt="book" />
  <div className="flex justify-center items-center mt-4 flex-col">
    <h3 className="text-blue-600 font-bold text-lg">Author</h3>
    <h4>title</h4>
    <h4>$ price</h4>
  </div>
</div>
 {/* duplicate book card div */}
<div className="shadow rounded p-3 mx-4">
  <img src="https://m.media-amazon.com/images/I/81Budsu1XBL.jpg" alt="book" />
  <div className="flex justify-center items-center mt-4 flex-col">
    <h3 className="text-blue-600 font-bold text-lg">Author</h3>
    <h4>title</h4>
    <h4>$ price</h4>
  </div>
</div>
 {/* duplicate book card div */}
<div className="shadow rounded p-3 mx-4">
  <img src="https://tse3.mm.bing.net/th/id/OIP.b8hKSSJLk1jRUOe911yl6gHaLH?rs=1&pid=ImgDetMain&o=7&rm=3" alt="book" />
  <div className="flex justify-center items-center mt-4 flex-col">
    <h3 className="text-blue-600 font-bold text-lg">Author</h3>
    <h4>title</h4>
    <h4>$ price</h4>
  </div>
</div>
</div>
{/* all books link */}
<div className="text-center my-20">
  <Link to={'/books'} className='bg-blue-600 p-2 text-white'>Explore more..</Link>
</div>
        </section>
        {/* author */}
        <div className=" md:px-40 p-5 my-5 md:grid grid-cols-2 items-center gap-10">
          {/* author content */}
<div className="text-center">
  <h1 className="text-2xl font-bold">FEATURED AUTHORS</h1>
<h2 className="text-xl">Captivates with every word</h2>
<p className='text-justify mt-9'>Hello, I’m J.K. Rowling, the author of the Harry Potter series. I’ve loved storytelling for as long as I can remember, and the world of Hogwarts began as a small idea that grew into seven books, several films, and a magical universe that continues to evolve.</p>

<p className='text-justify mt-4'>Much of my writing is inspired by my own experiences, challenges, and belief in courage, friendship, and hope. Over the years, I’ve also written The Casual Vacancy and the Cormoran Strike detective novels under the name Robert Galbraith.</p>

<p className='text-justify'>Beyond writing, I’m deeply committed to my charity work, including Lumos, which supports vulnerable children around the world. I’m grateful every day for the readers who have joined me on this journey, and I hope my stories continue to spark imagination for generations to come.”</p>
</div>
{/* author img */}
<div className="flex justify-center items-center p-5">
  <img src="https://images.impresa.pt/expresso/2022-08-31-j-k-rowling.jpg-41f760de/original" alt="" />
</div>
        </div>
        {/* testimony */}
        <section className='md:px-40 p-5 my-5 flex flex-col justify-center items-center' >
<h1 className="text-3xl font-bold">TESTIMONIALS</h1>
<h2 className="text-2xl">See What Others Are Saying</h2>
<div className="my-10 flex justify-center items-center flex-col">
  {/* user img */}
  <img width={'200px'} height={'2oopx'} src="https://tse1.mm.bing.net/th/id/OIP.5eBD-xb0azZAprcyfCEfPQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" style={{borderRadius:"50%"}} alt="" />
  {/* feedback */}
  <p className='mt-4'>Maria Ann</p>
  <p className='text-justify mt-4'><span className='font-bold me-2'>“I really liked using this bookstore website.</span> 
    The categories are well-organized, the search feature is fast, and each book page gives clear information. The design feels clean and modern, and browsing is comfortable. It’s a great place for regular readers.”</p>
</div>

        </section>
      </div>
      <Footer/>
       {/* toast */}
            <ToastContainer
      position="top-right"
      autoClose={2000}
      theme="colored"
      />
      </div>
  )
}

export default Home
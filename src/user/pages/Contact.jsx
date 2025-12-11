import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaLocationDot } from 'react-icons/fa6'
import { FaEnvelope, FaPaperPlane, FaPhone } from 'react-icons/fa'

function Contact() {
  return (
    <>
    <Header/>
    <div className="md:px-40 p-5">
      <div className="text-center my-5">
        <h1 className="text-3xl font-bold mb-5">Contact Us</h1>
        <p>Have questions, need help finding a book, or want to share your feedback?
We’re here to assist you!
Reach out to us for inquiries, recommendations, or support — our team at the bookstore is always happy to help you discover your next great read.
</p>
      </div>
      <div className="md:flex justify-evenly items-center my-10">
        <div className="flex items-center w-75 md:mt-0 mt-5">
          <div style={{width:'50px',height:'50px',borderRadius:"50%"}} className="flex justify-center items-center bg-gray-200 me-5">
            <FaLocationDot/>
          </div>
          <p>123 Main Street,Apt 4B,
            Anytown,CA 9123
          </p>
        </div>
         <div className="flex items-center w-75 md:mt-0 mt-5">
          <div style={{width:'50px',height:'50px',borderRadius:"50%"}} className="flex justify-center items-center bg-gray-200 me-5">
            <FaPhone/>
          </div>
          <p>+91 9834523568
          </p>
        </div>
         <div className="flex items-center w-75 md:mt-0 mt-5">
          <div style={{width:'50px',height:'50px',borderRadius:"50%"}} className="flex justify-center items-center bg-gray-200 me-5">
            <FaEnvelope/>
          </div>
          <p>contact@bookstore.com </p>
        </div>
      </div>
      <div className="md:grid grid-cols-2 gap-10 md:px-30 my-5 md:mt-0">
        {/* form */}
        <div className="bg-gray-200 p-5">
          <h1 className="text-xl text-center">Send me Message</h1>
          <div className="my-3">
            <input placeholder='Name' className='bg-white p-2 w-full rounded' type="text" />
          </div>
          <div className="my-3">
            <input placeholder='E-mail' className='bg-white p-2 w-full rounded' type="text" />
          </div>
          <div className="my-3">
            <textarea placeholder='Message' className='bg-white p-2 w-full rounded' type="text" />
          </div>
          <div className="my-3 ">
            <button className='bg-black p-2 w-full text-white flex items-center justify-center'>Send <FaPaperPlane className='ms-2'/></button>
          </div>
        </div>
        {/* map */}
        <div className="w-full mt-5 md:mt-0">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15732.617581643208!2d76.52072959527254!3d9.667846196738429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07d49025f58f2b%3A0xec9ca10688d35648!2sAthirampuzha%2C%20Kerala!5e0!3m2!1sen!2sin!4v1764320445240!5m2!1sen!2sin" width={'100%'} height={'400px'} style={{border:'0'}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      </div>
    <Footer/>
    </>
  )
}

export default Contact
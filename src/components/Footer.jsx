import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
function Footer() {
  return (
    <>
    <div className="md:grid grid-cols-3 bg-dark text-white md:gap-9 p-10 bg-black">
<div>
  <h2 className='font-bold'>ABOUT US</h2>
  <p className='text-justify mt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur eaque a culpa officiis facilis inventore, dolore, vel ipsa sapiente quibusdam minima? Possimus asperiores fugit consequatur quaerat quo perspiciatis enim expedita?
  Tempora, earum eligendi sit ipsum, iure cumque accusam!</p>
</div>

<div className='md:ms-40 mt-5 md:mt-0'>
  <h2 className='font-bold'>NEWS LETTER</h2>
  <h3 className='my-5'>Stay Updated with our latest trends</h3>
 <div className="flex">
  <input className=' p-2 bg-white placeholder-gray-500 text-black' type="text" placeholder='Email ID' />
  <button className='bg-yellow-500 p-2'><FaArrowRight /></button>
 </div>
</div>

<div className='md:ms-40 mt-5 md:mt-0'>
 <h2 className='font-bold'>FOLLOW US</h2>
 <h3 className='my-4'>Let us be social</h3>
 <div className='flex'>
<FaInstagram />
<FaTwitter className='mx-2' />
<FaFacebook />
 </div>

</div>

    </div>
    </>
  )
}

export default Footer
import React from 'react'

function BookStatus() {
  return (
    <div className='p-10 my-20 mx-5 shadow rounded'>
{/* book div duplicate */}
<div className="bg-gray-200 p-5 rounded">
    <div className="md:grid grid-cols-[3fr_1fr]">
        <div>
            <h2 className="text-2xl">Title</h2>
            <h3 className="text-xl">Author</h3>
            <h4 className="text-lg text-red-500">$ 400</h4>
            <p className="text-justify">Abstract</p>
            <div className="flex mt-5">
                {/* pending */}
                <img width={'120px'} height={'120px'} src="https://psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" alt="" />
                {/* approved */}
                <img width={'80px'} height={'80px'} src="https://static.vecteezy.com/system/resources/previews/024/382/936/large_2x/approved-sign-with-checkmark-symbol-icon-label-stamp-green-round-design-transparent-background-free-png.png" alt="" />
                {/* sold */}
                <img width={'80px'} height={'80px'} src="https://www.onlygfx.com/wp-content/uploads/2017/12/sold-stamp-1.png" alt="" />
            </div>
        </div>
        <div className='px-4 mt-4 md:mt-0'>
            <img className='w-full' src="https://m.media-amazon.com/images/I/81q77Q39nEL.jpg" alt="" />
            <div className='flex justify-end'>
                <button className="p-2 bg-red-600 text-white mt-5">DELETE</button>
                </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default BookStatus
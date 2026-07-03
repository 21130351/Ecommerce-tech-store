import React from 'react'

const DealCard = () => {
  return (
    <div className='w-[13rem] cursor-pointer'>
        <img 
        className='border-x-[7px] border-t-[7px] border-red-600 w-full 
        h-[12rem] object-cover object-top'
        src="https://images.pexels.com/photos/7054521/pexels-photo-7054521.jpeg" 
        alt="" />
        <div className='border-4 border-black bg-black text-white p-2 text-center'>
            <p className='text-lg font-semibold'>Laptop</p>
            <p className='text-2xl font-bold'>20% OFF</p>
            <p className='text-balance text-lg'>Shop Now</p>
        </div>
    </div>
  )
}

export default DealCard
import React from 'react'

const CategoryGrid = () => {
  return (
    <div className='grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20'>

        <div className='col-span-3 row-span-12 overflow-hidden text-white'>
            <img 
            className='w-full h-full object-cover object-top rounded-md'
            src="https://images.pexels.com/photos/8533592/pexels-photo-8533592.jpeg" 
            alt="" />
        </div>
         <div className='col-span-2 row-span-6 overflow-hidden text-white'>
            <img 
            className='w-full h-full object-cover object-top rounded-md'
            src="https://images.pexels.com/photos/37113175/pexels-photo-37113175.jpeg" 
            alt="" />
        </div>
         <div className='col-span-4 row-span-6 overflow-hidden text-white'>
            <img 
            className='w-full h-full object-cover object-top rounded-md'
            src="https://images.pexels.com/photos/12512639/pexels-photo-12512639.jpeg" 
            alt="" />
        </div>
        <div className='col-span-3 row-span-12 overflow-hidden text-white'>
            <img
            className='w-full h-full object-cover object-top rounded-md' 
            src="https://images.pexels.com/photos/17112932/pexels-photo-17112932.jpeg" 
            alt="" />
        </div>
        <div className='col-span-4 row-span-6 overflow-hidden text-white'>
            <img
             className='w-full h-full object-cover object-top rounded-md' 
            src="https://images.pexels.com/photos/29711663/pexels-photo-29711663.jpeg" 
            alt="" />
        </div>
        <div className='col-span-2 row-span-6 overflow-hidden text-white'>
            <img
             className='w-full h-full object-cover object-top rounded-md' 
            src="https://images.pexels.com/photos/6913135/pexels-photo-6913135.jpeg" 
            alt="" />
        </div>

    </div>
  )
}

export default CategoryGrid
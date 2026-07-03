import React from 'react'
import "./ShopByCategory.css"

/**card hinh tron  */
const ShopByCategoryCard = () => {
  return (
    <div className='flex gap-3 flex-col justify-center items-center group 
    cursor-pointer'>

        <div className='custome-border w-[150px] h-[150px] lg:w-[249px] lg:h-[249px] 
        rounded-full bg-primary-color'>
            <img
             className='rounded-full group-hover:scale-95 transition-transform
             transform-duration-700 object-cover object-top h-full w-full'
            src="https://images.pexels.com/photos/20828487/pexels-photo-20828487.jpeg" 
            alt="" />
        </div>
        <h1>MacBook</h1>

    </div>
  )
}

export default ShopByCategoryCard
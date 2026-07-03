import React from 'react'

const SimilarProductCard = () => {
  return (
    <div><div className='group px-4 relative'>
      <div className='card'

      
      >
 
        <img 
        className='card-media object-top'
        src={"https://cdn.hstatic.net/products/1000296652/lt221-15_00e4d065e5e249cba56294e6ca6e6ffb_1024x1024.png"}
        alt=""

        />

      </div>
      <div className='details pt-3 space-y-1 group-hover-effect rounded-md'>
        <div className='name'>
          <h1>Laptop</h1>
          <p>Laptop HP</p> 

        </div>
        <div className='price flex items-center gap-3'>
          <span className='font-sans text-gray-800'>
            400₫
          </span>
          <span className='thin-line-through text-gray-400'>
            900₫
          </span>
          <span className='text-primary-color font-semibold'>
            60%
          </span>

        </div>
      </div>
    </div></div>
  )
}

export default SimilarProductCard
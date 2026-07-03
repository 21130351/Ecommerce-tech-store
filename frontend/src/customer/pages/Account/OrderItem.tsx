import { ElectricBolt } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

const OrderItem = () => {
  return (
    <div className='text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer'>

      <div className='flex items-center gap-5'>

        <div>
          <Avatar sizes='small' sx={{bgcolor:red[500]}}>
            <ElectricBolt/>
          </Avatar>
        </div>

        <div>
          <h1 className='font-bold text-primary-color'>PENDING</h1>
          <p>Arriving By Fri, Oct 4</p>
        </div>

      </div>

      <div className='p-5 bg-red-50 flex gap-3 '>
        <div>
          <img 
          className='w-[70px]'
          src="https://cdn.hstatic.net/products/1000296652/lt221-17_7f2ab4c864174d799ba63c02c53ae1e6_1024x1024.png" 
          alt="" />
        </div>
        <div className='w-full space-y-2'>
          <h1 className='font-bold'>Laptop</h1>
          <p>	Laptop Gaming Intel Core i7-12700H RTX 3050 Ti | 
            Laptop Dell G16 7620 – Hiệu năng gaming mạnh mẽ, thiết kế đậm chất Alienware</p>
            <p>
              <strong>NPP : </strong>
              Like New
            </p>
        </div>

      </div>

    </div>
  )
}

export default OrderItem
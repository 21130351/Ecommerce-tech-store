import { Divider } from '@mui/material'
import React from 'react'

const PricingCard = () => {
  return (
    <>
    <div className='space-y-3 p-5'>
        <div className='flex justify-between items-center'>
            <span>Subtotal</span>
            <span>800.000đ</span>

        </div>
        <div className='flex justify-between items-center'>
            <span>Discount</span>
            <span>600.000đ</span>

        </div>
        <div className='flex justify-between items-center'>
            <span>Shipping</span>
            <span>8đ</span>

        </div>
        <div className='flex justify-between items-center'>
            <span>Plateform fee</span>
            <span>Free</span>

        </div>

       
       
    </div>
     <Divider/>
     <div className='flex justify-between items-center p-5 text-primary-color'>
            <span>Total</span>
            <span>800.000đ</span>

        </div>
    </>
  )
}

export default PricingCard
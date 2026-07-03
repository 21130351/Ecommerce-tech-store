import { Close, Remove } from '@mui/icons-material'
import { Button, Divider, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React from 'react'

const CartItem = () => {

    const handleUpdateQuantity=() => {
        //update cart item quantity
    }
  return (
    <div className='border rounded-md relative'>

        <div className='p-5 flex gap-3'>

            <div>
                <img 
                className='w-[90px] rounded-md'
                src="https://cdn.hstatic.net/products/1000296652/lt221-15_00e4d065e5e249cba56294e6ca6e6ffb_1024x1024.png" 
                alt="" />
            </div>

            <div className='space-y-2'>

                <h1 className='font-semibold text-lg'>Laptop HP</h1>
                <p className='text-gray-600 font-medium text-sm'>Laptop Dell G16 7620</p>
                   <p className='text-gray-400 text-xs'> <strong> Sold by: </strong>Laptop Gaming Intel Core i7-12700H RTX 3050 Ti</p>
                   <p className='text-sm'>7 days replacement available</p>
                   <p className='text-sm text-gray-500'> <strong> quantity : </strong> 5 </p>

            </div>

           

        </div>

         <Divider/>

           <div className='flex justify-between items-center'>
             <div className='px-5 py-2 flex justify-between items-center'>
                
                <div className="flex items-center gap-2 w-[140px] justify-between">
                     <Button onClick={handleUpdateQuantity} disabled={true}>
                            <Remove/>
                        </Button>
                        <span>
                            {5}
                        </span>
                        <Button  onClick={handleUpdateQuantity}>
                            <AddIcon/>
                        </Button>
                </div>

            </div>

            <div className='pr-5'>
                <p className='text-gray-700 font-medium'>9.000.000₫</p>
            </div>
           </div>

           <div className='absolute top-1 right-1'>
            <IconButton color='primary'>
                <Close/>

            </IconButton>

           </div>
        

    </div>
  )
}

export default CartItem
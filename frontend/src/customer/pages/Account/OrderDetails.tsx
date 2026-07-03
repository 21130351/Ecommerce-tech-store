import { Box, Button, Divider } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import OrderStepper from './OrderStepper';
import Payments from '@mui/icons-material/Payments';


const OrderDetails = () => {
    const navigate=useNavigate()
  return (
    <Box className='space-y-5'>

        <section className='flex flex-col gap-5 justify-center items-center'>
            <img 
            className='w-[100px]'
            src="https://cdn.hstatic.net/products/1000296652/lt221-17_7f2ab4c864174d799ba63c02c53ae1e6_1024x1024.png" 
            alt="" />
            <div className='text-sm space-y-1 text-center'>
                <h1 className='font-bold'>{"Laptop"}
                </h1>
                <p>Laptop Gaming Intel Core i7-12700H RTX 3050 Ti | Laptop Dell G16 7620 – 
                    Hiệu năng gaming mạnh mẽ, thiết kế đậm chất Alienware</p>
                <p><strong>NPP :</strong>Like New</p>
            </div>
            <div>
                    <Button onClick={() => navigate(`/reviews/${5}/create`)}>Write Reviews</Button>
                </div>
        </section>


        <section className='border p-5'>
            <OrderStepper orderStatus={"SHIPPED"} />
        </section>
        <div className='border p-5'>
            <h1 className='font-bold pb-3'> Delivery Address</h1>
            <div className='text-sm space-y-2'>
                <div className='flex gap-5 font-medium'>
                    <p> {"John"}</p>
                    <Divider flexItem orientation='vertical' />
                    <p>{123456789}</p>
                </div>

                <p>
                    Nong Lam University, Ho Chi Minh City, Thu Duc District
                </p>

            </div>
        </div>

        <div className='border space-y-4'>

            <div className='flex justify-between text-sm pt-5 px-5'>
                <div className='space-y-1'>
                    <p className='font-bold'>Total Item Price </p>
                    <p>You Saved <span className='text-red-500 font-medium text-xs'>đ{699}.000</span>
                    on this item</p>
                </div>

                <p className='font-medium'>đ {799}.000</p>
            </div>

            <div className='px-5'>
                <div className='bg-red-50 px-5 py-2 text-xs font-medium flex items-center gap-3'>
                    <Payments />
                    <p> Pay on Delivery</p>


                </div>
            </div>

            <Divider/>
            <div className='px-5 pb-5'>
                <p className='text-xs'><strong>Sold by : </strong>{"Laptop HP"}</p>
            </div>

            <div className='p-10'>
                <Button
                disabled={false}
                // onClick={handleCancelOrder}
                color='error' sx={{ py: "0.7rem" }} className='' variant='outlined' fullWidth>
                {false? "order canceled":"Cancel Order"}
                </Button>
            </div>
        </div> 
    </Box>
  )
}

export default OrderDetails
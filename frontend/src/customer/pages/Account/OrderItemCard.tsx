import { ElectricBolt } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'
import { Order, OrderItem } from '../../../types/OrderTypes'
import { useNavigate } from 'react-router-dom'

const OrderItemCard = ({item,order}:{item:OrderItem, order:Order}) => {
  const navigate=useNavigate()
  return (
    //xu ly khi click vao anh san pham trong orders cua account
    <div onClick={()=>navigate(`/account/order/${order.id}/${item.id}`)} 
    className='text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer'>

      <div className='flex items-center gap-5'>

        <div>
          <Avatar sizes='small' sx={{bgcolor:red[500]}}>
            <ElectricBolt/>
          </Avatar>
        </div>

        <div>
          <h1 className='font-bold text-primary-color'>PENDING</h1>
          <p>Arriving By {order.deliverDate}</p>
        </div>

      </div>

      <div className='p-5 bg-red-50 flex gap-3 '>
        <div>
          <img 
          className='w-[70px]'
          src={item.product.images[0]} 
          alt="" />
        </div>
        <div className='w-full space-y-2'>
          <h1 className='font-bold'>{item.product.seller?.businessDetails.businessName}</h1>
          <p>{item.product.title}</p>
            <p>
              <strong>NPP : </strong>
              Like New
            </p>
        </div>

      </div>

    </div>
  )
}

export default OrderItemCard
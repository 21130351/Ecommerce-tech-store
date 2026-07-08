import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch } from '../../State/Store'
import { paymentSuccess } from '../../State/customer/OrderSlice'

const PaymentSuccess = () => {
    const navigate=useNavigate()  // Công cụ chuyển hướng trang
    const dispatch=useAppDispatch();  // Công cụ giao việc/gọi API của Redux
    const location=useLocation();   // Công cụ lấy thông tin phía sau dấu "?" trên URL (Query Params)
    const {orderId}=useParams()    // Lấy mã ID đơn hàng dạng động từ đường dẫn (Path Params)
    const getQueryParam=(key:string)=> {
        const query=new URLSearchParams(location.search)
        return query.get(key)
    }

    useEffect(() => {
        // 1. Lấy mã giao dịch VNPay và mã liên kết thanh toán từ URL do VNPay trả về sau khi quẹt thẻ xong
        const paymentId=getQueryParam("vnpay_payment_id")
        const paymentLinkId=getQueryParam("vnpay_payment_link_id")
        // 2. Gửi lệnh thanh toán thành công lên Server kèm theo JWT Token bảo mật của người dùng
        dispatch(paymentSuccess({jwt:localStorage.getItem("jwt") || "", 
            paymentId:paymentId ||"",
            paymentLinkId:paymentLinkId || ""}))
    },[orderId])
    return (
        <div className='min-h-[90vh] flex justify-center items-center'>
            {/* Hộp thông báo màu xanh chủ đạo nổi bật giữa màn hình */}
            <div className='bg-primary-color text-white p-8 w-[90%] lg:w-[25%] border 
            rounded-md h-[40vh] flex flex-col gap-7 items-center justify-center'>

                <h1 className='text-3xl font-semibold'>Congratulations !</h1>
                <h1 className='text-2xl font-semibold'>Your order get success</h1>

                <div>
                    <Button 
                    color='secondary'
                    variant='contained'
                    onClick={(()=> navigate("/"))}>Shopping More</Button>
                </div>

            </div>

        </div>
    )
}

export default PaymentSuccess
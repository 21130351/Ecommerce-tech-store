import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { thunk } from "redux-thunk";
import sellerSlice from "./seller/sellerSlice";
import sellerProductSlice from "./seller/sellerProductSlice";
import ProductSlice from "./customer/ProductSlice";
import authSlice from "./AuthSlice";
import cartSlice from "./customer/CartSlice";
import orderSlice from "./customer/OrderSlice";
import wishlistSlice from "./customer/WishlistSlice";
import sellerOrderSlice from "./seller/sellerOrderSlice";
import transactionSlice from "./seller/transactionSlice";
import adminSlice from "./admin/adminSlice";
import customerSlice from "./customer/customerSlice";
import dealSlice from "./admin/DealSlice";

// 1. GOM TẤT CẢ REDUCER (Quản lý các mảng dữ liệu riêng lẻ vào đây)
const rootReducer=combineReducers({ // Ví dụ sau này: user: userReducer, cart: cartReducer
     seller: sellerSlice,
     sellerProduct: sellerProductSlice,
     product: ProductSlice,
     auth: authSlice,
     cart:cartSlice,
     order:orderSlice,
     wishlist: wishlistSlice,
     customer: customerSlice,

     
     //seller slice
     sellerOrder:sellerOrderSlice,
     transactions:transactionSlice,

     //admin
     admin: adminSlice,
     deal: dealSlice,

});
// 2. TẠO STORE CHÍNH (Kho lưu trữ trạng thái trung tâm của toàn ứng dụng)
const store=configureStore({
    reducer:rootReducer, // Nạp rootReducer đã gom ở trên vào store
   // middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(thunk) // Giữ middleware mặc định + nạp thêm Thunk để gọi API
})

// 3. ĐỊNH NGHĨA BIẾN KIỂU (Dành riêng cho TypeScript)
export type AppDispatch=typeof store.dispatch; // Kiểu dữ liệu của hàm gửi hành động (dispatch)
export type RootState=ReturnType<typeof rootReducer>; // Kiểu dữ liệu của hàm gửi hành động (dispatch)

// 4. CUSTOM HOOKS (Dùng ở các Component để gọi data, có sẵn gợi ý code từ TypeScript)
export const useAppDispatch=()=>useDispatch<AppDispatch>(); // Hook để gửi hành động (đã sửa lỗi cú pháp thêm cặp ngoặc tròn)
export const useAppSelector: TypedUseSelectorHook<RootState>=useSelector; // Hook để lấy dữ liệu từ kho ra dùng
export default store;
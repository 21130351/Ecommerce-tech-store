import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/Api";

// 2. Đăng nhập hệ thống
export const sellerLogin=createAsyncThunk<any, any>("/auth/signin",
    async(loginRequest, {rejectWithValue})=>{
        try {
            // 1. Gửi thông tin đăng nhập (email, password) lên server của người bán
            const response=await api.post("/sellers/login", loginRequest)
            console.log("login otp ", response.data)  // Trả kết quả về cho Redux Store (thường là để lưu token đăng nhập)
            // 2. Lấy mã JWT (token) từ dữ liệu server trả về
            const jwt=response.data.jwt;
            // 3. Lưu token vào bộ nhớ trình duyệt để duy trì trạng thái đăng nhập
            localStorage.setItem("jwt", jwt);
        } catch (error) {
            console.log("error - - -", error); // Trả lỗi về Redux Store để thông báo cho người dùng (ví dụ: sai mật khẩu)
        }
    }
)
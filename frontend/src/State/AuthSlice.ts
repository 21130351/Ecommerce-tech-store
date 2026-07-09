import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../config/Api";
import { User } from "../types/UserTypes";

// 1. Gửi mã OTP về Email (Dùng khi Đăng nhập không mật khẩu hoặc Đăng ký)
export const sendLoginSignupOtp=createAsyncThunk("/auth/sendLoginSignupOtp",
    async({email}:{email:string}, {rejectWithValue})=>{
        try {
            const response=await api.post("/auth/sent/login-signup-otp",{email})
            console.log("login otp ", response.data) // Trả kết quả về cho Redux Store để lưu trạng thái nếu cần
        } catch (error) {
            console.log("error - - -", error); 
        }
    }
)
// 2. Đăng nhập hệ thống
export const signin=createAsyncThunk<any, any>("/auth/signin",
    async(loginRequest, {rejectWithValue})=>{
        try {
            const response=await api.post("/auth/signing", loginRequest)
            console.log("login otp ", response.data)  // Trả kết quả về cho Redux Store (thường là để lưu token đăng nhập)
            localStorage.setItem("jwt", response.data.jwt)
            return response.data.jwt;
        } catch (error) {
            console.log("error - - -", error); // Trả lỗi về Redux Store để thông báo cho người dùng (ví dụ: sai mật khẩu)
        }
    }
)

export const signup=createAsyncThunk<any, any>("/auth/signup",
    async(signupRequest, {rejectWithValue})=>{
        try {
            const response=await api.post("/auth/signup", signupRequest)
            console.log("login otp ", response.data)  // Trả kết quả về cho Redux Store (thường là để lưu token đăng ky)
            localStorage.setItem("jwt", response.data.jwt)
            return response.data.jwt;
        } catch (error) {
            console.log("error - - -", error); // Trả lỗi về Redux Store để thông báo cho người dùng (ví dụ: sai mật khẩu)
        }
    }
)

export const fetchUserProfile=createAsyncThunk<any, any>("/auth/fetchUserProfile",
    async({jwt}, {rejectWithValue})=>{
        try {
            const response=await api.get("/api/users/profile", {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            console.log("user profile ", response.data)  
            return response.data;
        } catch (error) {
            console.log("error - - -", error); 
        }
    }
)

export const logout=createAsyncThunk<any, any>("/auth/logout",
    async(navigate, {rejectWithValue}) => {
        try {
            localStorage.clear()
            console.log("logout success")
            navigate("/")
        } catch (error) {
            console.log("error - - -", error);
        }
    }
)

interface AuthState{
    jwt:string | null,
    optSent:boolean,
    isLoggedIn:boolean,
    user: User | null,
    loading: boolean,
}

const initialState:AuthState={
    jwt:null,
    optSent:false,
    isLoggedIn:false,
    user:null,
    loading:false,
}

const authSlice=createSlice({
    name: "auth",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{

        builder.addCase(sendLoginSignupOtp.pending, (state) => {
            state.loading=true
        })
         builder.addCase(sendLoginSignupOtp.fulfilled, (state) => {
            state.loading=false
            state.optSent=true
        })
         builder.addCase(sendLoginSignupOtp.rejected, (state) => {
            state.loading=false
        })
        builder.addCase(signin.fulfilled,(state, action)=> {
            state.jwt=action.payload
            state.isLoggedIn=true
        })
        builder.addCase(signup.fulfilled,(state, action)=>{
            state.jwt=action.payload
            state.isLoggedIn=true
        })
        builder.addCase(fetchUserProfile.fulfilled, (state, action)=> {
            state.user=action.payload
            state.isLoggedIn=true
        })
        builder.addCase(logout.fulfilled, (state)=> {
            state.jwt=null
            state.isLoggedIn=false
            state.user=null
        })

    }

})

export default authSlice.reducer;
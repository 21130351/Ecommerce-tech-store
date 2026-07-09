import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
// TẠO NHIỆM VỤ: Gọi API lấy thông tin cá nhân của Người bán
export const fetchSellerProfile=createAsyncThunk("/sellers/fetchSellerProfile",
    async(jwt : string, {rejectWithValue})=>{
        try {
            // Dùng hộp quay số 'api' gọi đến đường dẫn '/sellers/profile'
            const response=await api.get("/sellers/profile", {
                headers: {
                    Authorization: `Bearer ${jwt}`, // Trình mã Token (chìa khóa) để Server xác thực danh tính
                },
            })
            console.log("fetch seller profile ", response.data) // trả dữ liệu về để cất vào Két sắt (Store)
            return response.data;
        } catch (error) {
            console.log("error - - -", error); // Nếu lỗi (v dụ: Token hết hạn), báo ngay cho Redux biết nhiệm vụ Thất bại
        }
    }
)
// 1. Khai báo kiểu dữ liệu cho kho chứa (State) của Seller
interface SellerState{
    sellers: any[],  // Danh sách người bán
    selectedSeller: any, // Người bán đang được chọn xem chi tiết
    profile: any,  // Hồ sơ của người bán hiện tại
    report: any,  // Báo cáo doanh thu/bán hàng
    loading: boolean,  // Trạng thái đang tải dữ liệu (true/false)
    error: any, // Lưu thông tin lỗi nếu gọi API thất bại
}

// 2. Giá trị mặc định ban đầu của kho chứa
const initialState:SellerState={
    sellers:[],
    selectedSeller:null,
    profile:null,
    report:null,
    loading:false,
    error:null,
}
// 3. Tạo Slice quản lý trạng thái của Seller
const sellerSlice=createSlice({
    name:"sellers",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{ // Nơi lắng nghe và xử lý kết quả từ các hàm gọi API (AsyncThunk)
       builder
       // Trạng thái 1: Đang gọi API lấy hồ sơ seller
       .addCase(fetchSellerProfile.pending,(state)=>{
        state.loading=true; // Bật màn hình chờ
       }) // Trạng thái 2: Gọi API thành công, nhận được dữ liệu
       .addCase(fetchSellerProfile.fulfilled,(state,action)=>{
           state.loading=false; // Tắt màn hình chờ
           state.profile=action.payload; // Lưu dữ liệu hồ sơ vào kho
       })  // Trạng thái 3: Gọi API thất bại, xảy ra lỗi
       .addCase(fetchSellerProfile.rejected,(state,action)=>{
           state.loading=false; // Tắt màn hình chờ
           state.error=action.payload; // Lưu lỗi để hiển thị ra UI
    })


}
})



export default sellerSlice.reducer;
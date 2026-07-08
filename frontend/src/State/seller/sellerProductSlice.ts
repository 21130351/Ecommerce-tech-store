import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import { Product } from "../../types/ProductTypes";
import { error } from "console";

// 1. Hành động: Lấy danh sách sản phẩm của Người bán
// Đầu ra (thành công): Trả về một mảng các sản phẩm chuẩn kiểu dữ liệu Product[]
// Đầu vào: Cần truyền vào mã xác thực jwt (chuỗi string)
export const fetchSellerProducts=createAsyncThunk<Product[], any>(
    "sellerProduct/fetchSellerProducts",

    async(jwt, {rejectWithValue}) =>{
        try {
            const response=await api.get(`/sellers/products`,{ // Gửi yêu cầu GET để lấy sản phẩm kèm theo thẻ bài mã hóa Bearer Token
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            })
            const data=response.data;  // Dữ liệu danh sách sản phẩm từ server trả về
            console.log("seller products", data)
            return data;      // Dữ liệu danh sách sản phẩm từ server trả về
        } catch (error) {
            console.log("error - - -", error);
            throw error;
        }
    })
// 2. Hành động: Tạo sản phẩm mới
// Đầu ra (thành công): Trả về đúng 1 đối tượng Product vừa được tạo thành công
// Đầu vào: Nhận một gói đối tượng gồm { request: thông tin sản phẩm, jwt: mã xác thực }
    export const createProduct=createAsyncThunk<Product,{request:any, jwt:string | null}>(
        "sellerProduct/createProduct",
        async(args, {rejectWithValue}) =>{
            const {request, jwt} = args;
            try {
                const response=await api.post(`/sellers/products`, request, {  // Gửi yêu cầu POST chứa dữ liệu sản phẩm mới (request) và đính kèm thẻ bài mã hóa jwt
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                })
                console.log("product created", response.data)
                return response.data;  // Trả về thông tin sản phẩm mới vừa tạo để thêm vào giao diện luôn
            } catch (error) {
                console.log("error - - -", error);
                // throw error;
            }
        }
    )

    interface SellerProductState{
        products: Product[];
        loading: boolean;
        error: string | null | undefined;
    }

    const initialState: SellerProductState ={
        products: [],
        loading: false,
        error: null,
    }

    const sellerProductSlice=createSlice({
        name: "sellerProduct",
        initialState,
        reducers:{},
       extraReducers: (builder) => { //xu ly ds san pham
            builder.addCase(fetchSellerProducts.pending, (state) =>{
                state.loading=true;
            })
            builder.addCase(fetchSellerProducts.fulfilled,(state, action)=>{
                state.loading=false;
                state.products=action.payload;
            })
            builder.addCase(fetchSellerProducts.rejected,(state, action)=>{
                state.loading=false;
                state.error=action.error.message;
            })

            builder.addCase(createProduct.pending, (state) =>{
                state.loading=true;
            })
            builder.addCase(createProduct.fulfilled,(state, action)=>{
                state.loading=false;
                state.products.push(action.payload) //push san pham da them len thang Ui
            })
            builder.addCase(createProduct.rejected,(state, action)=>{
                state.loading=false;
                state.error=action.error.message;
            })
            
        }
    })
    export default sellerProductSlice.reducer;
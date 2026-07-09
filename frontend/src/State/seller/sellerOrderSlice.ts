import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order, OrderStatus } from "../../types/OrderTypes";
import { api } from "../../config/Api";


/**
 * Lấy danh sách đơn hàng của người bán
 * Đầu vào (arg): jwt (chuỗi token xác thực)
 * Đầu ra thành công: Mảng các đơn hàng (Order[])
 */
//thunks for async actions
export const fetchSellerOrders = createAsyncThunk<Order[], string>(
    'sellerOrders/fetchSellerOrders',
    async (jwt, {rejectWithValue}) => {
        try {
            const response = await api.get(`/api/seller/orders`, {
                headers: {Authorization: `Bearer ${jwt}`},
            });

            console.log("fetch seller orders", response.data)
            return response.data;
        } catch (error: any) {
            console.log("error",error.response)
            return rejectWithValue(error.response.data)
        }
    }
);
/**
 * Cập nhật trạng thái của một đơn hàng
 * Đầu vào (arg): Object chứa jwt, orderId và trạng thái mới (orderStatus)
 * Đầu ra thành công: Đối tượng đơn hàng sau khi cập nhật (Order)
 */
export const updateOrderStatus = createAsyncThunk<Order,
{jwt: string,
    orderId: number,
    orderStatus: OrderStatus
}>(
    'sellerOrders/updateOrderStatus',
    async ({ jwt, orderId, orderStatus}, {rejectWithValue}) => {
        try {
            const response = await api.patch(`/api/seller/orders/${orderId}/status/${orderStatus}`, 
                null, {
                headers: {Authorization: `Bearer ${jwt}`},
            });
            console.log("order status updated", response.data)
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);
/**
 * Xóa một đơn hàng
 * Đầu vào (arg): Object chứa jwt và orderId
 * Đầu ra thành công: Bất kỳ dữ liệu nào server trả về (any)
 */
export const deleteOrder = createAsyncThunk<any, {jwt: string, orderId:number}>(
    'sellerOrders/deleteOrder',
    async ({jwt, orderId}, {rejectWithValue}) => {
        try {
            const response = await api.delete(`/api/seller/orders/${orderId}/delete`,{
                headers: {Authorization: `Bearer ${jwt}`},
            });
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
            
        }
    }
);

// Khai báo kiểu dữ liệu cho State quản lý đơn hàng của Seller
interface SellerOrderState {
    orders: Order[];
    loading: boolean;
    error: string | null;
}
// Khởi tạo giá trị mặc định ban đầu cho State
const initialState: SellerOrderState = {
    orders: [],
    loading: false,
    error: null,
};


const sellerOrderSlice = createSlice({
    name: 'sellerOrders',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchSellerOrders.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchSellerOrders.fulfilled, (state, action: PayloadAction<Order[]>) =>{
            state.loading = false;
            state.orders = action.payload;
        })
        .addCase(fetchSellerOrders.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
        .addCase(updateOrderStatus.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(updateOrderStatus.fulfilled, (state, action: PayloadAction<Order>) => {
            state.loading = false;
            const index = state.orders.findIndex(order => order.id === action.payload.id);
            if (index !== -1) {
                state.orders[index] = action.payload;
            }
        })
        .addCase(updateOrderStatus.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
        .addCase(deleteOrder.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(deleteOrder.fulfilled, (state, action) => {
            state.loading = false;
            state.orders = state.orders.filter(order => order.id !== action.meta.arg.orderId);
        })
        .addCase(deleteOrder.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    },
});

export default sellerOrderSlice.reducer;
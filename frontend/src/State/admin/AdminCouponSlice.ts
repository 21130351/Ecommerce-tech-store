import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Coupon, CouponState } from "../../types/CouponTypes";
import { api } from "../../config/Api";

const API_URL = "/api/coupons";

export const createCoupon = createAsyncThunk<
Coupon,
{coupon: any; jwt: string},
{rejectValue: string}
>("coupon/createCoupon", async ({ coupon, jwt} , {rejectWithValue}) => {
    try {
        const response = await api.post(`${API_URL}/admin/create`, coupon,{
            headers: {Authorization: `Bearer ${jwt}`},
        });
        console.log("created coupon", response.data)
        return response.data;
    } catch (error: any) {
        return rejectWithValue(error.response?.data || "Failed to create coupon");
        
    }
})

export const deleteCoupon = createAsyncThunk<
    number,
    { id: number; jwt: string },
    { rejectValue: string }
>("coupon/deleteCoupon", async ({ id, jwt }, { rejectWithValue }) => {
    try {
        const respone = await api.delete(`${API_URL}/admin/delete/${id}`, {
            headers: { Authorization: `Bearer ${jwt}` },
        });
        return respone.data;
    } catch (error: any) {
        return rejectWithValue(error.response?.data || "Failed to delete coupon");
    }
});

export const fetchAllCoupons = createAsyncThunk<
    Coupon[],
    string,
    { rejectValue: string }
>("coupon/fetchAllCoupons", async (jwt, { rejectWithValue }) => {
    try {
        const response = await api.get(`${API_URL}/admin/all`, {
            headers: { Authorization: `Bearer ${jwt}` },
        });
        console.log("fetched coupons", response.data);
        return response.data;
    } catch (error: any) {
        return rejectWithValue(error.response?.data || "Failed to fetch coupons");
    }
});

//Initial State
const initialState: CouponState = {
    coupons: [],
    cart: null,
    loading: false,
    error: null,
    couponCreated: false,
    couponApplied: false,
};

//Slice
const couponSlice = createSlice({
    name: "coupon",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        // createCoupon
        .addCase(createCoupon.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.couponCreated = false;
        })
        .addCase(createCoupon.fulfilled, (state, action) => {
            state.loading = false;
            state.couponCreated = true;
            state.coupons.push(action.payload);
        })
        .addCase(createCoupon.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })

        // deleteCoupon
        .addCase(deleteCoupon.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(deleteCoupon.fulfilled, (state, action) => {
            state.loading = false;
            // dùng meta.arg.id vì response trả về không phải là id
            const deletedId = action.meta.arg.id;
            state.coupons = state.coupons.filter((c) => c.id !== deletedId);
        })
        .addCase(deleteCoupon.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })

        // fetchAllCoupons
        .addCase(fetchAllCoupons.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchAllCoupons.fulfilled, (state, action) => {
            state.loading = false;
            state.coupons = action.payload;
        })
        .addCase(fetchAllCoupons.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    }
})

export default couponSlice.reducer;
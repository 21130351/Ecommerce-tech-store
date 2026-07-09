import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Deal, DealsState } from "../../types/dealTypes";
import { api } from "../../config/Api";

const API_URL = "/admin/deals";

// Admin tạo deal mới
export const createDeal = createAsyncThunk<
    Deal,
    any,
    { rejectValue: string }
>("deals/createDeal", async (deal, { rejectWithValue }) => {
    try {
        const response = await api.post("/admin/deals", deal,{
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
        });
        console.log("deal created", response.data);
        return response.data;
    } catch (error: any) {
        console.log("error", error);
        return rejectWithValue(error.response?.data || "Failed to create deal");
    }
});

// Admin cập nhật deal
export const updateDeal = createAsyncThunk<
    Deal,
    { id: number; data: any },
    { rejectValue: string }
>("deals/updateDeal", async ({ id, data }, { rejectWithValue }) => {
    try {
        const response = await api.patch(`${API_URL}/${id}`, data, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
        });
        console.log("deal updated", response.data);
        return response.data;
    } catch (error: any) {
        console.log("error", error);
        return rejectWithValue(error.response?.data || "Failed to update deal");
    }
});

// Admin xóa deal
export const deleteDeal = createAsyncThunk<
    number,
    number,
    { rejectValue: string }
>("deals/deleteDeal", async (id, { rejectWithValue }) => {
    try {
        await api.delete(`${API_URL}/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
        });
        console.log("deal deleted", id);
        return id;
    } catch (error: any) {
        console.log("error", error);
        return rejectWithValue(error.response?.data || "Failed to delete deal");
    }
});

// Admin lấy danh sách deal
export const fetchAllDeals = createAsyncThunk<
    Deal[],
    void,
    { rejectValue: string }
>("deals/fetchAllDeals", async (_, { rejectWithValue }) => {
    try {
        const response = await api.get("/admin/deals", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
        });
        console.log("deals fetched", response.data);
        return response.data;
    } catch (error: any) {
        console.log("error", error);
        return rejectWithValue(error.response?.data || "Failed to fetch deals");
    }
});

//Initial State
const initialState: DealsState = {
    deals: [],
    loading: false,
    error: null,
    dealCreated: false,
    dealUpdate: false,
};

//Slice
const dealSlice = createSlice({
    name: "deals",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        // createDeal
        .addCase(createDeal.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.dealCreated = false;
        })
        .addCase(createDeal.fulfilled, (state, action) => {
            state.loading = false;
            state.dealCreated = true;
            state.deals.push(action.payload);
        })
        .addCase(createDeal.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })

        // updateDeal
        .addCase(updateDeal.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.dealUpdate = false;
        })
        .addCase(updateDeal.fulfilled, (state, action) => {
            state.loading = false;
            state.dealUpdate = true;
            const index = state.deals.findIndex((deal) => deal.id === action.payload.id);
            if (index !== -1) {
                state.deals[index] = action.payload;
            }
        })
        .addCase(updateDeal.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })

        // deleteDeal
        .addCase(deleteDeal.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(deleteDeal.fulfilled, (state, action) => {
            state.loading = false;
            state.deals = state.deals.filter((deal) => deal.id !== action.payload);
        })
        .addCase(deleteDeal.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })

        // fetchAllDeals
        .addCase(fetchAllDeals.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchAllDeals.fulfilled, (state, action) => {
            state.loading = false;
            state.deals = action.payload;
        })
        .addCase(fetchAllDeals.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    }
})

export default dealSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchCart = createAsyncThunk('fetchCart', async () => {
    const response = await fetch("https://fakestoreapi.com/carts/1") //remove id
    return response.json();
});

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        isLoading: false,
        items: [],
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCart.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchCart.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            console.log("Cart pulled", action.payload);//will remove
        })
        builder.addCase(fetchCart.rejected, (state, action) => {
            console.log("error in cart", action.payload);
            state.isError = true;
            state.isLoading = false;
        })
    }
})
export default cartSlice.reducer;
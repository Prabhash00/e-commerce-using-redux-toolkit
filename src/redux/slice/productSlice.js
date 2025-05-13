import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk('fetchData', async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    return response.json();
});

const productSlice = createSlice({
    name: 'products',
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            console.log("success", action.payload);//will remove
        })
        builder.addCase(fetchData.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isError = true;
            state.isLoading = false;
        })
    }
})

export default productSlice.reducer;
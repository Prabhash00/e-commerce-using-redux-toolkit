import { configureStore } from "@reduxjs/toolkit";
import ecomReducer from "./slice/ecomSlice";

export const store = configureStore({
    reducer: {
        ecom: ecomReducer,
    },
})


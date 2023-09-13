import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

// Inside configureStore we'll create slices, we will create separate file for each slice and import here
const store = configureStore({
    reducer: {
        cart: cartSlice
    }
});

export default store;
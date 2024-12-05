import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../slice/OrderSlice"; // Adjust the path as needed
import authReducer from "../slice/AuthSlice";
import cartReducer from '../slice/CartSlice';
// Assuming you already have an auth slice

const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer,
        users: authReducer, // Assuming you have a users slice
    },
});

export default store;

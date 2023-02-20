import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Features/Cart/CartSlice'
import modalReducer from "./Features/Cart/Modal/ModalSlice";

export const store = configureStore({
    reducer: {
        cart : cartReducer,
        modal : modalReducer,
    },
})
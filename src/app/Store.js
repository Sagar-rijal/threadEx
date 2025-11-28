import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../feature/cart/cartSlice.js"; // <-- feature (singular)

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
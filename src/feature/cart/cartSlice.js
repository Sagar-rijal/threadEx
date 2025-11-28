import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    incrementItem(state, action) {
      const productId = action.payload;
      const existing = state.items.find((item) => item.id === productId);
      if (existing) {
        existing.quantity += 1;
      }
    },
    decrementItem(state, action) {
      const productId = action.payload;
      const existing = state.items.find((item) => item.id === productId);
      if (!existing) return;

      if (existing.quantity > 1) {
        existing.quantity -= 1;
      } else {
        state.items = state.items.filter((item) => item.id !== productId);
      }
    },
  },
});

export const { addToCart, incrementItem, decrementItem } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export const selectCartCount = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);

export default cartSlice.reducer;
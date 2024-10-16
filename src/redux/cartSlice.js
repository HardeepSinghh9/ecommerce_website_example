import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1; // increase quantity if already in cart
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Add item to cart
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export default cartSlice.reducer;

// cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  barcode: string;
  name: string;
  price: number;
  quantity: number;
}

export const cartSlice = createSlice({
  name: "cart",
  initialState: [] as Product[],
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.barcode !== action.payload);
    },
    clearCart: (state) => {
      return [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

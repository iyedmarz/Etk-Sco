// cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  barcode: string;
  name: string;
  price: number;
  quantity: number;
  price_quantity: number;
}

interface CartState {
  items: Product[];
  selectedRows: string[];
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  selectedRows: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ** Add to Cart the scanned Item
    addToCart: (state, action: PayloadAction<Product>) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.barcode === newItem.barcode
      );
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.price_quantity =
          existingItem.price * existingItem.quantity;
      } else {
        newItem.quantity = 1;
        newItem.price_quantity = newItem.price;
        state.items.push(newItem);
      }
      state.totalPrice += newItem.price;
    },
    // ** Delete from Cart the selected Items
    removeFromCart: (state) => {
      state.selectedRows.map((row) => {
        console.log(row);
        const removedItem = state.items.find((item) => item.barcode === row);
        console.log(removedItem);
        if (removedItem) {
          state.totalPrice -= removedItem.price * removedItem.quantity;
          state.items = state.items.filter((item) => item.barcode !== row);
          state.selectedRows = state.selectedRows.filter(
            (rowbarcode) => rowbarcode !== row
          );
          console.log(state.selectedRows);
        }
      });
    },
    // ** handling selected row
    handleSelectedRows: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      const selectedbarcode = state.selectedRows.indexOf(action.payload);
      console.log(selectedbarcode);
      let newSelectedRows: string[] = [];
      if (selectedbarcode === -1) {
        newSelectedRows = [...state.selectedRows, action.payload];
      } else {
        newSelectedRows = state.selectedRows.filter(
          (rowbarcode) => rowbarcode !== action.payload
        );
      }
      state.selectedRows = newSelectedRows;
      console.log(state.selectedRows);
    },
    clearCart: (state) => {
      state.items = [];
      state.selectedRows = [];
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, handleSelectedRows, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;

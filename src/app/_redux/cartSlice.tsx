import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Empty } from "antd";

// interface promoDiscount {
//   codePromo: string;
//   discount: number;
//   brand?: string;
// }

interface Product {
  barcode: string;
  brand: string;
  name: string;
  category: string;
  priceUnit: number;
  quantity: number;
  pts_fid: number;
  price_quantity: number;
  promoDiscount: number;
}

interface clientbalance {
  id: string;
  pts_fidality: number;
}

interface CartState {
  items: Product[];
  selectedRows: string[];
  totalPrice: number;
  clientid: string;
  balance: number;
  lefttopay: number;
}

const initialState: CartState = {
  items: [],
  selectedRows: [],
  totalPrice: 0,
  clientid: "",
  balance: 0,
  lefttopay: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ** Add to Cart the scanned Item
    addToCart: (state, action: PayloadAction<Product>) => {
      const newItem = action.payload;
      console.log(newItem);
      console.log(typeof newItem.priceUnit);
      const existingItem = state.items.find(
        (item) => item.barcode === newItem.barcode
      );
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.price_quantity =
          existingItem.priceUnit * existingItem.quantity;
        console.log(typeof existingItem.price_quantity);
      } else {
        newItem.quantity = 1;
        newItem.price_quantity = newItem.priceUnit;
        console.log(typeof newItem.price_quantity);
        state.items.push(newItem);
      }
      state.totalPrice += newItem.priceUnit;
      console.log(state.items);
    },
    // ** Decrement from Cart the selected Item
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const barcode = action.payload;
      const product = state.items.find((item) => item.barcode === barcode);
      if (product && product.quantity > 0) {
        product.quantity -= 1;
        state.totalPrice -= product.priceUnit;
        if (product.quantity === 0) {
          state.items = state.items.filter((item) => item.barcode !== barcode);
        }
        if (state.totalPrice < 0) {
          state.totalPrice = 0;
        }
      }
    },
    // ** Delete from Cart the selected Items
    removeFromCart: (state) => {
      state.selectedRows.map((row) => {
        console.log(row);
        const removedItem = state.items.find((item) => item.barcode === row);
        console.log(removedItem);
        if (removedItem) {
          state.totalPrice -= removedItem.priceUnit * removedItem.quantity;
          state.items = state.items.filter((item) => item.barcode !== row);
          state.selectedRows = state.selectedRows.filter(
            (rowbarcode) => rowbarcode !== row
          );
          if (state.totalPrice < 0) {
            state.totalPrice = 0;
          }
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
    addDiscount: (state, action: PayloadAction<number>) => {
      console.log(action.payload);
      state.items.map((row) => {
        console.log(row);
        if (row.brand === "Delice") {
          row.promoDiscount = action.payload;
          console.log(row.promoDiscount);
          state.totalPrice -= row.price_quantity * action.payload;
          row.price_quantity -= row.price_quantity * action.payload;
          console.log(row);
        }
      });
    },
    clientInfo: (state, action: PayloadAction<clientbalance>) => {
      console.log(action.payload);
      console.log(action.payload.id);
      console.log(action.payload.pts_fidality);
      state.clientid = action.payload.id;
      state.balance = action.payload.pts_fidality * 0.02;
    },
    leftToPay: (state, action: PayloadAction<number>) => {
      console.log(action.payload);
      state.lefttopay = action.payload;
    },
    clearCart: (state) => {
      state.items = [];
      state.selectedRows = [];
      state.totalPrice = 0;
    },
  },
});

export const {
  addDiscount,
  addToCart,
  removeFromCart,
  handleSelectedRows,
  clientInfo,
  leftToPay,
  clearCart,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

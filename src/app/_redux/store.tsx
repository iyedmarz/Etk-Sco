// store.ts
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // Create a cartSlice.ts file
import designSettingsReducer from "./designSettingsSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  designsettings: designSettingsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

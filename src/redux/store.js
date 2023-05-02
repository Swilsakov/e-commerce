import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice/productsSlice";
import cartSlice from "./cartSlice/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productsSlice,
  },
});

export default store;

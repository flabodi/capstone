import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../redux/feauters/categories/categoriesSlice";
import productsReducer from "../redux/feauters/products/productsSlice";
import tipsStoriesReducer from "../redux/feauters/tipsStories/tipsStoriesSlice";
import cartReducer from "../redux/feauters/cart/cartSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    tipsStories: tipsStoriesReducer,
    cart: cartReducer,
  },
});

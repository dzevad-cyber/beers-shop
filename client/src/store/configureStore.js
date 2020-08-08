import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './productsSlice';
import cartSlice from './cartSlice';
import userSlice from './userSlice';

export default configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
    user: userSlice,
  },
});

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../components/cartSlice';

const Store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default Store;

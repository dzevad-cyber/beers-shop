import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import cedarImg from '../assets/images/Craft_Beer_-_Cedar_600x.png';
import chestnutImg from '../assets/images/Craft_Beer_-_Chestnut_600x.png';
import oakImg from '../assets/images/Craft_Beer_-_Oak_600x.png';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    productsList: [],
    productsMap: {},
  },
  reducers: {
    productsAdded: (state, { payload }) => {
      state.productsList = payload;
      payload.forEach(
        (product) => (state.productsMap[`${product._id}`] = product)
      );
    },
  },
});

export const { productsAdded } = productsSlice.actions;

export const selectProducts = (state) => state.products.productsList;
export const selectProduct = (id) => (state) => state.products.productsMap[id];
export const selectRelatedProducts = (id) => (state) =>
  state.products.productsList.filter((product) => product.id !== id);

export const fetchProductsFromDb = () => async (dispatch) => {
  try {
    const {
      data: {
        data: { products },
      },
    } = await axios.get('/api/v1/products');

    dispatch(productsAdded(products));
  } catch (error) {
    console.log(error);
  }
};

export default productsSlice.reducer;

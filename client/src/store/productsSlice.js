import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

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
        product => (state.productsMap[`${product._id}`] = product)
      );
    },
  },
});

export const { productsAdded } = productsSlice.actions;

export const selectProducts = state => state.products.productsList;
export const selectProduct = id => state => state.products.productsMap[id];
export const selectRelatedProducts = id => state =>
  state.products.productsList.filter(product => product.id !== id);

export const fetchProductsFromDb = () => async dispatch => {
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

import { createSlice } from '@reduxjs/toolkit';

import cedarImg from '../assets/images/Craft_Beer_-_Cedar_600x.png';
import chestnutImg from '../assets/images/Craft_Beer_-_Chestnut_600x.png';
import oakImg from '../assets/images/Craft_Beer_-_Oak_600x.png';

const __products = {
  list: [
    {
      id: 1,
      company: 'craft beer',
      name: 'oak',
      abv: 8.2,
      wort: 15.5,
      ibu: 34,
      bottle: 0.5,
      img: oakImg,
      price: 3.99,
    },
    {
      id: 2,
      company: 'craft beer',
      name: 'cedar',
      abv: 5.2,
      wort: 17.5,
      ibu: 34,
      bottle: 0.5,
      img: cedarImg,
      price: 3.99,
    },
    {
      id: 3,
      company: 'craft beer',
      name: 'chestnut',
      abv: 4.5,
      wort: 15.5,
      ibu: 34,
      bottle: 0.5,
      img: chestnutImg,
      price: 3.99,
    },
  ],
  products: {
    1: {
      id: 1,
      company: 'craft beer',
      name: 'oak',
      abv: 8.2,
      wort: 15.5,
      ibu: 34,
      bottle: 0.5,
      img: oakImg,
      price: 3.99,
    },
    2: {
      id: 2,
      company: 'craft beer',
      name: 'cedar',
      abv: 5.2,
      wort: 17.5,
      ibu: 34,
      bottle: 0.5,
      img: cedarImg,
      price: 3.99,
    },
    3: {
      id: 3,
      company: 'craft beer',
      name: 'chestnut',
      abv: 4.5,
      wort: 15.5,
      ibu: 34,
      bottle: 0.5,
      img: chestnutImg,
      price: 3.99,
    },
  },
};

export const productsSlice = createSlice({
  name: 'products',
  initialState: __products,
  reducers: {
    productsAdded: (products) => products,
  },
});

export const { productsAdded } = productsSlice.actions;

export const selectProducts = (state) => state.products.list;
export const selectProduct = (id) => (state) => state.products.products[id];

export default productsSlice.reducer;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

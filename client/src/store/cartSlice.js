import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: {},
    cartTotalPrice: 0,
    cartTotalItems: 0,
  },
  reducers: {
    productAdded: (state, { type, payload }) => {
      state.products[`${payload.id}`] = {
        ...payload,
        totalPrice: payload.count * payload.price,
      };
    },
    cartPriceCalculated: (state) => {
      let { products } = state;
      state.cartTotalPrice = Object.keys(products).reduce(
        (acc, value) => acc + products[value].totalPrice,
        0
      );
    },
    cartItemsCalculated: (state) => {
      let { products } = state;
      state.cartTotalItems = Object.keys(products).reduce(
        (acc, value) => acc + products[value].count,
        0
      );
    },
    cartProductsRemoved: (state) => {
      state.products = {};
      state.cartTotalItems = 0;
      state.cartTotalPrice = 0;
    },
    cartProductRemoved: (state, { type, payload }) => {
      delete state.products[payload.id];
    },
  },
});

export const {
  productAdded,
  cartPriceCalculated,
  cartItemsCalculated,
  cartProductsRemoved,
  cartProductRemoved,
} = cartSlice.actions;

export const selectTotalCartPrice = (state) => state.cart.totalCartPrice;
export const selectCartProducts = (state) => state.cart.products;
export const selectProductFromCart = (id) => (state) => state.cart.products[id];
export const selectCartTotalItems = (state) => state.cart.cartTotalItems;
export const selectCartTotalPrice = (state) => state.cart.cartTotalPrice;

export default cartSlice.reducer;

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

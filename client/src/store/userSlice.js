import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const cartSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    userErrors: {
      errors: {},
      message: '',
    },
  },
  reducers: {
    userSignedup: (state, { payload: { user }, type }) => {
      state.userErrors.errors = {};
      state.message = '';
      state.user = user;
    },
    userErrorsSet: (state, { payload: { errors, message }, type }) => {
      const { userErrors } = state;
      userErrors.errors = errors;
      // if (errors) userErrors.errors = errors;
      userErrors.message = message;
    },
  },
});

// export actions
export const { userErrorsSet, userSignedup } = cartSlice.actions;

// thunk
export const signup = user => async dispatch => {
  // activate loader
  try {
    const {
      data: { data },
    } = await axios.post('/api/v1/users/signup', user);

    dispatch(userSignedup(data));
  } catch (err) {
    dispatch(userErrorsSet(err.response.data));
  }
};
// selectors
export const selectUserErrors = state => state.user.userErrors;
export const selectUser = state => state.user.user;

// export default
export default cartSlice.reducer;

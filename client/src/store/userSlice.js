import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const cartSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    userErrors: {
      errors: {},
      message: '',
    },
  },
  reducers: {
    userUpdated: (state, user) => {
      // state.
    },
    userErrors: (state, action) => {
      const { errors, message } = action.payload;
      const { userErrors } = state;
      if (errors) userErrors.errors = errors;
      userErrors.message = message;
    },
  },
});

// export actions
export const { userErrors } = cartSlice.actions;

// thunk
export const signup = user => async dispatch => {
  // activate loader
  try {
    const response = await axios.post('/api/v1/users/signup', user);

    console.log(response);
  } catch (err) {
    dispatch(userErrors(err.response.data));
  }
};

// selectors
export const selectUserErrors = state => state.user.userErrors;

// export default
export default cartSlice.reducer;

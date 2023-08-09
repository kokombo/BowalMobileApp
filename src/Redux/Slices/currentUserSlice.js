import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    signout: state => {
      state.user = null;
    },
  },
});

export const {login, signout} = currentUserSlice.actions;
export default currentUserSlice.reducer;

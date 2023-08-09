import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  alertShown: false,
};

const customAlertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    showAlert: (state, action) => {
      state.alertShown = true;
    },
    closeAlert: (state, action) => {
      state.alertShown.false;
    },
  },
});

export const {showAlert, closeAlert} = customAlertSlice.actions;
export default customAlertSlice.reducer;

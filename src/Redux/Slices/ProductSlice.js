import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import database from '@react-native-firebase/database';

const initialState = {
  products: [],
  status: 'idle',
  error: null,
};

export const addProduct = createAsyncThunk(
  'product/addProduct',
  productInfo => {
    try {
      database()
        .ref('/users/product')
        .set({
          ...productInfo,
        });
    } catch (error) {
      return error.message;
    }
  },
);

const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducer: {},
  extraReducers: builder => {
    builder
      .addCase(addProduct.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(addProduct.failed, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default ProductSlice.reducer;

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';

const initialState = {
  products: [],
  status: 'idle',
  error: null,
};

export const addProduct = createAsyncThunk(
  'product/addProduct',
  async productInfo => {
    try {
      await firestore()
        .collection('products')
        .add({
          ...productInfo,
        });
    } catch (error) {
      return error.message;
    }
  },
);

const productSlice = createSlice({
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
      .addCase(addProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;

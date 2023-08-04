import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';

const initialState = {
  productArray: [],
  storage: [],
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

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    try {
      const query = await firestore().collection('products').get();
      const data = query.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      return data;
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
      })
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.productArray = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export default productSlice.reducer;

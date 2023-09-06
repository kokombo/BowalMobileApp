import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';

initialState = {
  status: 'idle',
  vendors: [],
  error: null,
  products: [],
};

//Function to return all the vendors in the database
export const getAllVendors = createAsyncThunk(
  'vendors/getAllVendors',
  async () => {
    try {
      const query = await firestore().collection('vendors').get();
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

//Function to get the products of each vendor in the database
export const getVendorProducts = createAsyncThunk(
  'vendors/getVendorProducts',
  async id => {
    try {
      const query = await firestore()
        .collection('vendors')
        .doc(`${id}`)
        .collection('products')
        .orderBy('timeStamp', 'desc')
        .get();

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

export const getVendorSlice = createSlice({
  name: 'vendors',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllVendors.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getAllVendors.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.vendors = action.payload;
      })
      .addCase(getAllVendors.rejected, (state, action) => {
        state.status = 'falied';
        state.error = action.error.message;
      })
      .addCase(getVendorProducts.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getVendorProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(getVendorProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default getVendorSlice.reducer;

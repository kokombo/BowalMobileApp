import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';

initialState = {
  status: 'idle',
  vendors: [],
  error: null,
};

export const getAllVendors = createAsyncThunk(
  'vendors/getAllVendors',
  async () => {
    const query = await firestore().collection('users').get();
    const data = query.docs.map(doc => ({
      ...doc.data(),
      id: doc.id,
    }));
    return data;
  },
);

const getVendorSlice = createSlice({
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
      });
  },
});

export default getVendorSlice.reducer;

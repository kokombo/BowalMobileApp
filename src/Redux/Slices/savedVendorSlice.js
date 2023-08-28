import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';

const initialState = {
  status: 'idle',
  savedVendors: [],
  error: null,
};

//Function to save a vendor to saved vendors list in the backend
export const getSavedVendors = createAsyncThunk(
  'savedVendors/getSavedVendors',
  async (_, {getState}) => {
    const state = getState();
    const uid = state.currentUser.user.uid;
    try {
      const query = await firestore()
        .collection('buyers')
        .doc(`${uid}`)
        .collection('savedVendors')
        .orderBy('timeStamp', 'desc')
        .get();
      console.log(query);
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

const savedVendorSlice = createSlice({
  name: 'savedVendors',
  initialState,
  reducer: {},
  extraReducers: builder => {
    builder
      .addCase(getSavedVendors.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getSavedVendors.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.savedVendors = action.payload;
      })
      .addCase(getSavedVendors.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default savedVendorSlice.reducer;

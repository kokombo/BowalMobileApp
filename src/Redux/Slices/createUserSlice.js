import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';

const initialState = {
  status: 'idle',
  error: '',
};

export const createUser = createAsyncThunk(
  'user/createUser',
  async (email, password) => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      return error.message;
    }
  },
);

const createUserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createUser.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = 'succeeded';
      })
      .addCase(createUser.rejected, (state, action) => {
        (state.loading = 'failed'), (state.error = action.error.message);
      });
  },
});

export default createUserSlice.reducer;

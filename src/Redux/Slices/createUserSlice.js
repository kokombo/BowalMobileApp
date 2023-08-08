import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';

const initialState = {
  status: 'idle',
  error: '',
  user: [],
};

export const createUser = createAsyncThunk('createUser/signup', async cred => {
  try {
    await auth().createUserWithEmailAndPassword({...cred});
  } catch (error) {
    return error.message;
  }
});

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
        state.loading = 'succedded';
        state.user = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        (state.loading = 'failed'), (state.error = action.error.message);
      });
  },
});

export default createUserSlice.reducer;

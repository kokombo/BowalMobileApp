import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {launchImageLibrary} from 'react-native-image-picker';

const initialState = {
  selectedImage: '',
};

export const selectImage = createAsyncThunk(
  'imageSelector/selectImage',
  async () => {
    try {
      const result = await launchImageLibrary({mediaType: 'photo', quality: 1});
      console.log(result);
      return result;
    } catch (error) {
      return error.message;
    }
  },
);

const imageSelectorSlice = createSlice({
  name: 'imageSelector',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(selectImage.fulfilled, (state, action) => {
      state.selectedImage = action.payload;
    });
  },
});

export default imageSelectorSlice.reducer;

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Alert, Platform} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

const initialState = {
  currentImage: '',
  selectedImages: [],
};

export const selectImage = createAsyncThunk(
  'imageSelector/selectImage',
  async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        quality: 1,
        selectionLimit: 3,
      });
      if (!result.didCancel) {
        const uri = result?.assets[0]?.uri;
        const uploadUri =
          Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
        return uploadUri;
      }
    } catch (error) {
      return error.message;
    }
  },
);

const imageSelectorSlice = createSlice({
  name: 'imageSelector',
  initialState,
  reducers: {
    clearImages: (state, action) => {
      state.selectedImages = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(selectImage.fulfilled, (state, action) => {
      state.selectedImages.push(action.payload);
    });
  },
});
export const {clearImages} = imageSelectorSlice.actions;
export default imageSelectorSlice.reducer;

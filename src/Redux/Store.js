import {configureStore} from '@reduxjs/toolkit';
import imageSelectorReducer from './Slices/ImageSelectorSlice';

export const Store = configureStore({
  reducer: {
    imageSelector: imageSelectorReducer,
  },
});

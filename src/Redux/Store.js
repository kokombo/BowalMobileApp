import {configureStore} from '@reduxjs/toolkit';
import imageSelectorReducer from './Slices/ImageSelectorSlice';
import productReducer from "./Slices/ProductSlice"

export const Store = configureStore({
  reducer: {
    imageSelector: imageSelectorReducer,
    product: productReducer
  },
});

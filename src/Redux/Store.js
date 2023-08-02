import {configureStore} from '@reduxjs/toolkit';
import imageSelectorReducer from './Slices/ImageSelectorSlice';
import productReducer from "./Slices/ProductSlice"
import customAlertReducer from "./Slices/customAlertSlice"

export const Store = configureStore({
  reducer: {
    imageSelector: imageSelectorReducer,
    product: productReducer,
    alert: customAlertReducer
  },
});

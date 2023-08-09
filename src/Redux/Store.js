import {configureStore} from '@reduxjs/toolkit';
import imageSelectorReducer from './Slices/ImageSelectorSlice';
import productReducer from './Slices/ProductSlice';
import customAlertReducer from './Slices/customAlertSlice';
import createUserSliceReducer from './Slices/createUserSlice';
import currentUserSliceReducer from './Slices/currentUserSlice';

export const store = configureStore({
  reducer: {
    imageSelector: imageSelectorReducer,
    product: productReducer,
    alert: customAlertReducer,
    user: createUserSliceReducer,
    currentUser: currentUserSliceReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

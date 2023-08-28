import {configureStore} from '@reduxjs/toolkit';
import imageSelectorReducer from './Slices/ImageSelectorSlice';
import productReducer from './Slices/ProductSlice';
import customAlertReducer from './Slices/customAlertSlice';
import createUserSliceReducer from './Slices/createUserSlice';
import currentUserSliceReducer from './Slices/currentUserSlice';
import getVendorSliceReducer from './Slices/getVendorSlice';
import savedVendorSliceReducer from './Slices/savedVendorSlice';

export const store = configureStore({
  reducer: {
    imageSelector: imageSelectorReducer,
    product: productReducer,
    alert: customAlertReducer,
    user: createUserSliceReducer,
    currentUser: currentUserSliceReducer,
    vendors: getVendorSliceReducer,
    savedVendors: savedVendorSliceReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

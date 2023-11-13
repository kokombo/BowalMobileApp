import {configureStore} from '@reduxjs/toolkit';
import imageSelectorReducer from './Slices/ImageSelectorSlice';
import productReducer from './Slices/ProductSlice';
import customAlertReducer from './Slices/customAlertSlice';
import currentUserSliceReducer from './Slices/currentUserSlice';
import getVendorSliceReducer from './Slices/getVendorSlice';
import savedVendorSliceReducer from './Slices/savedVendorSlice';
import cartSliceReducer from './Slices/cartSlice';

export const store = configureStore({
  reducer: {
    imageSelector: imageSelectorReducer,
    product: productReducer,
    alert: customAlertReducer,
    currentUser: currentUserSliceReducer,
    vendors: getVendorSliceReducer,
    savedVendors: savedVendorSliceReducer,
    cart: cartSliceReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

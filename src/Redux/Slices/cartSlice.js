import {createSlice} from '@reduxjs/toolkit';

//Amount is the number of products added to the cart
//Total is the total price of all products added to the cart.
const initialState = {
  cartItems: [],
  quantity: 0,
  total: 0,
  isLoading: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    clearCart: (state, action) => {
      state.cartItems = [];
    },
    removeProduct: (state, action) => {
      state.cartItems = state.cartItems.filter(
        item => item.id !== action.payload,
      );
    },
    increase: (state, {payload}) => {
      const cartItem = state.cartItems.find(
        cartItem => cartItem.id === payload.id,
      );
      cartItem.quantity = cartItem.quantity + 1;
    },
    decrease: (state, {payload}) => {
      const cartItem = state.cartItems.find(
        cartItem => cartItem.id === payload.id,
      );
      cartItem.quantity = cartItem.quantity - 1;
    },
    calculateTotalPrice: (state, action) => {
      let eachProductQuantity = 0;
      let eachProductTotal = 0;
      state.cartItems.forEach(cartItem => {
        eachProductQuantity += cartItem.quantity;
        eachProductTotal += cartItem.total;
      });
    },
  },
});

export default cartSlice.reducer;

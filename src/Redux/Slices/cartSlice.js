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
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        item => item.id !== action.payload,
      );
    },
    increase: (state, {payload}) => {
      const cartItem = state.cartItems.find(item => item.id === payload.id);
      cartItem.quantity = cartItem.quantity + 1;
    },
    decrease: (state, {payload}) => {
      const cartItem = state.cartItems.find(item => item.id === payload.id);
      cartItem.quantity = cartItem.quantity - 1;
    },
    calculateTotalPrice: (state, action) => {
      let eachProductQuantity = 0;
      let eachProductTotal = 0;
      state.cartItems.forEach(cartItem => {
        eachProductQuantity += cartItem.quantity;
        eachProductTotal += cartItem.total;
      });
      state.quantity = eachProductQuantity;
      state.total = eachProductTotal;
    },
  },
});

export const {
  addToCart,
  clearCart,
  removeFromCart,
  increase,
  decrease,
  calculateTotalPrice,
} = cartSlice.actions;

export default cartSlice.reducer;

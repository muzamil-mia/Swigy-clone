import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      let index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.cartItems[index].inStock += 1;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    getCartTotal: (state) => {
      let totalQuantity = 0,
        totalPrice = 0;
      state.cartItems.forEach((cartItem) => {
        const { price, inStock } = cartItem;
        const itemTotal = (price / 100) * inStock;
        totalPrice += itemTotal;
        totalQuantity += inStock;
      });
      state.totalQuantity = totalQuantity;
      state.totalPrice = parseFloat(totalPrice.toFixed(2));
    },
    removeItem: (state, action) => {
      //console.log(action.payload);
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    clearCart: (state, action) => {
      //console.log("cleared cart");
      //return [];
      cartItems.length = 0;
    },
    increaseItemQuantity: (state, action) => {
      console.log("quantity increased");
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          return { ...item, inStock: item.inStock + 1 };
        }
        return item;
      });
    },
    decreaseItemQuantity: (state, action) => {
      console.log("decreased");
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          return { ...item, inStock: item.inStock - 1 };
        }
        return item;
      });
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  getCartTotal,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

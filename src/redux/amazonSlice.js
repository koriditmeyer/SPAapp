import { createSelector, createSlice } from "@reduxjs/toolkit";

//create categories at initial state
const initialState = {
  products: [],
  userInfo: [],
};

//create reducers
export const amazonSlice = createSlice({
  name: "amazon",
  initialState,
  reducers: {
    // ============= Product Reducers here ===============
    // Add to cart
    addToCart: (state, action) => {
      //  state.products.push(action.payload)
      const item = state.products.find(
        (item) => item.properties.id === action.payload.properties.id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    // Delete item from cart
    removeItemsCart: (state, action) => {
      state.products = state.products.filter(
        (item) => item.properties.id !== action.payload
      );
    },
    // Reset cart to initial state
    resetCart: (state) => {
      state.products = [];
    },
    // Update Cart
    updateCart: (state, action) => {
        //  state.products.push(action.payload)
        const item = state.products.find(
          (item) => item.properties.id === action.payload.id
        );
        if (item) {
          item.quantity = action.payload.quantity;
        } 
      },

    //     // ============= UserInfo Reducers here ==============
    //     // User authentication
  },
});

const selectProducts = (state) => state.amazonReducer.products;
// creating selectors
export const selectTotalPrice = createSelector(
  [selectProducts], // Input selector
  (products) =>
    products.reduce(
      (total, product) => total + product.properties.price * product.quantity,
      0
    )
);

export const selectTotalQuantity = createSelector(
  [selectProducts],
  (products) => products.reduce((total, product) => total + product.quantity, 0)
);

// exports actions and reducers
export const {
  addToCart,
  removeItemsCart,
  resetCart,
  updateCart
  //   increaseQuantity,
  //   decreaseQuantity,
} = amazonSlice.actions;
export default amazonSlice.reducer;

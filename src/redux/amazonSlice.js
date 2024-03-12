import { createSelector, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

//create categories at initial state
const initialState = {
  products: [],
  userInfo: null,
};

//create reducers
export const amazonSlice = createSlice({
  name: "amazon",
  initialState,
  reducers: {
    // ============= Product Reducers here ===============
    // Add to cart
    addToCart: (state, action) => {
      console.log(action.payload)
      //  state.products.push(action.payload)
      const item = state.products.find(
        (item) => item.properties._id === action.payload.properties._id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
      toast.success(`${action.payload.quantity} Items added to cart`, {
        // position: "bottom-right",
      });
    },
    // Delete item from cart
    removeItemsCart: (state, action) => {
      const product = state.products.find(
        (item) => item.properties._id === action.payload
      );

      state.products = state.products.filter(
        (item) => item.properties._id !== action.payload
      );
      toast.success(`${product.quantity} Item removed from cart`, {
        // position: "bottom-right",
      });
    },
    // Reset cart to initial state
    clearCart: (state) => {
      const totalQuantity = state.products.reduce(
        (total, product) => total + product.quantity,
        0
      );

      state.products = [];
      toast.success(`${totalQuantity} Items removed from cart`, {
        // position: "bottom-right",
      });
    },
    // Update Cart
    updateCart: (state, action) => {
      console.log(action.payload)
      //  state.products.push(action.payload)
      const item = state.products.find(
        (item) => item.properties._id === action.payload._id
      );
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },

    // ============= UserInfo Reducers here ==============
    // User authentication
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    // User Logout
    userSignOut: (state) => {
      state.userInfo = null;
    },
    // update the userInfo in Redux adding/replacing with all values in payload
    forceUpdateUserInfo: (state, action) => {
      state.userInfo = { ...state.userInfo, ...action.payload };
    },
    // update the userInfo in Redux only with values that don't already exist in the state
    updateUserInfo: (state, action) => {
      if (!state.userInfo) {
        state.userInfo = action.payload;
      } else {
        // if userInfo is not null Loop over each key in action.payload
        Object.keys(action.payload).forEach((key) => {
          // If the key does not exist in state.userInfo, add it
          if (!(key in state.userInfo)) {
            state.userInfo[key] = action.payload[key];
          }
        });
      }
    },
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
  clearCart,
  updateCart,
  setUserInfo,
  userSignOut,
  forceUpdateUserInfo,
  updateUserInfo,
} = amazonSlice.actions;
export default amazonSlice.reducer;

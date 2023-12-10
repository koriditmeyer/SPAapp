//* IMPORT
// creation of context
import React, { createContext, useState } from "react";
//* CREATE AND EXPORT CONTEXT
export const CartContext = createContext();

//* DEFINE AND EXPORT PROVIDER
// creation of povider
export const CartProvider = ({ children }) => {
  // GLOBAL STATE THAT ANALYSE CART
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  // FUNCTIONS
  // CHECK IF PRODUCT ALREADY EXIST IN CART
  const isInCart = (itemId) => {
    return cart.some((e) => e.product.id === itemId);
  };
  // ADD PRODUCTS TO CART
  const addToCart = (product, quantity) => {
    if (!isInCart(product.id)) {
      setCart((el) => [...el, { product, quantity }]);
      setTotalQuantity((el) => el + quantity);
      setTotalPrice((el) => el + quantity * product.price);
    } else {
      const cartUpdated = cart.map((e) => {
        if (e.product.id === product.id) {
          return { ...e, quantity: e.quantity + quantity };
        } else {
          return e;
        }
      });
      setCart(cartUpdated);
      setTotalQuantity((el) => el + quantity);
      setTotalPrice((el) => el + quantity * product.price);
    }
  };
  // REMOVE ITEMS IN CART
  const removeItemsCart = (itemId) => {
    const removedProduct = cart.find((e) => e.product.id === itemId);
    const updatedCart = cart.filter((e) => e.product.id !== itemId); //return new array
    setCart(updatedCart);
    setTotalQuantity((el) => el - removedProduct.quantity);
    setTotalPrice(
      (el) => el - removedProduct.quantity * removedProduct.product.price
    );
  };
  // CLEAR CART
  const clearCart = () => {
    setCart([]);
    setTotalQuantity(0);
    setTotalPrice(0);
  };
  // UPDATE CART
  const updateCart = (id, quantity) => {
    const cartUpdated = cart.map((e) => {
      if (e.product.id === id) {
        setTotalQuantity((el) => el + (quantity-e.quantity));
        setTotalPrice((el) => el + (quantity-e.quantity) * e.product.price);
        return { ...e, quantity: quantity };
      } else {
        return e;
      }})
    setCart(cartUpdated);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        totalPrice,
        totalQuantity,
        removeItemsCart,
        updateCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

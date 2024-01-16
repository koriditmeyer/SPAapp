import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { FR_CURRENCY } from "../../constants";
import { ItemCount, ItemDetailInfo } from "..";
import { AnimatePresence, motion } from "framer-motion";
import { emptyCart } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { selectTotalPrice, selectTotalQuantity,removeItemsCart, clearCart, updateCart } from "../../redux/amazonSlice";

const Cart = () => {
  document.title = "Amazon.com | Cart";

  // const {cart, totalPrice ,totalQuantity,updateCart, clearCart, removeItemsCart } =   useContext(CartContext);
  const onAdd = (id, quantity) => {
    if (quantity === 0) {
      // removeItemsCart(id);
      dispatch(removeItemsCart(id))
    } else {
      // updateCart(id, quantity);
      dispatch(updateCart({id,quantity}))
    }
  };
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.amazonReducer.products);

  const totalPrice = useSelector(selectTotalPrice);
  const totalQuantity = useSelector(selectTotalQuantity);

  return (
    <div className=" bg-amazon-background">
      {cart.length == 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col md:flex-row justify-center items-center gap-4 py-10"
        >
          <div>
            <img
              className="w-80 rounded-lg p-4 mx-auto"
              src={emptyCart}
              alt="emptyCart"
            />
          </div>
          <div className="md:w-96 m-2 md:m-0 p-4 bg-white flex  flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold">
              Your Cart feels lonely.
            </h1>
            <p className="text-sm text-center">
              Your Shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, videos, etc. and make it happy.
            </p>
            <Link to="/">
              <button className="mt-6 bg-yellow-400 rounded-md cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 px-8 py-2 font-titleFont font-semibold text-lg">
                Continue Shopping
              </button>
            </Link>
          </div>
        </motion.div>
      ) : (
        <div className=" max-w-constainer m-auto pb-2 md:py-8">
          <div className="grid grid-cols-1 md:grid-cols-8 gap-2 md:gap-10 ">
            {/* Products */}
            <div className="md:col-span-6 bg-white divide-y divide-gray-400">
              <div className="text-2xl xl:text-3xl m-4">Shopping Cart</div>
              <AnimatePresence mode={"popLayout"}>
                {cart.map((item) => {
                  return (
                    <motion.div
                      // key={item.properties.id}
                      key={item.properties.id}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ type: "spring" }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-12 mx-4 ">
                        <div className="md:col-span-10 grid grid-cols-8  ">
                          <div className="col-span-4 md:col-span-2">
                            <Link to={`/item/${item.properties.id}`}>
                              <img
                                className="p-4 m-auto"
                                src={item.properties.img_small}
                                alt="Checkout product"
                              />
                            </Link>
                          </div>
                          <div className="col-span-4 md:col-span-6">
                            <div className="font-medium text-black mt-2">
                              <Link to={`/item/${item.properties.id}`}>
                                <ItemDetailInfo
                                  product={item.properties}
                                  ratings={false}
                                />
                              </Link>
                            </div>
                            <div>
                              <button
                                className="text-sm xl:text-base font-semibold rounded text-blue-500 mt-2 mb-1 cursor-pointer"
                                onClick={() => {
                                  // removeItemsCart(item.properties.id);
                                  dispatch(removeItemsCart(item.properties.id));
                                }}
                              >
                                Delete
                              </button>
                            </div>
                            <ItemCount
                              id={item.properties.id}
                              min={0}
                              initial={item.quantity}
                              stock={item.properties.stock}
                              onAdd={onAdd}
                              updateBehaviour={true}
                            />
                          </div>
                        </div>
                        <div className=" md:col-span-2  ">
                          <div className="text-sm xl:text-lg mt-2 text-right ">
                            Per product{" "}
                            <span className="text-lg xl:text-xl font-semibold">
                              {FR_CURRENCY.format(item.properties.price)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
              <div className="flex justify-between">
                <div className="px-8 py-2">
                  <button className="h-full px-10 py-2 bg-red-500 hover:bg-red-600 active:bg-red-500 text-white rounded-lg font-titleFont font-semibold text-lg tracking-wide"
                   onClick={() => {
                    dispatch(clearCart());
                  }}
                  >
                    Clear Cart
                  </button>
                </div>
                <div className="text-lg xl:text-xl text-right p-4 ">
                  Subtotal ({totalQuantity} items):{" "}
                  <span className="font-semibold">
                    {FR_CURRENCY.format(totalPrice)}
                  </span>
                </div>
              </div>
            </div>
            {/* Checkout */}
            <div className="md:col-span-2 bg-white rounded  md:h-[250px] p-7">
              <div className="text-xs xl:text-sm text-green-800 mb-2">
                Your order qualifies for{" "}
                <span className="font-bold">FREE DELIVERY</span>. Delivery
                Details
              </div>
              <div className="text-base xl:text-lg mb-4">
                Subtotal ({totalQuantity} items):{" "}
                <span className="font-semibold">
                  {FR_CURRENCY.format(totalPrice)}
                </span>
              </div>
              <Link to={"/Checkout"}>
                <button className="btn">Proceed to Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

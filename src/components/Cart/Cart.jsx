import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { FR_CURRENCY } from "../../constants";
import { ItemCount, ItemDetailInfo } from "..";
import { motion } from "framer-motion";
import { emptyCart } from "../../assets";

const Cart = () => {
  document.title = "Amazon.com Cart";
  const { updateCart } = useContext(CartContext);
  const onAdd = (id, quantity) => {
    if (quantity === 0) {
      removeItemsCart(id);
    } else {
      updateCart(id, quantity);
    }
  };

  const { cart, totalPrice, totalQuantity, clearCart, removeItemsCart } =
    useContext(CartContext);
  return (
    <div className=" bg-amazon-background">
      {cart.length == 0 ? (
        <motion.div
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
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

              {cart.map((item) => {
                return (
                  <div key={item.product.id}>
                    <div className="grid grid-cols-1 md:grid-cols-12 mx-4 ">
                      <div className="md:col-span-10 grid grid-cols-8  ">
                        <div className="col-span-4 md:col-span-2">
                          <Link to={`/item/${item.product.id}`}>
                            <img
                              className="p-4 m-auto"
                              src={item.product.img_small}
                              alt="Checkout product"
                            />
                          </Link>
                        </div>
                        <div className="col-span-4 md:col-span-6">
                          <div className="font-medium text-black mt-2">
                            <Link to={`/item/${item.product.id}`}>
                              <ItemDetailInfo
                                product={item.product}
                                ratings={false}
                              />
                            </Link>
                          </div>
                          <div>
                            <button
                              className="text-sm xl:text-base font-semibold rounded text-blue-500 mt-2 mb-1 cursor-pointer"
                              onClick={() => {
                                removeItemsCart(item.product.id);
                              }}
                            >
                              Delete
                            </button>
                          </div>
                          <ItemCount
                            id={item.product.id}
                            min={0}
                            initial={item.quantity}
                            stock={item.product.stock}
                            onAdd={onAdd}
                            updateBehaviour={true}
                          />
                        </div>
                      </div>
                      <div className=" md:col-span-2  ">
                        <div className="text-sm xl:text-lg mt-2 text-right ">
                          Per product{" "}
                          <span className="text-lg xl:text-xl font-semibold">
                            {FR_CURRENCY.format(item.product.price)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="text-lg xl:text-xl text-right p-4 ">
                Subtotal ({totalQuantity} items):{" "}
                <span className="font-semibold">
                  {FR_CURRENCY.format(totalPrice)}
                </span>
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

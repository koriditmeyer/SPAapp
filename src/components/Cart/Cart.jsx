import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { FR_CURRENCY } from "../../constants";
import { ItemCount, ItemDetailInfo } from "..";


const Cart = () => {
  document.title = "Amazon.com Cart"
  const { updateCart } = useContext(CartContext);
  const onAdd = (id, quantity) => {
    if(quantity===0){
      removeItemsCart(id)
    } else{
      updateCart(id, quantity);
    }
  };

  const { cart, totalPrice, totalQuantity, clearCart, removeItemsCart } =
    useContext(CartContext);
  return (
    <div className=" bg-amazon-background">
      {cart.length == 0 ? (
        <div>
          <div className="min-w-[1000px] max-w-[1500px] m-auto pt-8 h-screen">
            <div className="grid grid-cols-8 gap-10 ">
              {/* Products */}
              <div className="col-span-6 bg-white">
                <div className="text-3xl xl:text-4xl m-4">
                  Your Cart is empty.
                </div>
                <div className="m-4">
                  <Link to={"/SPAapp/"}>Go to Home Page</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-w-[1000px] max-w-[1500px] m-auto py-8">
          <div className="grid grid-cols-8 gap-10 ">
            {/* Products */}
            <div className="col-span-6 bg-white">
              <div className="text-2xl xl:text-3xl m-4">Shopping Cart</div>

              {cart.map((item) => {
                return (
                  <div key={item.product.id}>
                    <div className="grid grid-cols-12 divide-y divide-gray-400 mr-4">
                      <div className="col-span-10 grid grid-cols-8 divide-y divide-gray-400">
                        <div className="col-span-2">
                          <Link to={`/item/${item.product.id}`}>
                            <img
                              className="p-4 m-auto"
                              src={item.product.img_small}
                              alt="Checkout product"
                            />
                          </Link>
                        </div>
                        <div className="col-span-6">
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
                      <div className="col-span-2 ">
                        <div className="text-sm xl:text-lg mt-2   text-right">
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
              <div className="text-lg xl:text-xl text-right mb-4 mr-4">
                Subtotal ({totalQuantity} items):{" "}
                <span className="font-semibold">
                  {FR_CURRENCY.format(totalPrice)}
                </span>
              </div>
            </div>
            {/* Checkout */}
            <div className="col-span-2 bg-white rounded  h-[250px] p-7">
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

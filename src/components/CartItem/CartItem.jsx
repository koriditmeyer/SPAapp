import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const CartItem = ({ cartItem, removeItemsCart }) => {
  console.log(cartItem.product);
  return (
    <article
      key={cartItem.product.id}
      className="bg-white bg-opacity-90 rounded-lg shadow-md p-4 flex-grow "
    >
      <a className="flex justify-center ">
        <img
          className="h-[200px]  mix-blend-multiply "
          src={cartItem.product.img}
        ></img>
      </a>
      <p className="text-xl font-semibold mb-2 text-center">
        Title: {cartItem.product.title}
      </p>
      <p className="text-xl font-semibold mb-2 text-red-600">
        Unitary Price: {cartItem.product.price}$
      </p>
      <p className="text-xl font-semibold mb-2 text-red-600">
        Quantity i: {cartItem.quantity}
      </p>
      <ItemCount
        id={cartItem.product.id}
        min={0}
        initial={1}
        stock={cartItem.product.stock}
        onAdd={() => true}
        updateBehaviour={true}
      />
      <p className="text-xl font-semibold mb-2 text-red-600">
        Total Price: {cartItem.product.price * cartItem.quantity}$
      </p>
      <button
        onClick={() => {
          removeItemsCart(cartItem.product.id);
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        REMOVE ITEM
      </button>
    </article>
  );
};

export default CartItem;

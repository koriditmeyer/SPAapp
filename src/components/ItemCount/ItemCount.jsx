import React, { useState } from "react";

const ItemCount = ({ id, min, initial, stock, onAdd, updateBehaviour }) => {
  const [counter, setCounter] = useState(initial);
  const increment = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
    updateBehaviour && onAdd(id,counter +1);
  };
  const decrement = () => {
    if (counter > min) {
      setCounter(counter - 1);
    }
    updateBehaviour && onAdd(id,counter -1);
  };
  const addToCart = () => {

    onAdd(id,counter);
    
  };

  return (
    <div className="flex-col items-center ">
      <div className="flex items-center"> 
        <div className=" min-w-[90px]">Quantity: {counter}</div>
        <div className="flex pl-2">
          <button
            className=" bg-gray-300 hover:bg-gray-400 w-full p-3 text-xs xl-text-sm my-1 border-r border-gray-200 rounded-l"
            onClick={decrement}
            disabled={counter == min}
          >
            -
          </button>
          <button
            className=" bg-gray-300 hover:bg-gray-400 w-full p-3 text-xs xl-text-sm my-1 rounded-r"
            onClick={increment}
            disabled={counter == stock}
          >
            +
          </button>
        </div>
      </div>
      {
      !updateBehaviour && (
      <button
        className="btn"
        onClick={addToCart}
      >
        Add to cart
      </button>
      )
      }
    </div>
  );
};

export default ItemCount;

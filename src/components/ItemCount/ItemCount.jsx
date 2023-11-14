import React,{ useState } from "react";

const Itemcount = ({ initial, stock}) => {
  const [counter, setCounter] = useState(initial);
  const increment = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };
  const decrement = () => {
    if (counter > initial) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="flex items-center ">
      
      <div className="flex-col">
      <p className="text-red-600 px-4">Quantity: {counter}</p>
      <p className="text-red-600 px-4">Stock: {stock}</p>
      </div>
      <div className="inline-flex">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l" onClick={() => decrement()} disabled={counter == initial}>
        -
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r" onClick={() => increment()} disabled={counter == stock}> + </button>
      </div>
      {/* <button onClick={() => onAdd(counter)} >
        Agregar al carrito
      </button> */}
    </div>
  );
};

export default Itemcount;

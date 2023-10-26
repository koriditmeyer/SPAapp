import {React,useState} from 'react';

const Itemcount = ({inital,stock,onAdd}) => {

    const  [counter, setCounter] = useState(initial);
    const increment = () => {
      if (counter < stock) {
        setCounter(counter + 1);
      }
    };
  
    const decrement = () => {
      if (counter > 1) {
        setCounter(counter - 1);
      }
    };
  
    return (
      <div>
        <button onClick={() => increment()}> Incrementar</button>
        <p>Contador:{counter}</p>
        <button onClick={() => decrement()}> Decrementar</button>
        <button onClick={() => onAdd(counter)}> Agregar al carrito</button>
      </div>
    );
  };

export default Itemcount;
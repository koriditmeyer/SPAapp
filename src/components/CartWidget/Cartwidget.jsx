import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const Cartwidget = () => {
    const { totalQuantity } = useContext(CartContext);
  
    return (
      <div className="sm:flex hidden justify-center items-center">
        <div className="relative">
          {totalQuantity ? (
            <div className="absolute -top-1 right-0">
              <p className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 p-2 text-xs text-white">
                {totalQuantity}
              </p>
            </div>
          ) : (
            <div></div>
          )}
          <ShoppingCartIcon className="h-[40px] " />
        </div>
        <div className="mt-7 text-xs xl:text-sm font-bold">Cart</div>
      </div>
    );
  };
  

export default Cartwidget;

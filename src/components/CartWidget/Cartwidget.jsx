import React from "react";

const Cartwidget = () => {
  return (
    <a href={`#Cart`} className="sm:flex hidden justify-center items-center">
      <div className="relative pr-5">
        <div className="absolute -top-1 left-3">
          <p className="flex h-2 w-2 items-center justify-center rounded-full bg-green-500 p-2 text-xs text-white">
            3
          </p>
        </div>
        <i className="bx bxs-cart"></i>
      </div>
      <p>Cart</p>
    </a>
  );
};

export default Cartwidget;

import React from "react";

const GlobalSpinner = () => {
  return (
    <div className="z-10 fixed inset-0  bg-black bg-opacity-50 flex justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-gray-900"></div>
    </div>
  );
};

export default GlobalSpinner;

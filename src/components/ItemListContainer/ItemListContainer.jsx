import React from "react";

const ItemListContainer = (greeting) => {
  return (
    <div>
      <p className="text-white">{greeting.message}</p>
    </div>
  );
};

export default ItemListContainer;

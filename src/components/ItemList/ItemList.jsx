import React from "react";
import Item from "../Item/Item";

const ItemList = ({ list }) => {
  return (
    <>
        {list.map((product, key) => (
          <Item key={key} properties={product} />
        ))}
    </>
  );
};

export default ItemList;

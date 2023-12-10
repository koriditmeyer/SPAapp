import React from "react";
import {Item} from "..";

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

import React from "react";
import { Item } from "..";

const ItemList = ({ list }) => {
  // const list = useLoaderData();
  // console.log(list)
  return (
    <>
  
      <div className=" gap-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
        {list.map((product, key) => (
          <Item key={key} properties={product} />
        ))}
      </div>
    </>
  );
};

export default ItemList;

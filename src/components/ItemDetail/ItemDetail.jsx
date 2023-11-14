import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ properties }) => {
  return (
    <article className="bg-white bg-opacity-90 rounded-lg shadow-md p-4 flex-grow ">
      <a className="flex justify-center ">
        <img
          className="h-[200px]  mix-blend-multiply "
          src={properties.image}
        ></img>
      </a>
      <p className="text-xl font-semibold mb-2 text-center">
        Title: {properties.title}
      </p>
      <p className="text-xl font-semibold mb-2 text-red-600">
        Price: {properties.price}$
      </p>
      <p className="">Rating: {properties.rating.rate}/5</p>
      <p className="text-gray-600">Description: {properties.description}</p>
      <ItemCount initial={1} stock={properties.rating.count} />
    </article>
  );
};

export default ItemDetail;

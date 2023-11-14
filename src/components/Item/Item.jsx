import React from "react";
import { Link } from "react-router-dom";

const Item = ({ properties }) => {
  return (
    <article className="max-w-sm rounded overflow-hidden shadow-lg flex-grow bg-white">
      <Link to={`/SPAapp/item/${properties.id}`}>
        <div className="flex justify-center ">
          <img className="h-[200px] p-2" src={properties.image}></img>
        </div>
        <div className="px-6 py-4">
          <p className="font-bold text-xl mb-2">Title: {properties.title}</p>
          <p className="text-gray-700 text-base">Price: {properties.price}$</p>
          <p className="text-gray-600">Rating: {properties.rating.rate}/5</p>
        </div>
      </Link>
    </article>
  );
};

export default Item;

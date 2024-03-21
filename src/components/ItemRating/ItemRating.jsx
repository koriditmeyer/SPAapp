import React from "react";
import { StarIcon } from "@heroicons/react/24/outline";

const ItemRating = (props) => {
  const starNumber = props.avgRating;
  const ratingNumber = props.ratings;
  // console.log(props)
  return (
    <div className="flex">
        <span className="mr-1 ">{starNumber}</span>
      {Array.from({ length: Math.round(starNumber) }, (_, i) => (
        <StarIcon key={i} className="stroke-[#F1B61F] fill-[#F1B61F] h-[20px]" />
      ))}
      {Array.from({ length: 5-Math.round(starNumber) }, (_, i) => (
        <StarIcon key={i} className="stroke-[#F1B61F]  h-[20px]" />
      ))}
      {ratingNumber>=0 && <span className="ml-3 text-blue-500">{ratingNumber} ratings</span>}
    </div>
  );
};

export default ItemRating;

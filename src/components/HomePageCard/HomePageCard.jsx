import React from "react";
import { Link, createSearchParams } from "react-router-dom";

const HomePageCard = ({ title, img, text, link="", subcategory=false }) => {
  const searchCategory = (category) => {
      let search= `/search?${createSearchParams(
        subcategory ? 
        {subCategory: `${category}`}
        :{category: `${category}`}
      )}`
      return search
  };
  
  return (
    <div className="flex flex-col h-auto bg-white z-30 m-3">
      <Link to={searchCategory(link)}>
        <div className="text-lg xl:text-xl font-semibold ml-4 mt-4">
          {title}
        </div>
        <div className="h-auto m-4  flex-grow">
          <img className="h-auto w-[100%] object-cover " src={img} />
        </div>
        <div className=" items-end text-xs xl:text-sm text-blue-400 ml-4 pb-2">
          {text}
        </div>
      </Link>
    </div>
  );
};

export default HomePageCard;

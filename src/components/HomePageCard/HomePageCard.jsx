import React from "react";

const HomePageCard = ({ title, img, link }) => {
  return (
    <div className="flex flex-col h-auto bg-white z-30 m-3">
      <div className="text-lg xl:text-xl font-semibold ml-4 mt-4">{title}</div>
      <div className="h-auto m-4  flex-grow">
        <img className="h-auto w-[100%] object-cover " src={img} />
      </div>
      <div className=" items-end text-xs xl:text-sm text-blue-400 ml-4 pb-2">{link}</div>
    </div>
  );
};

export default HomePageCard;

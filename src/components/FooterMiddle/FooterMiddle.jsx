import React from "react";
import { FooterMiddleList } from "..";
import { middleList } from "../../constants";
import { logo } from "../../assets";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

const FooterMiddle = () => {
  return (
    <div className=" bg-amazon-light text-white">
      <div className="max-w-5xl w-full  grid py-10 px-4 md:px-8  grid-cols-2 sm:grid-cols-4 gap-4 place-items-center items-start  m-auto">
        {middleList.map((item) => (
          <FooterMiddleList
            key={item._id}
            title={item.title}
            listItems={item.listItems}
          />
        ))}
      </div>
      <div className="w-full flex gap-6 items-center justify-center py-6">
        <div>
          <img src={logo} alt="logo" className="w-20 pt-3" />
        </div>
        <div className="flex gap-2 ">
          <p className="flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon-yellow cursor-pointer duration-200 px-2 py-1">
            <GlobeAltIcon className="h-[20px] stroke-[2px]" />
            English
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default FooterMiddle;

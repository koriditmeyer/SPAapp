import React from "react";
import { bottomList } from "../../constants";

const FooterBottom = () => {
  return (
    <div className=" bg-amazon py-8">
      <div className="max-w-5xl mx-auto  grid grid-cols-4 place-content-center  gap-3 text-gray-400 mb-4">
        {bottomList.map((item, i) => (
          <div className="group cursor-pointer px-8 hidden md:inline-block " key={i}>
            <h3 className="w-24 font-semibold text-[12px] group-hover:underline text-[#DDD] leading-3 mb-[2px]">
              {item.title}
            </h3>
            <p className=" tracking-tight text-[12px] group-hover:underline text-[#999] leading-3">
              <a href={item.link}>{item.description}</a>
            </p>
          </div>
        ))}
      </div>
      <div className="text-white text-xs ">
        <ul className="flex flex-row gap-2 place-content-center ">
          <li>
            <a href="#">Conditions of Use</a> |
          </li>
          <li>
            <a href="#">Privacy Notice</a> |
          </li>
          <li>
            <a href="#">Terms and Conditions</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col text-white text-sm">
        <p className="m-auto">
          © 1996-2022, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;

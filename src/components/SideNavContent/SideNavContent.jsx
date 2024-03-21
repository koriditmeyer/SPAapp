import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";

const SideNavContent = ({title,data }) => {
  return (
    <div className="py-3 border-b-[1px] border-b-gray-300">
      <h3 className="text-lg font-titleFont font-semibold mb-1 px-6">
        {title}
      </h3>
      <ul className="text-sm">
        {data.map((e,key)=>(
        <Link to={e.link} key={key} onClick={e.action} className={`flex items-center justify-between  px-6 py-2 ${e.active ? "cursor-pointer hover:bg-zinc-200": "cursor-default text-gray-300"}`}>
        {e.text}
          <span>
            <ChevronRightIcon className="h-[18px] inline-block stroke-[2px] " />
          </span>
        </Link>
        ))}
      </ul>
    </div>
  );
};

export default SideNavContent;

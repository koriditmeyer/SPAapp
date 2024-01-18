import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";

const SideNavContent = ({title,one,two,three }) => {
  return (
    <div className="py-3 border-b-[1px] border-b-gray-300">
      <h3 className="text-lg font-titleFont font-semibold mb-1 px-6">
        {title}
      </h3>
      <ul className="text-sm">
        <Link to={one.link} onClick={one.action} className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
        {one.text}
          <span>
            <ChevronRightIcon className="h-[18px] inline-block stroke-[2px] " />
          </span>
        </Link>
        <Link to={two.link} onClick={two.action} className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
        {two.text}
          <span>
            <ChevronRightIcon className="h-[18px] inline-block stroke-[2px] " />
          </span>
        </Link>
        <Link to={three.link} onClick={three.action} className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
        {three.text}
          <span>
            <ChevronRightIcon className="h-[18px] inline-block stroke-[2px] " />
          </span>
        </Link>
      </ul>
    </div>
  );
};

export default SideNavContent;

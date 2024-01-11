import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const SideNavContent = ({title,one,two,three }) => {
  return (
    <div className="py-3 border-b-[1px] border-b-gray-300">
      <h3 className="text-lg font-titleFont font-semibold mb-1 px-6">
        {title}
      </h3>
      <ul className="text-sm">
        <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
        {one}
          <span>
            <ChevronRightIcon className="h-[18px] inline-block stroke-[2px] " />
          </span>
        </li>
        <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
        {two}
          <span>
            <ChevronRightIcon className="h-[18px] inline-block stroke-[2px] " />
          </span>
        </li>
        <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
        {three}
          <span>
            <ChevronRightIcon className="h-[18px] inline-block stroke-[2px] " />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default SideNavContent;

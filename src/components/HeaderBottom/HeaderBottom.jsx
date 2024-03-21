import React, { useEffect, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import SideNav from "../SideNav/SideNav";

const HeaderBottom = ({ sidebar, setSidebar}) => {
  // const [sidebar, setSidebar] = useState(false);

  return (
    <div className="flex h-[45px] items-center bg-amazon-light text-white  px-6 overflow-y-hidden overflow-x-scroll hidden-scrollbar touch-auto">
      <ul className="flex items-center gap-2 text-sm tracking-wide whitespace-nowrap ">
        <li className="headerHover hidden md:flex" onClick={() => setSidebar(true)}>
          <Bars3Icon className="h-[20px] m-auto stroke-[2px] inline-block pr-1" />
          All
        </li>
        <li className="headerHover">Today's Deals</li>
        <li className="text-gray-500">Customer Service</li>
        <li className="text-gray-500">Registry</li>
        <li className="text-gray-500">Gift Cards</li>
        <li className="text-gray-500">Sell</li>
      </ul>
      {/* side Bar */}
      {sidebar && <SideNav closeMenu={() => setSidebar(false)}/>}
    </div>
  );
};

export default HeaderBottom;

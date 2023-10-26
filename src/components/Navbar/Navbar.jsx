import { useState } from "react";

// import things from assets like logo, images...
import { logo, logoText } from "../../assets";

// import navlinks
import { navLinks } from "../../constants";

// import cartwidget
import Cartwidget from "../CartWidget/cartwidget";

const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center">
      {/* logo */}
      <img src={logo} alt="SPA-logo" className="w-[25px] h-[32px]"/>
      <img src={logoText} alt="SPA-logo-text" className="w-[90px] h-[32px] pl-2" />
      {/* Navbar for large devices */}
      <ul className="list-none sm:flex hidden justify-center items-center flex-1">
        {/* map over all navigation items */}
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`text-white cursor-pointer text-[16px] 
            mr-10 `}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>
              <i className={`${nav.icon} px-2`}></i>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      {/* Cart widget part */}
      <div
        key="cart"
        className="text-white font-normal cursor-pointer text-[16px] 
            mr-0"
        onClick={() => setActive(nav.title)}
      >
        <Cartwidget />
      </div>

      {/* Navbar for mobile devices -- to be built */}
    </nav>
  );
};

export default Navbar;

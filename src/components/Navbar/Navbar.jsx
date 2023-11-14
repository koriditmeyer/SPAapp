import React from "react";
import { Link} from "react-router-dom";

// import things from assets like logo, images...
import { logo, logoText } from "../../assets";

// import navlinks
import { navLinks } from "../../constants";

// import cartwidget
import Cartwidget from "../CartWidget/Cartwidget";

const Navbar = () => {
  return (
    <div className="sm:px-16 px-6 flex justify-center items-center">
      <div className="xl:max-width: 1280px w-full">
        <div className="w-full flex py-6 justify-between items-center">
          {/* logo */}
          <Link to={`SPAapp/`} className="flex">
            <img src={logo} alt="SPA-logo" className="w-[25px] h-[32px]" />
            <img
              src={logoText}
              alt="SPA-logo-text"
              className="w-[90px] h-[32px] pl-2"
            />
          </Link>
          {/* Navbar for large devices */}
          <ul className="list-none sm:flex hidden justify-center items-center flex-1">
            {/* map over all navigation items */}
            {navLinks.map((nav, index) => (
              <li
                key={index}
                className={`text-white cursor-pointer text-[16px] 
            mr-10 `}
              > 
                <Link to={`SPAapp/${nav.id}`}>
                  <i className={`${nav.icon} px-2`}></i>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
          {/* Cart widget part */}
          <div
            key="cart"
            className="text-white font-normal cursor-pointer text-[16px] 
            mr-0"
          >
            <Link to={'SPAapp/cart'}>
            <Cartwidget />
            </Link>
          </div>
          {/* Navbar for mobile devices -- to be built */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

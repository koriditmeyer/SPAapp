/*
 * IMPORTS
 */
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { logo } from "../../assets"; // import things from assets like logo, images...
import { navLinks } from "../../constants"; // import navlinks
import { CartWidget, Search, ThemeWidget } from "../";

/*
 * COMPONENT
 */
const Navbar = () => {
  /*
   * Function to set if Navlink is active 
   ! Can't use activeClassName on new react-router-dom v6
   */
  function classState() {
    return ({ isActive, isPending, isTransitioning }) =>
      [
        isPending ? "text-gray-300" : "",
        isActive ? "text-green-500 text-[18px]" : "",
        isTransitioning ? "text-gray-500 " : "",
      ].join(" ");
  }

  return (
    <nav className="min-w-[1000px]">
      <div className="flex bg-amazon text-white h-[60px]">
        {/* LEFT */}
        <div className="flex items-center m-4">
          {/* logo */}
          <Link to={`SPAapp/`} className="flex">
            <img src={logo} alt="SPA-logo" className="w-auto h-[35px] m-2" />
          </Link>
          <div className="px-4">
            <div className="text-xs xl:text-sm">Deliver to</div>
            <div className="text-xs xl:text-base font-bold">東京 151-0071</div>
          </div>
        </div>
        {/* MIDDLE */}
        <div className="flex grow relative items-center">
          <Search />
        </div>
        {/* RIGHT */}
        <div className="flex items-center m-4">
          <div className="px-4">
            <div className="text-xs xl:text-sm">Hello, sign in</div>
            <div className="text-xs xl:text-base font-bold">
              Accounts & Lists
            </div>
          </div>
          <div className="px-4">
            <div className="text-xs xl:text-sm">Returns</div>
            <div className="text-xs xl:text-base font-bold">& Orders</div>
          </div>
          <div className="flex px-3 cursor-pointer ">
            {/* CART WIDGET */}
            <NavLink to={"SPAapp/cart"} className={classState()}>
              <CartWidget />
            </NavLink>
          </div>
          <div>
            <ThemeWidget />
          </div>
        </div>
      </div>
      <div className="flex bg-amazon-ligh_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6">
        <div>All</div>
        <div>Today's Deals</div>
        <div>Customer Service</div>
        <div>Registry</div>
        <div>Gift Cards</div>
        <div>Sell</div>
      </div>
    </nav>
  );
};

export default Navbar;

<div className="w-full flex py-6 justify-between items-center">
  {/* Navbar for large devices */}
  <ul className="list-none sm:flex hidden justify-center items-center flex-1">
    {/* map over all navigation items */}
    {/* {navLinks.map((nav, index) => (
    <li
      key={index}
      className="text-white cursor-pointer text-[16px] 
  mr-10"
    >
      <NavLink to={`SPAapp/${nav.id}`} className={classState()}>
        <i className={`${nav.icon} px-2`}></i>
        {nav.title}
      </NavLink>
    </li>
  ))} */}
  </ul>
  {/* Navbar for mobile devices -- to be built */}
</div>;
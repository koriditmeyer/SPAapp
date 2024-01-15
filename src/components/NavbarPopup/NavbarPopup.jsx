import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const NavbarPopup = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="hidden md:inline-flex relative z-50 w-[120%]"
    >
      <div className="absolute right-[10%] w-full h-6  ">
        <div className="w-full h-6"></div>
      </div>
      <div className=" z-50 absolute right-[15%] triangleUp">
        <div className="w-full h-6"></div>
      </div>
      <div className="text-sm text-gray-800 absolute  mt-2  -right-44 bg-white border border-gray-300 rounded-sm shadow-lg  p-3 flex flex-col gap-2">
        <div className="flex flex-col justify-center items-center gap-2 border-b  border-zinc-300 ">
          <Link to="/login">
            <button className="btn w-[150px]">Sign in</button>
          </Link>
          <p className="text-xs">
            New customer?
            <Link
              to={"/register"}
              className="text-xs text-blue-600 hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer duration-100"
            >
              {" "}
              Start here.
            </Link>{" "}
          </p>
          <span className="w-full h-[1px] inline-flex"></span>
        </div>
        <div className="flex flex-row gap-6 ">
          <div className="whitespace-nowrap border-r border-zinc-300 p-2 min-w-[250px]">
            <div className="font-bold py-2 border-gray-300">Your Lists</div>
            <a
              href="#"
              className="text-xs block py-1 hover:text-orange-700 hover:underline"
            >
              Create a List
            </a>
            <a
              href="#"
              className="text-xs block py-1 hover:text-orange-700 hover:underline"
            >
              Find a List or Registry
            </a>
          </div>
          <div className="p-2">
            <div className="font-bold py-2 border-gray-300">Your Account</div>
            <a
              href="#"
              className="text-xs block py-1  hover:text-orange-700 hover:underline"
            >
              Account
            </a>
            <a
              href="#"
              className="text-xs block py-1 hover:text-orange-700 hover:underline"
            >
              Orders
            </a>
            <a
              href="#"
              className="text-xs block py-1 hover:text-orange-700 hover:underline"
            >
              Recommendations
            </a>
            <a
              href="#"
              className="text-xs block py-1 hover:text-orange-700 hover:underline"
            >
              Browsing History
            </a>
            <a
              href="#"
              className="text-xs block py-1 hover:text-orange-700 hover:underline"
            >
              Watchlist
            </a>
            <a
              href="#"
              className="text-xs block py-1 hover:text-orange-700 hover:underline  "
            >
              Video Purchases & Rentals
            </a>
            <a
              href="#"
              className="text-xs block py-1 hover:text-orange-700 hover:underline "
            >
              Kindle Unlimited
            </a>
            <a
              href="#"
              className="text-xs block py-1 hover:text-orange-700 hover:underline"
            >
              Content & Devices
            </a>
            <a
              href="#"
              className="text-xs block py-1 hover:text-orange-700 hover:underline"
            >
              Subscribe & Save Items
            </a>
            <a
              href="#"
              className="text-xs block py-1 hover:text-orange-700 hover:underline whitespace-nowrap "
            >
              Memberships & Subscriptions
            </a>
            <a
              href="#"
              className="text-xs block py-1 hover:text-orange-700 hover:underline"
            >
              Music Library
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NavbarPopup;

import { UserCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useRef } from "react";
import SideNavContent from "../SideNavContent/SideNavContent";
import { motion } from "framer-motion";

const SideNav = ({ closeMenu }) => {
  // -------- Disable the side menu on clic outside
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        closeMenu()
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
  }, [ref]);
  return (
    <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon-blue bg-opacity-50 z-50">
      <div className="w-full h-full relative">
        <motion.div
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          ref={ref}
          className="w-[80%] md:w-[350px] h-full bg-white border border-black"
        >
          <div className="w-full bg-amazon-light text-white py-2 px-6 flex items-center gap-4">
            <UserCircleIcon className="h-[20px] stroke-[2px] pr-1" />
            <h3 className=" font-titleFont font-bold text-lg tracking-wide">
              Hello, Sign In
            </h3>
          </div>
          <SideNavContent
            title="Digital Content & Devices"
            one="Amazon Music"
            two="Kindle E-readers & Books"
            three="Amazon Appstore"
          />
          <SideNavContent
            title="Shop By Department"
            one="Electronics"
            two="Computers"
            three="Smart Home"
          />
          <SideNavContent
            title="Programs & Features"
            one="Gift Cards"
            two="Amazon live"
            three="International Shopping"
          />
          <SideNavContent
            title="Help & Settings"
            one="Your Account"
            two="Customer Service"
            three="Contact us"
          />
          <span
            onClick={closeMenu}
            className="absolute cursor-pointer top-0 left-[90%] md:left-[360px] w-10 h-10 text-white
         flex items-center justify-center  hover:bg-red-500 hover:text-white duration-300"
          >
            <XMarkIcon />
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default SideNav;

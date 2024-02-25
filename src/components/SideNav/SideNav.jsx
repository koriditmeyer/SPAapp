import { UserCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useRef } from "react";
import SideNavContent from "../SideNavContent/SideNavContent";
import { motion } from "framer-motion";
import {  useSelector } from "react-redux";
import { Link } from "react-router-dom";

import useLogout from "../../services/handleLogout";

const SideNav = ({ closeMenu }) => {
  // -------- Disable the side menu on clic outside
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        closeMenu();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
  }, [ref]);

  const userInfo = useSelector((state) => state.amazonReducer.userInfo);
  //sign out
  const handleLogout = useLogout();
  const handleLogoutClick = () => {
    handleLogout()
    closeMenu()
  };

  return (
    <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon-blue bg-opacity-50 z-50">
      <div className="w-full h-full relative ">
        <motion.div
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          ref={ref}
          className="w-[80%] md:w-[350px] h-full bg-white border border-black overflow-y-scroll scroll-smooth "
        >
          <div className=" bg-amazon-light text-white py-2 px-6 flex items-center gap-4  ">
            {userInfo?.verified ? (
              <Link
                to={"/profile"}
                className=" flex justify-left items-center gap-2 "
              >
                <div className=" rounded-full h-10 w-10">
                  <img src={userInfo.profilePhoto}></img>
                </div>
                <div className="flex flex-col">
                  <span className=" font-semibold text-base">
                    {userInfo.first_name}
                  </span>
                  <span className=" text-xs text-slate-500 font-semibold">
                    Main User
                  </span>
                </div>
              </Link>
            ) : (
              <Link to="/login" className="flex justify-left items-center">
                <UserCircleIcon className="h-10 stroke-[2px] pr-1" />
                <h3 className=" font-titleFont font-bold text-lg tracking-wide">
                  Hello, Log In
                </h3>
              </Link>
            )}
          </div>

          <SideNavContent
            title="Digital Content & Devices"
            one={{ text: "Amazon Music", link: "" }}
            two={{ text: "Kindle E-readers & Books" }}
            three={{ text: "Amazon Appstore" }}
          />
          <SideNavContent
            title="Shop By Department"
            one={{ text: "Electronics" }}
            two={{ text: "Computers" }}
            three={{ text: "Smart Home" }}
          />
          <SideNavContent
            title="Programs & Features"
            one={{ text: "Gift Cards" }}
            two={{ text: "Amazon live" }}
            three={{ text: "International Shopping" }}
          />
          <SideNavContent
            title="Help & Settings"
            one={{ text: "Your Account", link: "/profile" }}
            two={{ text: "Customer Service" }}
            three={
              userInfo?.verified
                ? { text: "Log out", link: "/", action: handleLogoutClick }
                : { text: "Log in", link: "/login" }
            }
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

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useLogout from "../../services/handleLogout";

const NavbarPopup = ({ closePopup }) => {
  const userInfo = useSelector((state) => state.amazonReducer.userInfo);

  //sign out
  const handleLogout = useLogout();
  const handleLogoutClick = () => {
    handleLogout();
    closePopup();
  };

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
          {userInfo?.verified ? (
            <Link
              to={"/profile"}
              className="p-2 w-full bg-[#E7F4F5] rounded-md flex justify-between items-center"
            >
              <div className="flex items-center gap-2">
                <div className=" rounded-full h-10 w-10">
                  <img src={userInfo.profilePhoto}></img>
                </div>
                <div className="flex flex-col">
                  <span className=" font-semibold text-base">
                    {userInfo.first_name}
                  </span>
                  <span className=" py-1 uppercase">
                    {userInfo.roles.map((r,key)=>(<span key={key} className="text-xs font-semibold p-1 mr-1  rounded-sm bg-[#177E8F] text-white">{r}</span>))}
                  </span>
                </div>
              </div>
              <div className="">
                <span className=" text-[#177E8F]  hover:text-orange-700 hover:underline">
                  Manage your profile
                </span>
                <ChevronRightIcon className="h-[15px] m-auto stroke-[3px]  stroke-[#177E8F] pl-2 inline-block" />
              </div>
            </Link>
          ) : (
            <>
              <Link to="/login">
                <button className="btn w-[150px]">Log in</button>
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
            </>
          )}
          <span className="w-full h-[1px] inline-flex"></span>
        </div>
        <div className="flex flex-row gap-6 ">
          <div className="whitespace-nowrap border-r border-zinc-300 px-2 min-w-[250px]">
            <div className="font-bold py-2 border-gray-300 text-gray-200 cursor-default">Your Lists</div>
            <a
              href="#"
              className="text-gray-200 text-xs block py-1 cursor-default"
            >
              Create a List
            </a>
            <a
              href="#"
              className="text-gray-200 text-xs block py-1 cursor-default"
            >
              Find a List or Registry
            </a>
          </div>
          <div className="p-2 min-w-[200px]">
            <Link to={"/profile"} className="font-bold py-2 border-gray-300">
              Your Profile
            </Link>
            <Link
              to={"/profile/account"}
              className="text-xs block py-1  hover:text-orange-700 hover:underline"
            >
              Account
            </Link>
            <Link to={"/profile/orders"}
              className="text-xs block py-1 hover:text-orange-700 hover:underline"
            >
              Orders
            </Link>
            <a
              href="#"
              className=" text-gray-200 text-xs block py-1 cursor-default"
            >
              Recommendations
            </a>
            <a
              href="#"
              className="text-gray-200 text-xs block py-1 cursor-default"
            >
              Browsing History
            </a>
            <a
              href="#"
              className="text-gray-200 text-xs block py-1 cursor-default"
            >
              Watchlist
            </a>
            <a
              href="#"
              className="text-gray-200 text-xs block py-1 cursor-default  "
            >
              Video Purchases & Rentals
            </a>
            <a
              href="#"
              className="text-gray-200 text-xs block py-1 cursor-default"
            >
              Kindle Unlimited
            </a>
            <a
              href="#"
              className="text-gray-200 text-xs block py-1 cursor-default"
            >
              Content & Devices
            </a>
            <a
              href="#"
              className="text-gray-200 text-xs block py-1 cursor-default"
            >
              Subscribe & Save Items
            </a>
            <a
              href="#"
              className="text-gray-200 text-xs block py-1 cursor-default "
            >
              Memberships & Subscriptions
            </a>
            <a
              href="#"
              className="text-gray-200 text-xs block py-1 cursor-default"
            >
              Music Library
            </a>
            {userInfo?.verified && (
              <div
                onClick={handleLogoutClick}
                className="text-xs block py-1 hover:text-orange-700 hover:underline"
              >
                Log out
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NavbarPopup;

import { UserCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useRef } from "react";
import SideNavContent from "../SideNavContent/SideNavContent";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import useLogout from "../../services/handleLogout";
import SearchFilterQuery from "../SearchFilter/SearchFilterLoader";
import SearchCategoryFilterQuery from "../SearchFilter/SearchCategoryFilterLoader";

const SideNav = ({ closeMenu }) => {
  // -------- Disable the side menu on clic outside
  const ref = useRef();

  //******* GET DATA OF CATEGORIES */
  // get data
  const { data, isLoading } = SearchFilterQuery(false);
  //  console.log(data)
  // get categories unique
  const {
    data: dataCategory,
    isLoading: isLoadingDataCategory,
    isError,
    error,
  } = SearchCategoryFilterQuery(null, false);

  // Iterate over each item in `dataCategory`
  let results = [];
  dataCategory?.payload?.forEach((item) => {
    // Find the parent category for the current item's category
    const parentCategory = data?.payload.find((category) =>
      category.subcategories?.some(
        (subcategory) => subcategory.id === item.category
      )
    );
    // If a parent category is found, log the name of the parent category and the count
    if (parentCategory) {
      let result = {
        category: parentCategory._id,
        text: parentCategory.name,
        active: true,
        link: `/search?category=${parentCategory._id}`,
        count: item.count,
      };
      results.push(result);
    }
  });
  let categoryCounts = results?.reduce(
    (acc, item) => {
      const { category, count, text, active, link } = item;

      // Initialize the category entry in the accumulator if it doesn't exist
      if (!acc[category]) {
        acc[category] = { text, active, link, count: 0 };
      }
    
      // Safely increment the count since the category entry is guaranteed to exist
      acc[category].count += count;
    
      return acc;
    },
    {}
  );
  // Convert the resulting object back into an array
  const reducedData = Object.entries(categoryCounts).map(
    ([category, details]) => ({
      category,
      ...details
    })
  );

  //************************* */

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
    handleLogout();
    closeMenu();
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
                <div className="  h-10 w-10">
                  <img src={userInfo.profilePhoto} className="rounded-full"></img>
                </div>
                <div className="flex flex-col">
                  <span className=" font-semibold text-base">
                    {userInfo.first_name}
                  </span>
                  <span className=" text-xs text-slate-500 font-semibold">
                    {userInfo.roles}
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
            title="Shop By Department"
            data={reducedData}
          />
          <SideNavContent
            title="Programs & Features"
            data={[
              { text: "Gift Cards", active: false },
              { text: "Amazon live", active: false },
              { text: "International Shopping", active: false },
            ]}
          />
          <SideNavContent
            title="Help & Settings"
            data={[
              { text: "Your Account", link: "/profile", active: true },
              { text: "Customer Service", active: false },
              userInfo?.verified
                ? {
                    text: "Log out",
                    link: "/",
                    action: handleLogoutClick,
                    active: true,
                  }
                : { text: "Log in", link: "/login", active: true },
            ]}
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

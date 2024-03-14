import React, { useRef } from "react";
import SearchFilterQuery from "./SearchFilterLoader";
import Skeleton from "react-loading-skeleton";
import { XMarkIcon, CheckIcon } from "@heroicons/react/24/outline";
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SearchFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  let category = searchParams.get("category") || "All";
  const { data, isLoading } = SearchFilterQuery("category", false);

  // Function to update search params
  const updateCategory = (newCategory) => {
    const newSearchParams = new URLSearchParams(searchParams);
    // If "All" is selected, remove the category param. Otherwise, set/update it.
    if (newCategory === "All") {
      newSearchParams.delete("category");
    } else {
      newSearchParams.set("category", newCategory);
    }
    // Set page to 1 every time category changes
    newSearchParams.set("page", "1");
    navigate(`?${newSearchParams.toString()}`);
  };



  return (
    <div className="px-2">
      <h3 className=" font-bold py-2">Categories</h3>
      <div
        className="w-full max-h-24 overflow-hidden overflow-y-scroll  bg-amazon-background rounded-md p-2 flex flex-wrap gap-2 "
      >
        {isLoading ? (
          <Skeleton className="w-12" />
        ) : (
          data?.payload.map((item, index) => (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              key={index}
              onClick={() => updateCategory(item)}
              className={`btn p-2 flex items-center gap-2 w-auto 
              ${
                item != category && "bg-orange-100"
              }`}
            >
              <p>{item}</p>
              {item === category ? (
                <CheckIcon className="w-4 stroke-lime-600 stroke-2" />
              ) : (
                <XMarkIcon className="w-4 stroke-red-600 stroke-2" />
              )}
            </motion.button>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchFilter;

import React, { useState } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import { useNavigate, useSearchParams } from "react-router-dom";

const SortComponent = ({sortCategory}) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort");

  const updateSearchParams = (sort) => {
    // Clone the current search parameters
    const newSearchParams = new URLSearchParams(searchParams);
    sort && newSearchParams.set("sort", sort);
    const pathName= window.location.pathname
    navigate(`${pathName}?${newSearchParams.toString()}`);
  };

  return (
    <div className="flex items-center text-sm text-gray-700 gap-1">
      <p>Sort: </p>
      {!sort || sort === "desc" ? (
        <>        
        <span className="capitalize">{sortCategory} Descending</span>
        <ArrowDownIcon
          onClick={() => updateSearchParams("asc")}
          className="h-[20px] m-auto stroke-[2px] inline-block cursor-pointer"
        />
        </>
      ) : (
        <>
          <span className="capitalize">{sortCategory} Ascending</span>
          <ArrowUpIcon
            onClick={() => updateSearchParams("desc")}
            className="h-[20px] m-auto stroke-[2px] inline-block cursor-pointer"
          />
        </>
      )}
    </div>
  );
};

export default SortComponent;

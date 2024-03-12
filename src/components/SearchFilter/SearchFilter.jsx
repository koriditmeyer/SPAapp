import React from "react";
import SearchFilterQuery from "./SearchFilterLoader";
import Skeleton from "react-loading-skeleton";
import { XMarkIcon, CheckIcon } from "@heroicons/react/24/outline";
import { useSearchParams, useNavigate } from "react-router-dom";

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

  // Ensure data.payload exists and prepend "All" if necessary
  const categories = data && data.payload ? ["All", ...data.payload.filter(item => item !== "All")] : [];

  return (
    <div className="p-2">
      <div className="w-full bg-white rounded-md p-2 flex gap-2 ">
        {isLoading ? (
          <Skeleton className="w-12" />
        ) : (
          categories.map((item, index) => (
            <button key={index} onClick={() => updateCategory(item)}
              className="btn p-2 flex items-center gap-2 w-auto"
            >
              <p>{item}</p>
              {item === category ? (
                <CheckIcon className="w-4 stroke-lime-600 stroke-2"/>
              ) : (
                <XMarkIcon className="w-4 stroke-red-600 stroke-2"/>
              )}
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchFilter;

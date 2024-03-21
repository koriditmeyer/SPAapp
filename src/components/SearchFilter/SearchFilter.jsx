import React, { useRef } from "react";
import SearchFilterQuery from "./SearchFilterLoader";
import Skeleton from "react-loading-skeleton";
import { XMarkIcon, CheckIcon } from "@heroicons/react/24/outline";
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SearchCategoryFilterQuery from "./SearchCategoryFilterLoader";

const SearchFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  let searchKeyWord = searchParams.get("searchTerm");
  let category = searchParams.get("category") || "0";
  let subcategory = parseInt(searchParams.get("subCategory"), 10) || 0;

  // get data
  const { data, isLoading } = SearchFilterQuery(false);
  // get subcategories
  const subCategories = data?.payload.filter((el) =>
    el._id?.includes(category)
  )[0].subcategories;

  // get categories unique
  const { data: dataCategory, isLoading: isLoadingDataCategory } =
    SearchCategoryFilterQuery(searchKeyWord, false);
  console.log(dataCategory)
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
      let result = { category: parentCategory._id, count: item.count };
      results.push(result);
    }
  });
  let categoryCounts  = results?.reduce((acc, { category, count }) => {
    acc[category] = (acc[category] || 0) + count;
    return acc;
  }, {});
  // Convert the resulting object back into an array
  const reducedData = Object.entries(categoryCounts ).map(([category, count]) => ({
    category,
    count,
  }));
  console.log(reducedData)

  // console.log(reducedData);

  // Function to update search params
  const updateCategory = (newCategory) => {
    const newSearchParams = new URLSearchParams(searchParams);
    // If "All" is selected, remove the category param. Otherwise, set/update it.
    // console.log(newCategory)
    if (newCategory === "All" || !newCategory) {
      newSearchParams.delete("category");
    } else {
      newSearchParams.delete("subCategory");
      newSearchParams.set("category", newCategory);
    }
    // Set page to 1 every time category changes
    newSearchParams.set("page", "1");
    navigate(`?${newSearchParams.toString()}`);
  };

  const updateSubCategory = (newCategory) => {
    const newSearchParams = new URLSearchParams(searchParams);
    // If "All" is selected, remove the category param. Otherwise, set/update it.
    // console.log(newCategory)
    if (newCategory === "All" || !newCategory) {
      newSearchParams.delete("subCategory");
    } else {
      newSearchParams.set("subCategory", newCategory);
    }
    // Set page to 1 every time category changes
    newSearchParams.set("page", "1");
    navigate(`?${newSearchParams.toString()}`);
  };

  const deleteSearchKeyWord = () => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete("searchTerm");
    // Set page to 1 every time category changes
    newSearchParams.set("page", "1");
    navigate(`?${newSearchParams.toString()}`);
  };

  return (
    <div className="px-2">
      {searchKeyWord && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 2, damping: 3, type: "spring" }}
        >
          <h3 className=" font-bold py-2">Search Keyword</h3>
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.9 }}
            className={`btn p-2 flex items-center gap-2 w-auto cursor-default`}
          >
            <p className="">{searchKeyWord}</p>
            <XMarkIcon
              className="w-4 mx-1 stroke-red-600 stroke-2 cursor-pointer "
              onClick={deleteSearchKeyWord}
            />
          </motion.button>
        </motion.div>
      )}
      <h3 className=" font-bold py-2">Categories</h3>
      <div className="w-full max-h-72 overflow-hidden overflow-y-scroll  bg-amazon-background rounded-md p-2 flex flex-wrap gap-2 ">
        {isLoading ? (
          <Skeleton className="w-12" />
        ) : (
          data?.payload.map((item, index) => (
            reducedData?.some((c)=>c.category==item._id) && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              key={index}
              onClick={() => updateCategory(item._id)}
              className={`btn p-2 flex items-center gap-2 w-auto 
              ${item._id != category && "bg-orange-100"}`}
            >
              <p>{item.name}</p>
              <p className="rounded-md bg-lime-600 px-1 text-white text-xs ">{reducedData?.find((c)=>c.category==item._id)?.count}</p>
              {item._id === category ? (
                <CheckIcon className="w-4 stroke-lime-600 stroke-2" />
              ) : (
                <XMarkIcon className="w-4 stroke-red-600 stroke-2" />
              )}
            </motion.button>
            )
          ))
        )}
      </div>
      {category != "0" && (
        <>
          <h3 className=" font-bold py-2">Subcategories</h3>
          <div className="w-full max-h-72 overflow-hidden overflow-y-scroll  bg-amazon-background rounded-md p-2 flex flex-wrap gap-2 ">
            {isLoading ? (
              <Skeleton className="w-12" />
            ) : (
              subCategories?.map((item, index) => (
                dataCategory?.payload?.some((c)=>c.category==item.id) &&
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  key={index}
                  onClick={() => updateSubCategory(item.id)}
                  className={`btn p-2 flex items-center gap-2 w-auto 
              ${item.id != subcategory && "bg-orange-100"}`}
                >
                  <p>{item.name}</p>
                  <p className="rounded-md bg-lime-600 px-1 text-white text-xs ">{dataCategory?.payload?.find((c)=>c.category==item.id)?.count}</p>
                  {item.id === subcategory ? (
                    <CheckIcon className="w-4 stroke-lime-600 stroke-2" />
                  ) : (
                    <XMarkIcon className="w-4 stroke-red-600 stroke-2" />
                  )}
                </motion.button>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchFilter;

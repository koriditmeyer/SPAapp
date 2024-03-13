import React, { useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";

import { motion } from "framer-motion";
import ItemListContainerQuery from "../ItemListContainer/ItemListContainerLoader";
import { ProgressBar, SearchFilter } from "..";
import Skeleton from "react-loading-skeleton";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const { data, isLoading } = ItemListContainerQuery(searchParams, false);
  // const data = useLoaderData().payload;
  let search = Object.fromEntries([...searchParams]);
  let el = "";
  for (const e in search) {
    el = `` + e + `:"` + search[e] + `"` + " " + el;
  }

  //  console.log(data)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="border-b border-gray-200 p-2 shadow-xl inline-flex gap-2">
        {isLoading ? (
          <Skeleton className=" w-24" />
        ) : data ? (
          `1-${Math.min(
            data.payload.pagination.limit,
            data.payload.pagination.totalDocs
          )} of over ${data.payload.pagination.totalDocs} `
        ) : (
          "no "
        )}
         results for:
         <span className=" text-amazon-yellow_dark font-semibold">{el}</span>
      </div>
      <ProgressBar isLoading={isLoading} />
      <div className="m-auto pt-4 px-4">
        <div className="grid grid-cols-12 gap-2">
          <div className="hidden md:inline-block md:col-span-3 ">
            <SearchFilter/>
          </div>
          <div className="col-span-12 md:col-span-9">
            <Outlet />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SearchResults;

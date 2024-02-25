import React from "react";
import { Outlet, useLoaderData, useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ItemList } from "..";
import { motion } from "framer-motion";

const SearchResults = () => {
  const products = useLoaderData();
  const [searchParams] = useSearchParams();
 
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="border-b border-gray-200 p-2 shadow-xl">{`1-${
        products.length
      } of over 40,000 results for ${searchParams.get("searchTerm")}`}</div>
      <div className="m-auto pt-4 px-4">
        {/* {loading ? (
          <p className="text-white">Loading...</p>
        ) : ( */}
        {/* {products && ( */}
        <div className="grid grid-cols-12 gap-2">
          <div className="hidden md:inline-block md:col-span-3 bg-amazon-lightText">
            Filter (to be build)
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="text-xl xl:text-3xl font-bold">Results</h2>
            {/* <Outlet/> */}
            <ItemList list={products} />
          </div>
        </div>
        {/* )} */}
        {/* )} */}
      </div>
    </motion.div>
  );
};

export default SearchResults;

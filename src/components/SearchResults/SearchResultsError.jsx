import { motion } from "framer-motion";
import React from "react";
import { useRouteError } from "react-router-dom";

const SearchResultsError = () => {
    const error = useRouteError();
  
    return (
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-[70vh] max-w-constainer flex flex-col justify-center items-center pt-10 gap-5 font-extralight text-[#6A6A6A] px-10  "
      >
        <div className="flex flex-col gap-5">
            <p className=" text-4xl">{error.message}</p>
            <p>Try checking your spelling or use more general terms</p>
            <h3 className=" text-4xl">Need Help?</h3>
            <p><span className=" text-[#007185] ml-1 cursor-pointer">Visit the help section</span> or<span className=" text-[#007185] ml-1 cursor-pointer">contact us</span> </p>
        </div>
      </motion.article>
    );
  };

export default SearchResultsError;
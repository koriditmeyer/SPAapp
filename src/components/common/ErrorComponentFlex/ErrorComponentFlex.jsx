import { motion } from "framer-motion";
import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { ErrorDog } from "../../../assets";

const ErrorComponent = ({error}) => {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=" flex justify-center items-center  gap-5 font-extralight text-[#6A6A6A] px-2 "
    >
      <div className="flex-col">
      <h3 className=" text-6xl ">Oops</h3>
      <p className=" text-4xl pt-2">{error.message}</p>
      </div>
      <img
        src={ErrorDog}
        alt="error 404"
        className="relative w-80 rounded-lg p-4 "
      />
    </motion.article>
  );
};

export default ErrorComponent;

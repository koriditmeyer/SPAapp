import { motion } from "framer-motion";
import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { ErrorDog } from "../../../assets";

const ErrorElement = () => {
  const error = useRouteError();

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[70vh] flex flex-col justify-center items-center pt-10 gap-5 font-extralight text-[#6A6A6A] px-2 "
    >
      {isRouteErrorResponse(error) ? (
        <>
          <h3 className=" text-8xl">Oops!</h3>
          <h4 className=" text-8xl">{error.status}</h4>
          <p className=" text-4xl ">{error.statusText}</p>
          {error.data?.message && (
            <p className=" text-4xl">{error.data.message}</p>
          )}
        </>
      ) : (
        <>
          <h3 className=" text-8xl ">Oops</h3>
          <p className=" text-4xl">{error.message}</p>
        </>
      )}
      <img
        src={ErrorDog}
        alt="error 404"
        className="relative w-80 rounded-lg p-4 "
      />
    </motion.article>
  );
};

export default ErrorElement;
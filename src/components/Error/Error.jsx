import { motion } from "framer-motion";
import React from "react";
import { ErrorHome, ErrorDog } from "../../assets";
import useTailwindBreakpoints from "../../hooks/useTailwindBreakpoints";

const Error = () => {
  const breakpoints = useTailwindBreakpoints();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full flex flex-col justify-center items-center pt-10"
    >
      <motion.div
        animate={{
          scale: [1, 1.5, 1.5, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 2,
        }}
      >
        <img
          src={ErrorHome}
          alt="error 404"
          className="relative w-80 rounded-lg p-4 "
        />
        <img
          src={ErrorDog}
          alt="error 404"
          className="relative w-80 rounded-lg p-4 "
        />
      </motion.div>
    </motion.div>
  );
};

export default Error;

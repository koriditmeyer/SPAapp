import { motion } from "framer-motion";
import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { ErrorDog } from "../../../assets";
import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
    const navigate = useNavigate()
    const goBack =() => navigate(-1)
    return (
        <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-[70vh] flex flex-col justify-center items-center pt-10 gap-5 font-extralight text-[#6A6A6A] px-2 "
      >
           <h1 className=" text-8xl text-red-400">Unauthorized</h1>
           <p  className=" text-4xl">You don't have access to the requested page.</p>
           <div>
            <button onClick={goBack} className='btn p-2 min-w-[20vw] text-black'>Go back</button>
            </div> 
            <img
        src={ErrorDog}
        alt="error 404"
        className="relative w-80 rounded-lg p-4 "
      />
        </motion.section>
    );
};

export default Unauthorized;




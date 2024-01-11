import React from "react";
import { Link } from "react-router-dom";
import { ItemDetailInfo } from "..";
import { FR_CURRENCY } from "../../constants";
import { motion, useAnimation } from "framer-motion";
import { HeartIcon } from "@heroicons/react/24/outline";

const Item = ({ properties }) => {
  const controls = useAnimation();
  return (
    <Link to={`/item/${properties.id}`}>
      <article
        onMouseLeave={() => controls.start({ y: 50, opacity: 1 })}
        className="flex-col border rounded-md mt-1 mb-1 h-full overflow-hidden hover:shadow-testShadow hover:border-transparent duration-200"
      >
        <div className="-z-10 p-4 bg-gray-200 relative">
          <motion.img
            className="m-auto"
            src={properties.img_small}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          ></motion.img>
          <motion.ul
            animate={controls}
            initial={{ y: 50, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className=" w-full h-auto bg-gray-100 absolute  left-0 flex flec-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r"
          >
            <li className=" text-gray-600 hover:text-black tesxt-sm font-medium border-b-[1px] border-b-gray-400 hover:border-b-gray-700 flex items-center justify-end gap-2 hover:cursor-pointer duration-300 w-full">
              Add to Wish List{" "}
              <span>
                <HeartIcon className="h-[20px]" />
              </span>
            </li>
          </motion.ul>
        </div>
        <div
          onMouseEnter={() => controls.start({ y: -10, opacity: 1 })}
          className="z-10 flex justify-left bg-white  border border-gray-100  hover:bg-gray-100 h-full "
        >
          <div className="font-medium text-black p-2">
            <ItemDetailInfo product={properties} ratings={true} />
            <div className="text-xl xl:text-2xl pt-1">
              {properties.oldPrice ? (
                <span className="text-red-700 mr-2">
                  {Math.round(
                    ((properties.price - properties.oldPrice) /
                      properties.oldPrice) *
                      100
                  )}
                  %
                </span>
              ) : (
                ""
              )}
              {FR_CURRENCY.format(properties.price)}
            </div>
            <div className="text-base xl:text-lg text-gray-500 marker:font-semibold">
              List Price:{" "}
              <span className="line-through">
                {FR_CURRENCY.format(properties.oldPrice)}
              </span>
            </div>
            <div className="text-sm xl:text-base text-blue-500 font-semibold mt-1">
              FREE Delivery
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default Item;

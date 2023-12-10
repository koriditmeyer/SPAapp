import React from "react";
import { Link } from "react-router-dom";
import {ItemDetailInfo} from "..";
import { FR_CURRENCY } from "../../constants";

const Item = ({ properties }) => {
  return (
    <Link to={`/SPAapp/item/${properties.id}`}>
      <article className="flex-col border rounded-md mt-1 mb-1 ">
        <div className="p-4 bg-gray-200">
          <img className="m-auto" src={properties.img_small}></img>
        </div>
        <div className="flex justify-left border border-gray-100 hover:bg-gray-100">
          <div className="font-medium text-black p-2">
            <ItemDetailInfo product={properties} ratings={true}/>
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

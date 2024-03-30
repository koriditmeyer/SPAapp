import React from "react";
import { Link } from "react-router-dom";
import { ImageSlider, ItemDetailInfo } from "..";
import { FR_CURRENCY } from "../../constants";


const Item = ({ properties,isLoading }) => {
 
  return (
      <Link to={`/products/${properties.id}`}>
        <article
          className="flex-col border rounded-md mt-1 mb-1 h-full overflow-hidden hover:shadow-testShadow hover:border-transparent duration-200"
        >
          <div className="  ">
            <ImageSlider  images={properties.thumbnail} /> 
          </div>
          <div
            className="z-10 flex justify-left bg-white  border border-gray-100  hover:bg-gray-100 h-full "
          >
            <div className="font-medium text-black p-2">
              <ItemDetailInfo product={properties} ratings={true} isLoading={isLoading} />
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
              {properties.oldPrice && <div className="text-base xl:text-lg text-gray-500 marker:font-semibold">
                List Price:{" "}
                <span className="line-through">
                  {FR_CURRENCY.format(properties.oldPrice)}
                </span>
              </div>}
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

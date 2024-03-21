import React from "react";
import { ItemBadge, ItemRating } from "..";
import Skeleton from "react-loading-skeleton";

const ItemDetailInfo = ({ product, ratings, isLoading }) => {
  // console.log(product,isLoading)
  return (
    <div className="mb-1">
      <div className="text-xl xl:text-2xl font-medium mb-1 hover:text-amazon-yellow_dark">
        {isLoading ? <Skeleton className=" w-40" /> : product?.title}
      </div>
      <div className="text-sm xl:text-base  mb-1">
        {product?.brand && (
          <>
            <span>by </span>
            <span className="text-blue-500">{product?.brand}</span>
          </>
        )}
      </div>
      {isLoading ? (
        <Skeleton className=" w-40" />
      ) : (
        product?.avgRating && (
          <div className="text-sm xl:text-base font-medium mb-1">
            <ItemRating
              avgRating={product.avgRating}
              ratings={product.ratings}
            />
          </div>
        )
      )}
      <div className="text-sm xl:text-base  mb-1">
        {isLoading ? <Skeleton className=" w-20" />: product?.attribute  }
      </div>
      <div>{product?.badge && <ItemBadge badge={product?.badge} />}</div>
    </div>
  );
};

export default ItemDetailInfo;

import React from "react";
import Skeleton from "react-loading-skeleton";

const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div
        className="flex-col w-full h-full  border rounded-md hover:shadow-testShadow hover:border-transparent duration-100"
        // className="bg-amazon-background min-h-screen "
        key={i}
      >
        <div className=" max-w-constainer m-auto ">
          <div className="grid grid-cols-1 md:grid-cols-10 gap-1 md:gap-2 "></div>
          <div className="flex-1  ">
            <Skeleton 
             className="h-60"
             />
          </div>
          <div className=" flex-1 p-2">
            <Skeleton count={8} className=" mb-2" />
          </div>
        </div>
      </div>
    ));
};

export default CardSkeleton;

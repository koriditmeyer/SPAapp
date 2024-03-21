import React from "react";
import { CardSkeleton, Item } from "..";
import { useNavigation } from "react-router-dom";

const ItemList = ({ list, isLoading }) => {
  // const list = useLoaderData();
  // console.log(list)
  const navigation = useNavigation(); // Enable useNavigation
  return (
    <>
      <div className=" gap-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
        {
          isLoading? (
              <CardSkeleton cards={6} />
            ) : (
            list?.map((product, key) => (
              <Item key={key} properties={product} isLoading={isLoading} />
            ))
          )
        }
      </div>
    </>
  );
};

export default ItemList;

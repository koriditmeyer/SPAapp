import React from "react";
import { ItemList, Pagination, SortComponent } from "..";
import { useSearchParams } from "react-router-dom";
import ItemListContainerQuery from "../ItemListContainer/ItemListContainerLoader";

const ItemListQuery = () => {
  // const data = useLoaderData().payload;

  let [searchParams, setSearchParams] = useSearchParams();

  const { data, isLoading } = ItemListContainerQuery(searchParams, true);
  // console.log(error?.message);

  return (
    <div className="col-span-12 md:col-span-9 relative">
      <div className="flex justify-between">
        <h2 className=" text-xl xl:text-3xl font-bold capitalize">
          Results:
        </h2>
        <SortComponent sortCategory={"price"} />
      </div>
      <ItemList list={data?.payload.products} isLoading={isLoading} />
      <div className="pt-4">
        <Pagination data={data?.payload.pagination} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default ItemListQuery;

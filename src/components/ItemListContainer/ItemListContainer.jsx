import React from "react";
import { ItemList, Pagination } from "..";
import { useLoaderData, useParams, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";

const ItemListContainer = () => {
  const data = useLoaderData().payload;
  const {categoryId} = useParams();
  const [searchParams] = useSearchParams();

  console.log(data)
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="m-auto pt-4 px-4">
        <div className="grid grid-cols-12 gap-2">
          <div className="hidden md:inline-block md:col-span-2 py-4 px-6">
            <div className="border border-slate-300 h-full flex flex-col justify-center items-center font-bold">Advertisement</div>
            <div className="text-xs text-right text-slate-400">Sponsored</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            {/* <Outlet/> */}
            <h2 className="text-xl xl:text-3xl font-bold uppercase">{categoryId}</h2>
            <ItemList list={data.products} />
            <Pagination data={data.pagination}/>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default ItemListContainer;

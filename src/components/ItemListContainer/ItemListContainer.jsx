import React, { useState, useEffect } from "react";
import { ItemList } from "..";
import { useLoaderData, useParams } from "react-router-dom";
import { db } from "../../services/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { motion } from "framer-motion";

const ItemListContainer = () => {
  const products = useLoaderData();
  const {categoryId} = useParams();
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true) // Conditional state
  // const { categoryId } = useParams();
  // useEffect(() => {
  //     setLoading(true) // Need to set again to true at it can change over time
  //       let response
  //       if (!categoryId) {
  //         response = collection(db, "products")
  //       } else {
  //         response = query(collection(db, "products"), where("category", "==", categoryId))
  //       }
  //       getDocs(response)
  //         .then((snapshot) => {
  //           if (snapshot.empty) {
  //             throw new Error("No results");
  //           }
  //           setProducts(snapshot.docs.map((doc) =>
  //             ({ id: doc.id, ...doc.data() })))
  //         })
  //     .catch (error => {
  //       console.log(`${error.message} - no products found`);
  //     })
  //     .finally(() => {  // finally
  //       setLoading(false)
  //     })
  // }, [categoryId]);

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
            <ItemList list={products} />
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default ItemListContainer;

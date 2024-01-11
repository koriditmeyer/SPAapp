import React, { useState, useEffect} from "react";
import {ItemList} from "..";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import {
  collection,
  getDocs,
  query,
  where
} from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true) // Conditional state
  const { categoryId } = useParams();
  useEffect(() => {
      setLoading(true) // Need to set again to true at it can change over time
        let response
        if (!categoryId) {
          response = collection(db, "products")
        } else {
          response = query(collection(db, "products"), where("category", "==", categoryId))
        }
        getDocs(response)
          .then((snapshot) => {
            if (snapshot.empty) {
              throw new Error("No results");
            }
            setProducts(snapshot.docs.map((doc) => 
              ({ id: doc.id, ...doc.data() })))
          })
      .catch (error => {
        console.log(`${error.message} - no products found`);
      })
      .finally(() => {  // finally 
        setLoading(false)
      })
  }, [categoryId]);


  return (
    <main className={"bg-gray-50 dark:bg-black overflow-hidden flex justify-center items-center"}>
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 justify-center items-stretch ">
        {loading ? (
          <p className="text-white">Loading...</p>
        ) : (
          <ItemList list={products} />
        )}
      </section>
    </main>
  );
};

export default ItemListContainer;

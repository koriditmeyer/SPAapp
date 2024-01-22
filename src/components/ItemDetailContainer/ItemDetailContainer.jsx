// import React, { useState, useEffect } from "react";
import { ItemDetail } from "..";
import { useLoaderData, useParams } from "react-router-dom";
// import { db } from "../../services/config";
// import { doc, getDoc } from "firebase/firestore";
import { motion } from "framer-motion";

const ItemDetailContainer = () => {
  const product = useLoaderData()
  // const [product, setProduct] = useState(null);
  // const { id } = useParams(); // use to receive route params
  // const [loading, setLoading] = useState(true); // Conditional state
  // useEffect(() => {
  //   setLoading(true);
  //   const response = doc(db, "products", id);
  //   getDoc(response)
  //     .then((snapshot) => {
  //       if (!snapshot.exists()) {
  //         // console.log(snapshot);
  //         throw Error("Could not find that Product");
  //       }
  //       setProduct({ id: snapshot.id, ...snapshot.data() });
  //       console.log(product);
  //     })
  //     .catch((error) => {
  //       console.log(`${error.message}`);
        
  //     })
  //     .finally(() => {
  //       // setLoading(false);
  //     });
  // }, [id]); // add also this to use route params

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=""
    >
      {/* {!product ? (
        <p className="text-black text-9xl">Loading...</p>
      ) : (
        <>
        console.log("hu") */}
      {product && <ItemDetail properties={product} />}
      
      {/* </>
      )} */}
    </motion.section>
  );
};

export default ItemDetailContainer;


import React, { useState, useEffect } from "react";
import { ItemDetail } from "..";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { doc, getDoc } from "firebase/firestore";
import { motion } from "framer-motion";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams(); // use to receive route params
  const [loading, setLoading] = useState(true); // Conditional state
  useEffect(() => {
    setLoading(true);
    const response = doc(db, "products", id);
    getDoc(response)
      .then((snapshot) => {
        if (snapshot.empty) {
          throw new Error("No results");
        }
        setProduct({ id: snapshot.id, ...snapshot.data() });
      })
      .catch((error) => {
        console.log(`${error.message} Product not found`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]); // add also this to use route params

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=""
    >
      {loading ? (
        <p className="text-white">Loading...</p>
      ) : (
        <ItemDetail properties={product} />
      )}
    </motion.section>
  );
};

export default ItemDetailContainer;

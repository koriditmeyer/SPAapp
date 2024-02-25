import { ItemDetail } from "..";
import { useLoaderData, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const ItemDetailContainer = () => {
  const product = useLoaderData()
   return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=""
    >
      {product && <ItemDetail properties={product} />}
      
    </motion.section>
  );
};

export default ItemDetailContainer;


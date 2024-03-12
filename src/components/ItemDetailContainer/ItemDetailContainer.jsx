import { ItemDetail } from "..";
import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";

const ItemDetailContainer = () => {
  
   return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=""
    >
      {<ItemDetail  />}
      
    </motion.section>
  );
};

export default ItemDetailContainer;


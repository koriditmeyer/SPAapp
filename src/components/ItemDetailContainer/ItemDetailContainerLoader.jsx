import { db } from "../../services/config";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainerLoader = async ({params}) => {
    const {id} = params
    const response = doc(db, "products", id);
    const snapshot = await getDoc(response);
    
    if (!snapshot.exists()) {
      throw Error("We couldn't find that Product");
    }
  
    return ({ id: snapshot.id, ...snapshot.data() });
  }

  export default ItemDetailContainerLoader
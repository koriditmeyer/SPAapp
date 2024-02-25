import { db } from "../../services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


const ItemListContainerLoader = async ({ params }) => {
  const { categoryId } = params;
  let response;
  if (!categoryId) {
      response = collection(db, "products");
    } else {
    response = query(
      collection(db, "products"),
      where("category", "==", capitalizeFirstLetter(categoryId))
    );
  }
  const snapshot = await getDocs(response);
  if (snapshot.empty) {
    throw Error("We couldn't find that Category");
  }

  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export default ItemListContainerLoader;

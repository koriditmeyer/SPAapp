import { useQuery } from "@tanstack/react-query";
import { getAPI } from "../../services/API";
import { ASSET_BASE_URL } from "../../services/config";
import delay from "../../services/delay";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const ItemDetailContainerLoader = async (id) => {
  // const id = params.id;
  try {
  // console.log(id);
  await delay(1000);
  let response = await getAPI(`api/products/${id}`, false);
  // Integrate the modified products back into the original response structure
  const modifiedResponse = {
    ...response,
    payload: {
      ...response.payload,
      thumbnail: response.payload.thumbnail.map(
        (imgPath) => ASSET_BASE_URL + imgPath
      ),
    },
  };
  // console.log(modifiedResponse);
  return modifiedResponse;
  } catch (error) {
    // console.log(error);
    throw Error("We couldn't find that Product");
  }
};

const ItemDetailContainerQuery = (productId) => {
  return useQuery({
    queryKey: ["productDetails", productId],
    queryFn: async () => await ItemDetailContainerLoader(productId),
    throwOnError:true
  });
};

export default ItemDetailContainerQuery;

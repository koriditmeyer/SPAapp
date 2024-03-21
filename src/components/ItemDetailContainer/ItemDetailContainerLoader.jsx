import { useQuery } from "@tanstack/react-query";
import { getAPI } from "../../services/API";
import { ASSET_BASE_URL } from "../../services/config";
import delay from "../../services/delay";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const ItemDetailContainerLoader = async (id) => {
  try {
    let response = await getAPI(`api/products/${id}`, false);
    // console.log(response)
    // Integrate the modified products back into the original response structure
    const modifiedResponse = {
      ...response,
      payload: {
        ...response.payload,
        thumbnail: response.payload.thumbnail.map((imgPath) => {
          return imgPath.includes("https") ? imgPath : ASSET_BASE_URL + imgPath;
        }),
      },
    };
    // console.log(modifiedResponse);
    return modifiedResponse;
  } catch (error) {
    console.log(error);
    if (error.request?.statusText == "Not Found") {
      throw Error("We couldn't find that Product");
    } else {
      throw Error("Unexpected Error");
    }
  }
};

const ItemDetailContainerQuery = (productId) => {
  return useQuery({
    queryKey: ["productDetails", productId],
    queryFn: async () => await ItemDetailContainerLoader(productId),
    throwOnError: false,
  });
};

export default ItemDetailContainerQuery;

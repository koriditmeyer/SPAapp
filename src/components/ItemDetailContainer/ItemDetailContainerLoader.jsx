import { getAPI } from "../../services/API";
import { ASSET_BASE_URL } from "../../services/config";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const ItemDetailContainerLoader = async ({ params }) => {
  const { id } = params;
  let response;
  try {
    response = await getAPI(`api/products/${id}`, false);
    console.log(response)
    // Integrate the modified products back into the original response structure
    const modifiedResponse = {
      ...response,
      payload: {
        ...response.payload,
          thumbnail: response.payload.thumbnail.map((imgPath) => ASSET_BASE_URL + imgPath)
        },
    };

    console.log(modifiedResponse);
    return modifiedResponse;
  } catch (error) {
    console.log(error);
    throw Error("We couldn't find that Product");
  }
  return response;
};

export default ItemDetailContainerLoader;

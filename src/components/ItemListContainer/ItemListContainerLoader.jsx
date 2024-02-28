import { getAPI } from "../../services/API";
import { ASSET_BASE_URL } from "../../services/config";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const ItemListContainerLoader = async ({ params }) => {
  const { categoryId } = params;
  let response;
  try {
    response = await getAPI(`api/products/?category=${categoryId}`, false);
    // Modify each product's thumbnail paths to include the base URL
    const modifiedProducts = response.payload.products.map((product) => ({
      ...product,
      thumbnail: product.thumbnail.map((imgPath) => ASSET_BASE_URL + imgPath),
    }));

    // Integrate the modified products back into the original response structure
    const modifiedResponse = {
      ...response,
      payload: {
        ...response.payload,
        products: modifiedProducts,
      },
    };

    // console.log(modifiedResponse);
    return modifiedResponse;
  } catch (error) {
    console.log(error);
    throw Error("We couldn't find that Category");
  }
  return response;
};

export default ItemListContainerLoader;

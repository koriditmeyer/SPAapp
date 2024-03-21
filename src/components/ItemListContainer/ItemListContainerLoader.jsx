import { useQuery } from "@tanstack/react-query";
import { getAPI } from "../../services/API";
import { ASSET_BASE_URL } from "../../services/config";

const ItemListContainerLoader = async (request) => {
  // query DB
  let response;
  try {
    response = await getAPI(`api/products/?${request}`, false);
    // await delay(5000);
    // console.log(response)
    // Modify each product's thumbnail paths to include the base URL IF URL has no HTTP

    const modifiedProducts = response.payload.products.map((product) => ({
      ...product,
      thumbnail: product.thumbnail.map((imgPath) => {
       return  imgPath.includes("https") ?
          imgPath:
          ASSET_BASE_URL + imgPath        
      }),
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
    // console.log(error);
    if (error.request?.statusText == "Not Found") {
      throw Error(`We couldn't find that ${window.location.pathname.slice(1)}`);
    } else {
      throw Error("Unexpected Error");
    }
  }
};

const ItemListContainerQuery = (searchParams, throwOnError, enable = true) => {
  let { category,subCategory, page, limit, sort, searchTerm, badge } = Object.fromEntries([
    ...searchParams,
  ]);
  // console.log(searchParams.toString(),category,searchTerm)
  return useQuery({
    queryKey: ["SearchQuery", { category,subCategory, page, limit, sort, searchTerm ,badge}],
    queryFn: async () => await ItemListContainerLoader(searchParams.toString()),
    enabled: enable, // Dependent Queries if need to query on a condition
    throwOnError: throwOnError,
  });
};

export default ItemListContainerQuery;

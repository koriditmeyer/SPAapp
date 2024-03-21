import { useQuery } from "@tanstack/react-query";
import { getAPI } from "../../services/API";
import { ASSET_BASE_URL } from "../../services/config";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const SearchFilterLoader = async () => {
  // query DB
  let response;
  try {
    // console.log(request)
    // response = await getAPI(`api/products/distinct/${request}`, false);
    response = await getAPI(`api/category/`, false);

    const modifiedProducts = response.payload.map((category) => ({
      ...category,
      // Assuming thumbnail is an array of strings; adjust if it's differently structured
      thumbnail: category?.thumbnail?.includes("https") ? category.thumbnail : ASSET_BASE_URL + category.thumbnail
    }))
    // console.log(modifiedProducts)
    response = {
      ...response,
      payload: modifiedProducts,
    }

    // Ensure response.payload exists and prepend "All" if necessary
    let payload =
      response && response.payload
        ? [{name:"All",_id:"0"}, ...response.payload.filter((item) => item.name !== "All")]
        : [];
    response = {
      ...response,
      payload: payload,
    };
    // console.log(response)
    return response;
  } catch (error) {
    console.log(error);
    if (error.request?.statusText == "Not Found") {
      throw Error(`We couldn't find that ${window.location.pathname.slice(1)}`);
    } else {
      throw Error("Unexpected Error");
    }
  }
};

const SearchFilterQuery = (throwOnError) => {
  return useQuery({
    queryKey: ["GetCategory"],
    queryFn: async () => await SearchFilterLoader(),
    throwOnError: throwOnError,
  });
};

export default SearchFilterQuery;

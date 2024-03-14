import { useQuery } from "@tanstack/react-query";
import { getAPI } from "../../services/API";
import { ASSET_BASE_URL } from "../../services/config";
import delay from "../../services/delay";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const SearchFilterLoader = async (request) => {
  // query DB
  let response;
  try {
    // console.log(request)
    response = await getAPI(`api/products/distinct/${request}`, false);

    // Ensure response.payload exists and prepend "All" if necessary
    let payload = response && response.payload
    ? ["All", ...response.payload.filter((item) => item !== "All")]
    : [];
    response = {
      ...response,
      payload: payload
    }
    return response;
  } catch (error) {
    // console.log(error);
    if (error.request?.statusText == "Not Found") {
      throw Error(`We couldn't find that ${window.location.pathname.slice(1)}`);
    } else {
      throw Error("Unexpected Error");
    }
  }
};

const SearchFilterQuery = (attribute, throwOnError) => {
  return useQuery({
    queryKey: ["SearchQuery", attribute],
    queryFn: async () => await SearchFilterLoader(attribute),
    throwOnError: throwOnError,
  });
};

export default SearchFilterQuery;

import { useQuery } from "@tanstack/react-query";
import { getAPI } from "../../services/API";

const SearchCategoryFilterLoader = async (attribute,search) => {
  // query DB
  let response;
  try {
    response = await getAPI(`api/products/distinct/query?attribute=${attribute}&search=${search}`, false);
    // await delay(5000);
    // console.log(response)
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

const SearchCategoryFilterQuery = (search, throwOnError, enable = true) => {
  let attribute = "category"
  // console.log(searchParams.toString(),category,searchTerm)
  return useQuery({
    queryKey: ["SearchDistincCategory", { attribute,search}],
    queryFn: async () => await SearchCategoryFilterLoader(attribute,search),
    enabled: enable, // Dependent Queries if need to query on a condition
    throwOnError: throwOnError,
  });
};

export default SearchCategoryFilterQuery;

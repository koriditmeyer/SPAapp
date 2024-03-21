import { useQuery } from "@tanstack/react-query";
import { getAPI } from "../../services/API";

const ProfileAccountLoader = async () => {
  try {
    const userDataDB = await getAPI("api/users/current:false");
    return userDataDB;
  } catch (error) {
    throw Error(error.response.data.message)
  }
};

const ProfileAccountQuery = (throwOnError) => {
  return useQuery({
    queryKey: ["ProfileQuery"],
    queryFn: async () => await ProfileAccountLoader(),
    throwOnError: throwOnError,
  });
};

export default ProfileAccountQuery;
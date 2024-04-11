import { useQuery } from "@tanstack/react-query";
import { getAPI } from "../../services/API";
import { ASSET_BASE_URL } from "../../services/config";

const AllUserLoader = async () => {
  try {
    let userDataDB = await getAPI("api/users");
    let modifiedUser = {
      ...userDataDB,
      payload: userDataDB.payload.map((user) => ({
        ...user,
        profilePhoto: user.profilePhoto.map((imgPath) => {
          return imgPath.includes("https") ? imgPath : ASSET_BASE_URL + imgPath;
        }),
      })),
    };
    console.log(modifiedUser)
    return modifiedUser;
  } catch (error) {
    console.log(error)
    throw Error(error.response.data.message);
  }
};

const GetAllUsersQuery = (throwOnError) => {
  return useQuery({
    queryKey: ["GetAllUsers"],
    queryFn: async () => await AllUserLoader(),
    throwOnError: throwOnError,
    //staleTime: 0, 
  });
};

export default GetAllUsersQuery;

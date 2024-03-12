import { getAPI } from "../../services/API";

const ProfileAccountLoader = async () => {
  try {
    const userDataDB = await getAPI("api/users/current:false");
    return userDataDB;
  } catch (error) {
    return error.response.data.message
  }
};

export default ProfileAccountLoader;

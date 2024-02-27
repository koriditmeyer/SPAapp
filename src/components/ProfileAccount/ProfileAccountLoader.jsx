import { getAPI } from "../../services/API";

const ProfileAccountLoader = async () => {
 
  const userDataDB = await getAPI("api/users/current:false")
      return userDataDB
  };
  

export default ProfileAccountLoader;
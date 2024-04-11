import { putAPI } from "./API";
import { toast } from "react-toastify";
import { forceUpdateUserInfo } from "../redux/amazonSlice";

const handleUserRoleUpdate = async ( userId, payload) => {
  const toastId = toast("Please wait...", {
    type: "info",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  try {
    // console.log(payload)
    // Assuming you have a function to make API calls
    const user = await putAPI(`api/users/roles/${userId}`, payload); // Implement this function to make the PUT request
    toast.update(toastId, {
      render: `The user roles has been sucessfully updated👌`,
      type: "success",
    });
    // console.log(user)
    //dispatch(forceUpdateUserInfo(user.payload));
  } catch (error) {
    // Handle error (e.g., show error notification)
    // console.error(error);
    toast.update(toastId, {
        render: `${error.response.data.message} 🤯`,
        type: "error",
    });
    throw Error(error);
  }
};

export default handleUserRoleUpdate;

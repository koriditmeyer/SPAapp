import { putAPI } from "./API";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { forceUpdateUserInfo, setUserInfo } from "../redux/amazonSlice";

// const useFieldUpdate = () => {
const handleFieldUpdate = async (fieldName, value) => {
    const dispatch = useDispatch();
  const toastId = toast("Please wait...", {
    type: "loading",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  try {
    const payload = { [fieldName]: value };
    // console.log(payload)
    // Assuming you have a function to make API calls
    const user= await putAPI("api/users/current", payload); // Implement this function to make the PUT request
    toast.update(toastId, {
      render: `Field "${fieldName}" has been updated sucessfully 👌`,
      type: "success",
    });
    dispatch(
        forceUpdateUserInfo(user.payload)
      );
  } catch (error) {
    // Handle error (e.g., show error notification)
    //   console.error('Failed to update user info', error);
    toast.update(toastId, {
        render: `${error.response.data.message} 🤯`,
        type: "error",
    });
    throw new error
  }
};
//   return handleFieldUpdate;
// };
export default handleFieldUpdate;

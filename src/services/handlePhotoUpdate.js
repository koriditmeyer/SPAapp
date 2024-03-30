import { putAPI } from "./API";
import { toast } from "react-toastify";
import { forceUpdateUserInfo } from "../redux/amazonSlice";
import { ASSET_BASE_URL } from "./config";

const handlePhotoUpdate = async (dispatch, id, fieldName, value) => {
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
    // Initialize FormData
    const formData = new FormData();
    // Append the file using the fieldName as the key
    formData.append(fieldName, value[0]);
    // Assuming you have a function to make API calls
    const user = await putAPI(`api/users/${id}/thumbnailUrl`, formData); // Implement this function to make the PUT request
    const modifiedUser = {
      ...user,
      payload: {
        ...user.payload,
        profilePhoto: user.payload.profilePhoto.map((imgPath) => {
          return imgPath.includes("https") ? imgPath : ASSET_BASE_URL + imgPath;
        }),
      },
    };
    dispatch(forceUpdateUserInfo(modifiedUser.payload));
    console.log(modifiedUser)
    toast.update(toastId, {
      render: `Field "${fieldName}" has been updated sucessfully 👌`,
      type: "success",
      progress: modifiedUser?.percentage
    });
    return modifiedUser
  } catch (error) {
    // Handle error (e.g., show error notification)
    console.error("my error"+error);
    toast.update(toastId, {
      render: `${error.response.data.message} 🤯`,
      type: "error",
    });
    throw Error(error);
  }
};

export default handlePhotoUpdate;

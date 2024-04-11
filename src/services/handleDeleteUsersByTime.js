import { deleteAPI } from "./API";
import { toast } from "react-toastify";

const handleDeleteUsersByTime = async () => {
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
    const users = await deleteAPI(`api/users/delete/`); // Implement this function to make the PUT request
    toast.update(toastId, {
      render: `Users have been sucessfully deleted👌`,
      type: "success",
    });
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

export default handleDeleteUsersByTime;

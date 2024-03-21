import { useRef } from "react";
import { useDispatch } from "react-redux";
import { userSignOut } from "../redux/amazonSlice";
import { toast } from "react-toastify";
import { deleteAPI } from "./API";

const useLogout = () => {
  const toastId = useRef(null);
  const dispatch = useDispatch();
  const handleLogout = async () => {
    toastId.current = toast("Please wait...", {
      type: "loading",
    });
    try {
      await deleteAPI("api/sessions/logout");
      toast.update(toastId.current, {
        render: "Log out Successfully! See you soon",
        type: "success",
      });
      dispatch(userSignOut());
    } catch (error) {
      toast.update(toastId.current, {
        render: error.response.data.message,
        type: "error",
      });
    }
  };
  return handleLogout;
};
export default useLogout;

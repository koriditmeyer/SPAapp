import { useRef } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { postAPI } from "./API";
import { setUserInfo } from "../redux/amazonSlice";
import { useNavigate } from "react-router-dom";
import { ASSET_BASE_URL } from "./config";

const useLogin = () => {
  const toastId = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async ({ formData }) => {
    toastId.current = toast("Please wait...", {
      type: "loading",
    });
    try {
      const user = await postAPI("api/sessions/login", formData);
      toast.update(toastId.current, {
        render: `Logged in Successfully! Welcome back ${user.payload.first_name}!`,
        type: "success",
      });

      const modifiedUser = {
        ...user,
        payload:{
          ...user.payload,
            profilePhoto: user.payload.profilePhoto.map((imgPath) => {
              return imgPath.includes("https") ? imgPath : ASSET_BASE_URL + imgPath;
          })
      }
    }

      dispatch(setUserInfo(modifiedUser.payload));
      // Navigate to the previous page or home if not available
      const from = location.state?.from?.pathname || "/";
      // console.log(from)
      setTimeout(() => {
        navigate(from);
      }, 500);
    } catch (error) {
      console.log(error)
      toast.update(toastId.current, {
        render: error.response.data.message,
        type: "error",
      });
    }
  };
  return handleLogin;
};
export default useLogin;

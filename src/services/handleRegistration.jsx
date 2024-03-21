import { useRef } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { postAPI } from "./API";
import { setUserInfo } from "../redux/amazonSlice";
import {  useNavigate } from "react-router-dom";

const useRegistration = () => {
  const toastId = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegistration = async ({formData}) => {
    toastId.current = toast("Please wait...", {
      type: "loading",
    });
    try {
        const user = await postAPI("api/sessions/register",formData);
        toast.update(toastId.current, {
            render: "An Email was send to you to verify your address.",
            type: "success",
        });
        dispatch(
            setUserInfo(user.payload)
          );
          setTimeout(() => {
            navigate("/verify");
          }, 500);
    } catch (error) {
        toast.update(toastId.current, {
            render: error.response.data.message,
            type: "error",
          });
    }
  };
  return handleRegistration;
};
export default useRegistration;

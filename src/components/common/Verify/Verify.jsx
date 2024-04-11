import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { ErrorDog } from "../../../assets";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getAPI } from "../../../services/API";
import { setUserInfo } from "../../../redux/amazonSlice";
import { ASSET_BASE_URL } from "../../../services/config";

const Verify = () => {
  document.title = `Amazon.com | Verification`;

  // Destructure email and token from searchParams
  let [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");
  const toastId = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const id = useRef(null);

  useEffect(() => {
    const asyncfunction = async () => {
      ++id.current;
      //console.log("inside");
      if (email && token) {
        toastId.current = toast("Please wait...", {
          type: "loading",
        });
      }
      if (email && token && id.current === 1) {
        //  handleVerification();
        //console.log("more inside");
        try {
          const user = await getAPI(
            `api/sessions/verify?email=${email}&token=${token}`
          );
          const modifiedUser = {
            ...user,
            payload: {
              ...user.payload,
              profilePhoto: user.payload.profilePhoto.map((imgPath) => {
                return imgPath.includes("https")
                  ? imgPath
                  : ASSET_BASE_URL + imgPath;
              }),
            },
          };
          toast.update(toastId.current, {
            render: "😁 You are successfully registered !",
            type: "success",
          });
          dispatch(setUserInfo(modifiedUser.payload));
          // Navigate to the previous page or home if not available
          const from = location.state?.from?.pathname || "/";
          setTimeout(() => {
            navigate(from);
          }, 500);
        } catch (error) {
          toast.update(toastId.current, {
            render: error.response.data.message,
            type: "error",
          });
          //     console.log(error.response.data.message);
          setTimeout(() => {
            navigate("/register");
          }, 500);
        }
      }
    };
    asyncfunction();
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[70vh] flex flex-col justify-center items-center pt-10 gap-5 font-extralight text-[#6A6A6A] px-2 "
    >
      <h1 className=" text-8xl text-green-400">Just one more step...</h1>
      <p className=" text-4xl">
        Please check your email to finish the registration
      </p>
      {/* <div>
        <button
          onClick={handleRegistrationClick}
          className="btn p-2 min-w-[20vw] text-black"
        >
          Go back
        </button>
      </div> */}
      <img
        src={ErrorDog}
        alt="error 404"
        className="relative w-80 rounded-lg p-4 "
      />
    </motion.section>
  );
};

export default Verify;

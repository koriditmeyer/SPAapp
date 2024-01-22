import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { toast } from "react-toastify";

import { setUserInfo } from "../../redux/amazonSlice";
import { useDispatch } from "react-redux";

const Signin = () => {
  document.title = `Amazon.com | Registration`;

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const toastId = useRef(null);

  const auth = getAuth();

  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  //Error Messages
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errCPassword, setErrCPassword] = useState("");
  // const [errDB, setErrDB] = useState("");
  //Handle Functions
  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setErrCPassword("");
  };
  // email validation
  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
  };

  //submit button action
  const handleRegistration = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName("Enter your name");
    }
    if (!email) {
      setErrEmail("Enter your email");
      // setErrDB("");
    } else if (!emailValidation(email)) {
      setErrEmail("Enter a valid email");
    }
    if (!password) {
      setErrPassword("Enter your password");
    } else if (password.length < 6) {
      setErrPassword("Password must be at least 6 characters");
    }
    if (!cPassword) {
      setErrCPassword("Enter your confirmation password");
    } else if (cPassword != password) {
      setErrCPassword("Passwords must match");
    }

    if (
      clientName &&
      email &&
      emailValidation(email) &&
      password &&
      password.length >= 6 &&
      cPassword &&
      cPassword === password
    ) {
      // console.log(clientName, email, password, cPassword);
      // Initialize loading toast here
      toastId.current = toast("Please wait...",{
        type: "loading"
      });

      // Create from FireBase
      const createUserDB = createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: clientName,
            photoURL: "../profiles/Default.png",
          })
            .then(() => {
              // Profile updated
              toast.update(toastId.current, {
                render: "Account successfully created!",
                type: "success"
              });
              const user = userCredential.user;
              dispatch(setUserInfo({
                _id:user.uid,
                userName:user.displayName,
                email:user.email,
                image:user.photoURL,
                roles:["user"]
              }))
              // console.log(user);
              setTimeout(() => {
                navigate("/");
              }, 500);
            })
            .catch((error) => {
              // Error in updateProfile
              toast.update(toastId.current, {
                render: error.message,
                type: "error"
              });
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error.code);
          if (errorCode.includes("auth/email-already-in-use")) {
            // setErrDB("Email Already in use, Try another one");
            // notifyError("Email Already in use, Try another one");
            toast.update(id, {
              render: "Email Already in use, Try another one",
              type: "error"
            });
          } else {
            // setErrDB(errorMessage);
            // notifyError(errorMessage);
            toast.update(id, {
              render: errorMessage,
              type: "error"
            });
          }
          // ..
        });

      setClientName("");
      setEmail("");
      setPassword("");
      setCPassword("");
    }
  };

  return (
    <motion.div
      initial={{opacity: 0.7 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.7 }}
      className="w-full"
    >
      <div className="w-full bg-gray-100 pb-10">
        <form className="w-[350px] mx-auto flex flex-col items-center">
          <div className="w-full border border-zinc-200 rounded-lg p-6">
            <h2 className=" font-titleFont text-3xl font-medium mb-4">
              Create account
            </h2>
            {/* {errDB && (
              <p className=" w-full py-1 border border-red-400 px-2 rounded-sm text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                {errDB}
              </p>
            )} */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Your name</p>
                <input
                  className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="text"
                  autoComplete="username"
                  value={clientName}
                  placeholder="First and last name"
                  onChange={handleName}
                />
                {errClientName && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>{" "}
                    {errClientName}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Email</p>
                <input
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleEmail}
                />
                {errEmail && (
                  <motion.p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>{" "}
                    {errEmail}
                  </motion.p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Password</p>
                <input
                  className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={handlePassword}
                  placeholder="At least 6 characters"
                />
                {errPassword ? (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>{" "}
                    {errPassword}
                  </p>
                ) : (
                  <p className="text-xs text-gray-600">
                    Passwords must be at least 6 characters.
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Re-enter password</p>
                <input
                  className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="password"
                  autoComplete="new-password"
                  value={cPassword}
                  onChange={handleCPassword}
                />
                {errCPassword && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>{" "}
                    {errCPassword}
                  </p>
                )}
              </div>
              <button
                onClick={handleRegistration}
                className="w-full py-1.5 text-sm font-normal rounded-none bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput"
              >
                Continue
              </button>
            </div>
            <p className="text-xs  text-black leading-4 mt-4">
              By creating an account, you agree to Amazon's,{" "}
              <span className="text-blue-600">Conditions of Use</span> and{" "}
              <span className="text-blue-600">Privacy Notice.</span>
            </p>
            <p className="text-xs text-gray-600 mt-4 cursor-pointer group flex gap-1 ">
              Already have an account?
              <Link
                to={"/login"}
                className="text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1"
              >
                Log in
              </Link>
              <ArrowRightIcon className="w-[15px] inline-block" />
            </p>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Signin;

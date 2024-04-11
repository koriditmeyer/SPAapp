import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

import { setUserInfo } from "../../redux/amazonSlice";
import { useDispatch } from "react-redux";
import { postAPI } from "../../services/API";
import useRegistration from "../../services/handleRegistration";

const Signin = () => {
  document.title = `Amazon.com | Registration`;

  const handleRegistration = useRegistration();

  const [clientName, setClientName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  //Error Messages
  const [errClientName, setErrClientName] = useState("");
  const [errLastName, setErrLastName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errCPassword, setErrCPassword] = useState("");
  // const [errDB, setErrDB] = useState("");

  const handleClientName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
    setErrLastName("");
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
  // password validation
  const passwordValidation = (password) => {
    return String(password).match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{7,}$/
    );
  };

  //submit button action
  const handleRegistrationClick = async (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName("Enter your first name");
    }
    if (!lastName) {
      setErrLastName("Enter your last name");
    }
    if (!email) {
      setErrEmail("Enter your email");
      // setErrDB("");
    } else if (!emailValidation(email)) {
      setErrEmail("Enter a valid email");
    }
    if (!password) {
      setErrPassword("Enter your password");
    } else if (!passwordValidation(password)) {
      setErrPassword(
        "Password must be at least 7 characters, contain one special character, one number, one uppercase, one lower case"
      );
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
      passwordValidation(password) &&
      cPassword &&
      cPassword === password
    ) {
      const formData = {
        first_name: clientName,
        last_name: lastName,
        email: email,
        password: password,
      };
      await handleRegistration({ formData });
      setClientName("");
      setEmail("");
      setPassword("");
      setCPassword("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0.7 }}
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
                <p className="text-sm font-medium">Your First name</p>
                <input
                  className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="text"
                  autoComplete="first name"
                  value={clientName}
                  placeholder="First name"
                  onChange={handleClientName}
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
                <p className="text-sm font-medium">Your Last name</p>
                <input
                  className="w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="text"
                  autoComplete="Last name"
                  value={lastName}
                  placeholder="Last name"
                  onChange={handleLastName}
                />
                {errLastName && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>{" "}
                    {errLastName}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Email</p>
                <input
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="email"
                  autoComplete="email"
                  placeholder="email"
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
                  placeholder="Password"
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
                    Password must be at least 7 characters, contain one special character, one number, one uppercase, one lower case.
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
                onClick={handleRegistrationClick}
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

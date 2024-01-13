import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { logoDark } from "../../assets";
import { Link } from "react-router-dom";

const Signin = () => {
  document.title = `Amazon.com | Registration`;
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  //Error Messages
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errCPassword, setErrCPassword] = useState("");
  //Handle Functions
  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };
  const handleRegistration = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName("Enter your name");
    }
  };

  return (
    <div className="w-full">
      <div className="w-full bg-gray-100 pb-10">
        <form className="w-[350px] mx-auto flex flex-col items-center">
          <img className="w-32 my-5" src={logoDark} alt="darkLogo" />
          <div className="w-full border border-zinc-200 rounded-lg p-6">
            <h2 className=" font-titleFont text-3xl font-medium mb-4">
              Create account
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Your name</p>
                <input
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="email"
                  placeholder="First and last name"
                  onChange={handleName}
                />
                {errClientName && (
                <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                <span className="italic font-titleFont font-extrabold text-base">!</span>  {errClientName}
                </p>)}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Email</p>
                <input
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Password</p>
                <input
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="password"
                  placeholder="At least 6 characters"
                />
                <p className="text-xs text-gray-600">
                  Passwords must be at least 6 characters.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Re-enter password</p>
                <input
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="password"
                />
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
      <div className="w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4 justify-center items-center p-10">
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-xs text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1 cursor-pointer duration-100"
          >
            Conditions of use
          </a>
          <a
            href="#"
            className="text-xs text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1 cursor-pointer duration-100"
          >
            Privacy Notice
          </a>
          <a
            href="#"
            className="text-xs text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1 cursor-pointer duration-100"
          >
            Help
          </a>
        </div>
        <p className="text-xs text-gray-600">
          &copy; 1996-2024, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </div>
  );
};

export default Signin;

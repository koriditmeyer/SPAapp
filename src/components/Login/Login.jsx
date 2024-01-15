import React, { useState } from "react";
import { logoDark } from "../../assets";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Login = () => {
  document.title = `Amazon.com | Log in`;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //Error Messages
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  //Handle Functions
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
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
    if (!email) {
      setErrEmail("Enter your email");
    } else if (!emailValidation(email)) {
      setErrEmail("Enter a valid email");
    }
    if (!password) {
      setErrPassword("Enter your password");
    }
    if (email && emailValidation(email) && password) {
      console.log(email, password);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="w-full">
      <div className="w-full bg-gray-100 pb-10">
        <form className="w-[350px] mx-auto flex flex-col items-center">
          <img className="w-32 my-5" src={logoDark} alt="darkLogo" />
          <div className="w-full border border-zinc-200 rounded-lg p-6">
            <h2 className=" font-titleFont text-3xl font-medium mb-4">
              Log in
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Email or Username</p>
                <input
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="email"
                  value={email}
                  onChange={handleEmail}
                />
                {errEmail && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>{" "}
                    {errEmail}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Password</p>
                <input
                  className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="password"
                  value={password}
                  onChange={handlePassword}
                />
                {errPassword && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>{" "}
                    {errPassword}
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
              By continuing, you agree to Amazon's{" "}
              <span className="text-blue-600">Conditions of Use</span> and{" "}
              <span className="text-blue-600">Privacy Notice.</span>
            </p>
            <p className="text-xs text-gray-600 mt-4 cursor-pointer group flex gap-1 ">
              <ArrowRightIcon className="w-[15px] inline-block" />
              <a
                href="#"
                className="text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1"
              >
                Need help?
              </a>
            </p>
          </div>
          <p className="w-full text-xs text-gray-600 mt-4 flex items-center">
            <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
            <span className="w-1/3 text-center">New to Amazon ?</span>
            <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
          </p>
          <Link
            to={"/register"}
            className="w-full py-1.5 mt-4 text-sm text-center font-normal rounded-none bg-gradient-to-t from-slate-200 to-slate-100 hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput"
          >
            Create your Amazon account
          </Link>
        </form>
      </div>
      <div className="w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4 justify-center items-center p-10">
        <div className="flex items-center gap-6">
          <a
            href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=508088"
            className="text-xs text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1 cursor-pointer duration-100"
          >
            Conditions of use
          </a>
          <a
            href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=468496"
            className="text-xs text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1 cursor-pointer duration-100"
          >
            Privacy Notice
          </a>
          <a
            href="https://www.amazon.com/help"
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

export default Login;

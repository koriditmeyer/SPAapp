import React from "react";
import { Link } from "react-router-dom";

const FooterTop = () => {
  return (
    <div className="w-full bg-white py-6">
      <div className="w-full border-t-[1px] border-b-[1px] py-8">
        <div className="w-64 mx-auto text-center flex flex-col gap-1">
          <p className="text-sm">See Personalised recommendations</p>
          <Link to={"/login"}>
            <button className="btn">Log In</button>
          </Link>
          <p className=" text-xs mt-1">
            New Customer ?
            <span className=" text-[#007185] ml-1 cursor-pointer">Sign In</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;

import React from "react";

const Footer2 = () => {
  return (
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
  );
};

export default Footer2;

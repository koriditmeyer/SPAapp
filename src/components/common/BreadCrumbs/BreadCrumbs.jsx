import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const location = useLocation();
  let currentLink = '';
  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLink += `/${crumb}`;
      console.log(currentLink)
      return (
        <div className="inline-block mr-2 text-[#177E8F] font-semibold hover:text-orange-700  after:content-['>'] after:ml-2 last:font-medium last:text-black last:after:content-['']" key={crumb}>
          <Link to={currentLink} className="hover:underline    capitalize">{crumb}</Link>
        </div>
      );
    });
  return (
    <div className=" max-w-[1200px] my-5" >
      {crumbs}
    </div>
  );
};

export default BreadCrumbs;

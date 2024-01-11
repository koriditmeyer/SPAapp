import React from "react";

const FooterMiddleList = ({ title, listItems }) => {
  return (
    <div>
      <h3 className="font-semibold text-white text-base font-titleFont mb-3">
        {title}
      </h3>
      <ul className="flex flex-col gap-2 font-bodyFont">
        {listItems.map((item,i) => (
          <li className="footerLink" key={i} >
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterMiddleList;

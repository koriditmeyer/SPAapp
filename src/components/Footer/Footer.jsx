import React from "react";
import { animateScroll as scroll } from "react-scroll";
import FooterTop from "../FooterTop/FooterTop";
import FooterMiddle from "../FooterMiddle/FooterMiddle";
import FooterBottom from "../FooterBottom/FooterBottom";

const Footer = () => {
    const options = {
        duration: 1000,
        smooth: true,
      };

    const scrollToTop = () => {
        scroll.scrollToTop(options);
      };
  return (
    <div className="font-titleFont">
      <FooterTop/>
      <a onClick={scrollToTop}>
        <div className="grid place-items-center cursor-pointer bg-amazon-blue hover:opacity-75  h-[50px] text-amazon-background ">Back to top</div>
      </a>
      <FooterMiddle/>
      <FooterBottom/>
    </div>
  );
};

export default Footer;

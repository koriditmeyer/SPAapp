import React from "react";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
    const options = {
        duration: 1000,
        smooth: true,
      };

    const scrollToTop = () => {
        scroll.scrollToTop(options);
      };
  return (
    <>
      <a onClick={scrollToTop}>
        <div className="grid place-items-center cursor-pointer bg-amazon-blue hover:opacity-75  h-[50px] text-amazon-background ">Back to top</div>
      </a>
      <div className=" bg-amazon-ligh_blue">
        <div className=" text-amazon-background grid py-10 px-4 md:px-8 grid-cols-3 gap-4  max-w-[1000px] m-auto">
          <div className="flex flex-col">
            <p className="font-bold text-lg mb-4">Get to Know Us</p>
            <ul>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">About Amazon</a>
              </li>
              <li>
                <a href="#">Press Conter</a>
              </li>
              <li>
                <a href="#">Sustainability</a>
              </li>
              <li>
                <a href="#">Community Impact</a>
              </li>
              <li>
                <a href="#">Amazon Science</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col ">
            <p className="font-bold text-lg mb-4">Make Money with Us</p>
            <ul>
              <li>
                <a href="#">Sell products on Amazon</a>
              </li>
              <li>
                <a href="#">Become an Affiliate</a>
              </li>
              <li>
                <a href="#">Advertise Your Products</a>
              </li>
              <li>
                <a href="#">Kindle direct publishing</a>
              </li>
              <li>
                <a href="#">See More Make Money with Lis</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-lg mb-4">Let Us Help You</p>
            <ul>
              <li>
                <a href="#">Amazon Payment Products</a>
              </li>
              <li>
                <a href="#">Amazon Point</a>
              </li>
              <li>
                <a href="#">Amazon Gift Cards</a>
              </li>
              <li>
                <a href="#">Shipping Rates & Policies</a>
              </li>
              <li>
                <a href="#">Returns Are Easy</a>
              </li>
              <li>
                <a href="#">Manage Your Content and Devices</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" bg-amazon">
        <div className=" text-amazon-background  grid place-items-center py-10 px-4 md:px-8  max-w-[1000px] m-auto">
          <div>
            <ul className="flex flex-row gap-2">
              <li>
                <a href="#">Conditions of Use</a> |
              </li>
              <li>
                <a href="#">Privacy Notice</a> |
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col ">
            <p className="font-bold text-lg mb-4">© 1996-2022, Amazon.com, Inc. or its affiliates</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

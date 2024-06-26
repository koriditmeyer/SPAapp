/*
 * IMPORTS
 */
import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  CartWidget,
  HeaderBottom,
  NavbarPopup,
  Search,
  ThemeWidget,
} from "../";
import { logo } from "../../assets/index";
import {
  Bars3Icon,
  ChevronDownIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import HandleIpGeoInfo from "../../services/handleIpGeoInfo";
/*
 * COMPONENT
 */
const Navbar = () => {
  /*
   * Function to set if Navlink is active 
   ! Can't use activeClassName on new react-router-dom v6
   */
  function classState() {
    return ({ isActive, isPending, isTransitioning }) =>
      [
        isPending ? "text-gray-300" : "",
        isActive ? "text-green-500 text-[18px]" : "",
        isTransitioning ? "text-gray-500 " : "",
      ].join(" ");
  }

  const [sidebar, setSidebar] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);
  // -------- Disable the side menu on clic outside
  const ref = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    function handleHoverOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setPopupVisible(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mouseover", handleHoverOutside);
  }, [ref]);

  const closePopup = () => {
    setPopupVisible(false);
  };

  const userInfo = useSelector((state) => state.amazonReducer.userInfo);
  // console.log(userInfo);
  if (!userInfo){
    HandleIpGeoInfo(dispatch)
  }

  return (
    <nav className="w-full bg-amazon-blue sticky top-0 z-50 ">
      <div className="w-full mx-auto  text-white px-4 py-2 flex items-center gap-2 ">
        {/* LEFT */}
        <div className="headerHover md:hidden" onClick={() => setSidebar(true)}>
          <Bars3Icon className="h-[30px] m-auto stroke-[2px] inline-block " />
        </div>
        {/* logo */}
        <Link to={""} className="headerHover flex-grow md:flex-grow-0">
          <img src={logo} alt="SPA-logo" className="w-24 mt-2" />
        </Link>
        <Link to={userInfo?.verified ? "/profile" : "/login"}>
          <div className="headerHover items-end hidden md:flex max-w-[200px] max-h-[70px] ">
            <MapPinIcon className="h-[27px] my-auto mr-1" />
            <p className="text-sm text-amazon-lightText font-light flex flex-col  ">
              {userInfo ? (
                `Delivery address: ${userInfo.postal_code}, ${userInfo.city_locality}, ${userInfo.country_code}`
              ) : (
                <>
                  <span>Delivery address:</span>
                  <span className="text-sm font-semibold -mt-1 text-amazon-whiteText">
                    Update your location
                  </span>
                </>
              )}
            </p>
          </div>
        </Link>

        {/* MIDDLE */}
        <div className="hidden md:flex md:flex-grow">
          <Search />
        </div>
        {/* RIGHT */}
        <div
          className="headerHover flex-col items-center  md:flex md:items-start"
          onMouseOver={() => setPopupVisible(true)}
          ref={ref}
        >
          <Link to={userInfo?.verified ? "/profile" : "/login"}>
            <p className="text-sm md:text-xs text-white md:text-amazon-lightText font-light">
              {userInfo?.verified
                ? `Hi ${userInfo.first_name}`
                : "Hello, Log in"}
            </p>
            <p className="text-sm font-semibold -mt-1 text-amazon-whiteText hidden md:inline-flex">
              Accounts & Lists
              <ChevronDownIcon className="h-[15px] m-auto stroke-[3px] pl-2 inline-block" />
            </p>
          </Link>
          {isPopupVisible && <NavbarPopup closePopup={closePopup} />}
        </div>
        <div className="headerHover flex-col items-start hidden md:flex">
          <p className="text-sm text-amazon-lightText font-light">Returns</p>
          <p className="text-sm font-semibold -mt-1 text-amazon-whiteText">
            & Orders
          </p>
        </div>
        <div className="headerHover px-3">
          {/* CART WIDGET */}
          <NavLink to={"/cart"} className={classState()}>
            <CartWidget />
          </NavLink>
        </div>
        {/* <div className="hidden lg:flex">
          <ThemeWidget />
        </div> */}
      </div>
      <div className=" md:hidden p-2">
        <Search />
      </div>
      <HeaderBottom sidebar={sidebar} setSidebar={setSidebar} />
    </nav>
  );
};

export default Navbar;

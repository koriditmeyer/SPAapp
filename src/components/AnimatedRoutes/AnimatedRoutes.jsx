import React from "react";
import { Route, Routes, Outlet, useLocation } from "react-router-dom";
import {
  Navbar,
  ItemListContainer,
  Cart,
  Footer,
  Error,
  Checkout,
  HomePage,
  SearchResults,
  OrderComplete,
  ItemDetailContainer,
  Login,
  Registration,
  Navbar2,
  Footer2,
  Profile,
  ProfileAccount,
} from "..";
import ScrollToTop from "../ScrollRestauration/ScrollRestauration";
import { AnimatePresence } from "framer-motion";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const Layout2 = () => {
  return (
    <div>
      <Navbar2 />
      <Outlet />
      <Footer2 />
    </div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence 
      initial={false}
      mode="wait"
      >
        <ScrollToTop />
        <Routes location={location} key={location.pathname}>
          <Route>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="search" element={<SearchResults />} />
              <Route
                path="category/:categoryId"
                element={<ItemListContainer />}
              />
              <Route path="item/:id" element={<ItemDetailContainer />} />
              <Route path="cart" element={<Cart />} />
              <Route
                path="order-complete/:orderId"
                element={<OrderComplete />}
              />
              <Route
                path="profile"
                element={<Profile />}
              />
              <Route
                path="profile/account"
                element={<ProfileAccount />}
              />
              <Route path="*" element={<Error />} /> {/* Always at the end */}
            </Route>
            <Route element={<Layout2 />}>
              <Route path="checkout" element={<Checkout />} />
              <Route path="register" element={<Registration />} />
              <Route path="login" element={<Login />} />
            </Route>
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};
export default AnimatedRoutes;

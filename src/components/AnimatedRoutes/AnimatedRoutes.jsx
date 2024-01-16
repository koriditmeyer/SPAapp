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

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
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
            <Route path="order-complete/:orderId" element={<OrderComplete />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="*" element={<Error />} /> {/* Always at the end */}
          </Route>
          <Route path="register" element={<Registration />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
export default AnimatedRoutes;

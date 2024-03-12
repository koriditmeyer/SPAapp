import React from "react";
import "./App.css";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  useNavigation,
} from "react-router-dom";
import ThemeProvider from "./context/ThemeProvider";
import { CartProvider } from "./context/CartContext";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence } from "framer-motion";
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
  GlobalSpinner,
  ErrorElement,
  ItemDetailContainerLoader,
  ScrollToTop,
  ItemListContainerLoader,
  SearchResultsLoader,
  ItemList,
  SearchResultsError,
  Unauthorized,
  Verify,
  ProfileAccountLoader,
  ItemListQuery,
} from "./components";
import RequireAuth from "./services/RequireAuth";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  const Layout = () => {
    const navigation = useNavigation(); // Enable useNavigation
    return (
      <>
        {/* {navigation.state === "loading" && <GlobalSpinner />} */}
        <ScrollToTop />
        <Navbar />
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
        <Footer />
      </>
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

  // New vesion of react router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route errorElement={<ErrorElement />}>
            <Route index element={<HomePage />} />
            <Route
              path="search"
              element={<SearchResults />}
              errorElement={<SearchResultsError />}
            >
              <Route
                path=""
                element={<ItemListQuery />}
                errorElement={<SearchResultsError />}
              />
            </Route>
            <Route
              path="category"
              element={<ItemListContainer />}
            >
              <Route
                path=""
                element={<ItemListQuery />}
                errorElement={<SearchResultsError />}
              />
            </Route>
            <Route
              path="products/:id"
              element={<ItemDetailContainer />}
              // loader={ItemDetailContainerLoader}
            />
            <Route path="cart" element={<Cart />} />
            <Route element={<RequireAuth allowedRoles={["user"]} />}>
              <Route path="checkout" element={<Checkout />} />
            </Route>
            <Route element={<RequireAuth allowedRoles={["user", "admin"]} />}>
              <Route
                path="order-complete/:orderId"
                element={<OrderComplete />}
              />
              <Route path="profile" element={<Profile />} />
              <Route
                path="profile/account"
                element={<ProfileAccount />}
                loader={ProfileAccountLoader}
              />
            </Route>
            <Route element={<RequireAuth allowedRoles={["admin"]} />}>
              <Route path="profile/addProducts" element={<Profile />} />
            </Route>
            <Route path="unauthorized" element={<Unauthorized />} />
            <Route path="verify" element={<Verify />} />
            <Route path="*" element={<Error />} /> {/* Always at the end */}
          </Route>
        </Route>
        <Route element={<Layout2 />}>
          <Route path="register" element={<Registration />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Route>
    )
  );

  return (
    <div className="font-bodyfont">
      <ThemeProvider>
        <CartProvider>
          <SkeletonTheme baseColor="#E5E7EB" highlightColor="#CACACA">
            <RouterProvider router={router} />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              stacked
              transition={Bounce}
            />
          </SkeletonTheme>
        </CartProvider>
      </ThemeProvider>
    </div>
  );
}
export default App;

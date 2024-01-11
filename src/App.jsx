import React from "react";
import "./App.css";
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
} from "./components";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import ThemeProvider from "./context/ThemeProvider";
import { CartProvider } from "./context/CartContext";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  // New vesion of react router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="search" element={<SearchResults />} />
        <Route path="category/:categoryId" element={<ItemListContainer />} />
        <Route path="item/:id" element={<ItemDetailContainer />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="order-complete/:orderId" element={<OrderComplete />} />
        <Route path="*" element={<Error />} /> {/* Always at the end */}
      </Route>
    )
  );
  return (
    <div className="font-bodyfont">
      <ThemeProvider>
        <CartProvider>
          <RouterProvider router={router}></RouterProvider>
        </CartProvider>
      </ThemeProvider>
    </div>
  );
}
export default App;

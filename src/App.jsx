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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeProvider from "./context/ThemeProvider";
import { CartProvider } from "./context/CartContext";


function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
          <CartProvider>
            {/* Navbar */}
            <Navbar />
            {/* Main section that change with the routes chosen*/}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="search" element={<SearchResults />} />
              <Route
                path="category/:categoryId"
                element={<ItemListContainer />}
              />
              <Route path="item/:id" element={<ItemDetailContainer />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="order-complete/:orderId" element={<OrderComplete />} />
              <Route path="*" element={<Error />} /> {/* Always at the end */}
            </Routes>
            {/* Footer*/}
            <Footer />
          </CartProvider>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}
export default App;

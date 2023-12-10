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
              <Route path="SPAapp/" element={<HomePage />} />
              <Route path="SPAapp/search" element={<SearchResults />} />
              <Route
                path="SPAapp/category/:categoryId"
                element={<ItemListContainer />}
              />
              <Route path="SPAapp/item/:id" element={<ItemDetailContainer />} />
              <Route path="SPAapp/cart" element={<Cart />} />
              <Route path="SPAapp/checkout" element={<Checkout />} />
              <Route path="SPAapp/order-complete/:orderId" element={<OrderComplete />} />
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

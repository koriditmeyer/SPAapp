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
              <Route path="spaapp/" element={<HomePage />} />
              <Route path="spaapp/search" element={<SearchResults />} />
              <Route
                path="spaapp/category/:categoryId"
                element={<ItemListContainer />}
              />
              <Route path="spaapp/item/:id" element={<ItemDetailContainer />} />
              <Route path="spaapp/cart" element={<Cart />} />
              <Route path="spaapp/checkout" element={<Checkout />} />
              <Route path="spaapp/order-complete/:orderId" element={<OrderComplete />} />
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

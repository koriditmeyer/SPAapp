import React from "react";
import "./App.css";
import { BrowserRouter, ScrollRestoration } from "react-router-dom";
import ThemeProvider from "./context/ThemeProvider";
import { CartProvider } from "./context/CartContext";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";

function App() {
  // New vesion of react router
  return (
    <div className="font-bodyfont">
      <ThemeProvider>
        <CartProvider>
          <BrowserRouter>
            <AnimatedRoutes />
          </BrowserRouter>
        </CartProvider>
      </ThemeProvider>
    </div>
  );
}
export default App;

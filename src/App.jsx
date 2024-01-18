import React from "react";
import "./App.css";
import { BrowserRouter, ScrollRestoration } from "react-router-dom";
import ThemeProvider from "./context/ThemeProvider";
import { CartProvider } from "./context/CartContext";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";
import {  Bounce,ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  // toast.configure({
  //   position: "bottom-right",
  //   autoClose: 5000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   transition: Bounce
  // });

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
      // transition: Bounce
      />
    </div>
  );
}
export default App;

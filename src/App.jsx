import React from "react"
import "./App.css";
import { Navbar, ItemListContainer, Cart, Contact, About, Footer, Error } from "./components";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  return (
    <>
      
      <BrowserRouter>
      {/* Navbar */}
      <nav className="bg-gray-600 w-full overflow-hidden">
        <Navbar/>
      </nav>
      {/* Main section that change with the routes chosen*/}
        <Routes>
          <Route path="SPAapp/" element={<ItemListContainer limit={9}/>} /> {/* Landing page */}
          <Route path="SPAapp/category/:id" element={<ItemListContainer limit={9}/>} />
          <Route path="SPAapp/item/:id" element={<ItemDetailContainer/>} />
          <Route path="SPAapp/cart" element={<Cart/>}/>
          {/* <Route path="SPAapp/checkout" element={<Checkout/>}/>  */}
          <Route path="SPAapp/about" element={<About/>} />
          <Route path="SPAapp/contact" element={<Contact/>} />
          <Route path="*" element={<Error/>} /> {/* Always at the end */}
        </Routes>
      </BrowserRouter>
      {/* Footer*/}
      <Footer/>
    </>
  );
}
export default App;

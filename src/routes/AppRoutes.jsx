import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Shop from "../pages/Shop.jsx";
import ProductPage from "../pages/ProductPage.jsx";
import Cart from "../pages/Cart.jsx";

const AppRoutes = () => {
  return (
   <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/" element={<Shop />} />
    <Route path="/" element={<ProductPage />} />
    <Route path="/" element={<Cart />} />
   </Routes>
  )
}

export default AppRoutes
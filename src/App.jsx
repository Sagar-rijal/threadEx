import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CartPage from "./pages/CartPage.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;

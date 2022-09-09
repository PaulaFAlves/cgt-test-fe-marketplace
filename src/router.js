import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Products from "./components/Products";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Cart from "./components/Cart";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

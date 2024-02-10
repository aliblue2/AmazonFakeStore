import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Account from "./pages/Account"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Routes>
    <Route element={<Home />} index path={"/"}/>
    <Route element={<Account />} path={"/acoount"} />
    <Route element={<Cart />} path={"/cart"} />
    <Route element={<Login />} path={"/login"} />
  </Routes>
  </BrowserRouter>
);

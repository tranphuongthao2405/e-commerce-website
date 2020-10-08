import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import Cart from "./Screen/Cart";
import Home from "./Screen/Home";
import Product from "./Screen/Product";

const App = () => {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}> &#9776;</button>
            <Link to="/">Book Corner</Link>
          </div>
          <div className="header-links">
            <a href="cart.html"> Giỏ hàng </a>{" "}
            <a href="signin.html"> Đăng nhập </a>
          </div>
        </header>
        <aside className="sidebar">
          <h3> Danh mục sản phẩm </h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            X
          </button>
          <ul>
            <li>
              <a href="index.html"> Truyện tranh </a>
            </li>
            <li>
              <a href="index.html"> Sách </a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/product/:id" component={Product} />
            <Route path="/cart/:id?" component={Cart} />
            <Route path="/" exact={true} component={Home} />
          </div>
        </main>
        <footer className="footer"> All rights reserved </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;

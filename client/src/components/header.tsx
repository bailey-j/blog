import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function Header() {
  const [click, setClick] = useState(false);
  const userName = "Jozeene";

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            J's Blog
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tech" className="nav-links" onClick={closeMobileMenu}>
                Tech
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin" className="nav-links" onClick={closeMobileMenu}>
                Admin
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-container">
          <p className="login">
            Logged in as <b>{userName}</b>
          </p>
        </div>
      </nav>
    </>
  );
}

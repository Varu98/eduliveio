import React from "react";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <navigation>
      <div class="logo">
        <h2>
          <span>Edu</span>Live.io
        </h2>
      </div>
      <div class="login-menu">
        <img class="login-avatar" src="./assets/Group 3.jpg" alt="" />
        <div class="login-btn__wrapper">
          {isLoggedIn ? (
            <button
              onClick={() => setIsLoggedIn((prevState) => !prevState)}
              class="btn-logout"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => setIsLoggedIn((prevState) => !prevState)}
              class="btn-login"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </navigation>
  );
};

export default Navbar;

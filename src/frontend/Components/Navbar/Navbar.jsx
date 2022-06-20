import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const {
    authState: { isLoggedIn },
    authDispatch,
  } = useAuth();

  const navigate = useNavigate();
  return (
    <navigation>
      <div class="logo">
        <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
          <h2>
            <span>Edu</span>Live.io
          </h2>
        </Link>
      </div>
      <div class="login-menu">
        <img class="login-avatar" src="./assets/Group 3.jpg" alt="" />
        <div class="login-btn__wrapper">
          {isLoggedIn ? (
            <button
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                authDispatch({ type: "LOGOUT" });
                navigate("/");
              }}
              class="btn-logout"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
              }}
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

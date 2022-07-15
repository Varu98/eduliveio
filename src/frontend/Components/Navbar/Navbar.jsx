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
      <div className="logo">
        <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
          <h2>
            <span>Edu</span>Live.io
          </h2>
        </Link>
      </div>
      <div className="login-menu">
        <img className="login-avatar" src="./assets/Group 3.jpg" alt="" />
        <div className="login-btn__wrapper">
          {isLoggedIn ? (
            <button
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                authDispatch({ type: "LOGOUT" });
                navigate("/");
              }}
              className="btn-logout"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="btn-login"
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

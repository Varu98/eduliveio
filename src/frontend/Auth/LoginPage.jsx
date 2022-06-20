import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { loginService } from "../Services/loginService";
import "./LoginPage.css";

const LoginPage = () => {
  const [loginData, setLoginData] = useState([{ email: "", password: "" }]);
  const { authDispatch } = useAuth();

  const navigate = useNavigate();

  const loginDataHandler = (e) => {
    const { name, value } = e.target;
    setLoginData((prevLoginData) => {
      return { ...prevLoginData, [name]: value };
    });
    console.log(loginData);
  };

  return (
    <div className="mt grid-autofit">
      <form className="fix-width input_form " autoComplete="off">
        <fieldset className="input_fieldset  ">
          <input
            autoComplete="off"
            type="text"
            id="email"
            name="email"
            onKeyUp={(e) => loginDataHandler(e)}
          />
          <label htmlFor="email">Email</label>
          <div className="input-after"></div>
          <span className="material-icons check_icon">check_circle</span>
          <span className="material-icons cross_icon">error</span>
        </fieldset>
        <fieldset className="input_fieldset  ">
          <input
            autoComplete="off"
            type="password"
            id="address"
            name="password"
            onKeyUp={(e) => loginDataHandler(e)}
          />
          <label htmlFor="address">Password</label>
          <div className="input-after"></div>
          <span className="material-icons check_icon">check_circle</span>
          <span className="material-icons cross_icon">error</span>
        </fieldset>
        <button
          onClick={(e) => {
            loginService(e, loginData, navigate, authDispatch);
          }}
          type="submit"
          className="form__btn-login "
        >
          Login
        </button>
        <button
          onClick={() => {
            navigate("/signup");
          }}
          type="click"
          className="form__btn-submit "
        >
          Create New Account
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

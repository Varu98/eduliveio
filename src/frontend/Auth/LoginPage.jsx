import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="mt grid-autofit">
      <form className="fix-width input_form " autoComplete="off">
        <fieldset className="input_fieldset  ">
          <input autoComplete="off" type="text" id="email" name="email" />
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
          />
          <label htmlFor="address">Password</label>
          <div className="input-after"></div>
          <span className="material-icons check_icon">check_circle</span>
          <span className="material-icons cross_icon">error</span>
        </fieldset>
        <button type="submit" className="form__btn-login ">
          Login
        </button>
        <button type="submit" className="form__btn-submit ">
          Create New Account
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

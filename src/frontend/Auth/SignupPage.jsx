import React from "react";
import "./SignupPage.css";
const SignupPage = () => {
  return (
    <div className="mt grid-autofit">
      <form className="fix-width input_form " autoComplete="off">
        <fieldset className="input_fieldset  ">
          <input autoComplete="off" type="text" id="firstName" name="fName" />
          <label htmlFor="firstName">First Name</label>
          <div className="input-after"></div>
          <span className="material-icons check_icon">check_circle</span>
          <span className="material-icons cross_icon">error</span>
        </fieldset>
        <fieldset className="input_fieldset  ">
          <input autoComplete="off" type="text" id="lastName" name="lName" />
          <label htmlFor="lastName">Last Name</label>
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
        <fieldset className="input_fieldset  ">
          <input autoComplete="off" type="text" id="email" name="email" />
          <label htmlFor="email">Email</label>
          <div className="input-after"></div>
          <span className="material-icons check_icon">check_circle</span>
          <span className="material-icons cross_icon">error</span>
        </fieldset>
        <button type="submit" className="btn-submit ">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupPage;

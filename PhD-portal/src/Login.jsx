import React from "react";
import "./Login.css";
import ButtonLink from "./ButtonLink";
import SVULogo from "./assets/SVU-logo.png";
import ganesh from "./assets/ganesh.jpg";

function Login() {
  return (
    <div className="login-container">
      <div className="login-content">
        <img src={SVULogo} alt="Logo" className="logo" />
        <h1>Login to Portal!</h1>
        <ButtonLink className="login-button" to = "/dashboard">Login with Somaiya Email</ButtonLink>
      </div>
      <div className="login-image">
        <img src= {ganesh} alt="Ganesha Statue" />
      </div>
    </div>
  );
}

export default Login;

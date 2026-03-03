import React from "react";
import FormGroup from "../components/FormGroup";
import "../styles/login.scss"

const Login = () => {
  return (
    <main className="login-page">
      <div className="form-container">
        <h1>Login</h1>
        <form>
          <FormGroup label="email" placeholder="Enter email" type="email" />
          <FormGroup label="password" placeholder="password" type="password" />
          <button className="button" type="submit">Login</button>
        </form>
      </div>
    </main>
  );
};

export default Login;

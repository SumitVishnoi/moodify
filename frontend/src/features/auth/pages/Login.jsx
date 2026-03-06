import React, { useState } from "react";
import FormGroup from "../components/FormGroup";
import "../styles/login.scss";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, handleLogin } = useAuth();

  const handleSubmit = async (e)=> {
    e.preventDefault();
    await handleLogin({email, password});
    navigate("/");
  };
  return (
    <main className="login-page">
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <FormGroup
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            label="email"
            placeholder="Enter email"
            type="email"
          />
          <FormGroup
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            label="password"
            placeholder="password"
            type="password"
          />
          <button className="button" type="submit">
            Login
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;

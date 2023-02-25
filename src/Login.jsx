import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const submitvalue = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    localStorage.setItem("userdata", JSON.stringify(data));
    //console.log(data);
    if (email === "demo@coralmango.com" && password === "demo123") {
      navigate("/assign");
    } else {
      setError("invalid credentials");
    }
  };
  return (
    <div className="login1">
      <legend>
        <h2>Login</h2>
      </legend>
      <div>
        <div style={{ color: "red" }}>
          {error ? <span>{error}</span> : null}
        </div>
        <form onSubmit={submitvalue}>
          <input
            className="inputBox"
            type="text"
            placeholder="Please Enter Email id"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />{" "}
          <br />
          <input
            className="inputBox"
            type="password"
            placeholder="Please Enter Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />{" "}
          <br />
          <button className="submit" type="submit">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

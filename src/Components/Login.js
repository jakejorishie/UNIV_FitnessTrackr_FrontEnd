import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const APIURL = "https://fitnesstrac-kr.herokuapp.com/api";

async function loginUser({ username, password }) {
    return fetch(APIURL + "/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch(console.error);
  }
  export default function Login({ setToken }) {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = await loginUser({
        username,
        password,
      });
      console.log(data);
      const token = data.data.token;
      localStorage.setItem("token", token);
      setToken(token)
      navigate("/posts", { replace: true });
    };
  
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "fixed",
          top: "25%",
          left: "42%",
        }}
      >
        <form onSubmit={handleSubmit}>
          <h1> Log in</h1>
          <label>
            <p>Username</p>
            <input type="text" onChange={(e) => setUserName(e.target.value)} />
          </label>
          <div>
            <label>
              <p>Password</p>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
  
          <div
            style={{
              position: "relative",
              top: "5%",
              left: "5%",
            }}
          >
            <button type="login"
            style={{
                display: "flex",
                justifyContent: "center",
                position: "fixed",
                left: "45%",
              }}>Log In</button>
            <div>
              <Link to="/register" 
              style={{
                display: "flex",
                justifyContent: "center",
                position: "fixed",
                top: "57%",
                left: "41%",
              }}>
                Dont have an account?
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
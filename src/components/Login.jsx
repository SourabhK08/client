import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login Success");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="signup-container">
      <form action="" className="signup-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label htmlFor="email">
          Email:
          <input
            type="text"
            name="email"
            id=""
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            id=""
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="submit">Login</button>

        <p>
          Don't have an account? <Link to="/Sign-up">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email) {
      toast.error("Email is required");
      return;
    } else if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!password) {
      toast.error("Password is required");
      return;
    }

    try {
      // Attempt to sign in with the provided email and password
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login Successful!");

      // Redirect after successful login
      navigate("/"); // Change the path to your desired page
    } catch (err) {
      console.error("Login error:", err);

      // Handle different login errors
      switch (err.code) {
        case "auth/user-not-found":
          toast.error("No account found with this email. Please sign up.");
          break;
        case "auth/wrong-password":
          toast.error("Incorrect password. Please try again.");
          break;
        case "auth/too-many-requests":
          toast.error("Too many login attempts. Please try again later.");
          break;
        default:
          toast.error("Failed to login. Please try again.");
          break;
      }
    } finally {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label htmlFor="email">
          Email:
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="submit">Login</button>

        <p>
          Don't have an account? <Link to="/Sign-up">Register</Link>
        </p>
      </form>

      {/* Toast Container to display toasts */}
      <ToastContainer />
    </div>
  );
}

export default Login;

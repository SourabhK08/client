import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      // Attempt to sign up with the provided email and password
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Account created successfully!");
    } catch (err) {
      // Log the error details for debugging
      console.error("Sign up error:", err);

      // Handle different sign-up errors
      switch (err.code) {
        case "auth/email-already-in-use":
          toast.error("Email already in use. Please use a different email.");
          break;
        case "auth/invalid-email":
          toast.error("Invalid email address. Please enter a valid email.");
          break;
        case "auth/weak-password":
          toast.error("Password should be at least 6 characters.");
          break;
        default:
          toast.error("Failed to create an account. Please try again.");
          break;
      }
    } finally {
      // Clear form fields on any form submission attempt
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

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

        <button type="submit">Sign Up</button>

        <p>
          Already Registered? <Link to="/login">Login</Link>
        </p>
      </form>

      {/* Toast Container to display toasts */}
      <ToastContainer />
    </div>
  );
}

export default SignUpForm;

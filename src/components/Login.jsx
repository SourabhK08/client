import React, { useState, useRef } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const recaptchaRef = useRef(null); // Create a ref for reCAPTCHA
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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

    if (!recaptchaToken) {
      toast.error("Please complete the reCAPTCHA");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await axios.post("http://localhost:8000/login", {
        email: user.email,
        password: password,
        recaptchaToken: recaptchaToken, // Send the recaptcha token to your server
      });

      toast.success("Login Successful!");

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      console.error("Login error:", err);
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
      setRecaptchaToken(null);
      if (recaptchaRef.current) {
        recaptchaRef.current.reset(); // Reset the reCAPTCHA
      }
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
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </label>

        <ReCAPTCHA
          sitekey="6Lc3gDUqAAAAAIlCTHGM5X29P6UU1Oxk-bjDlnfA" // Replace with your site key
          onChange={onRecaptchaChange}
          ref={recaptchaRef} // Add the ref to the reCAPTCHA component
        />

        <button type="submit">Login</button>

        <p>
          Don't have an account? <Link to="/sign-up">Register</Link>
        </p>
        <p>
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>
      </form>

      <ToastContainer />
    </div>
  );
}

export default Login;

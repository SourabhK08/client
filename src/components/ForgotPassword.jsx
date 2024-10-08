import React, { useState } from "react";
import { auth } from "../firebase"; // Ensure this path is correct
import { sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email, {
        url: "http://localhost:3000/reset-password", // Your custom reset URL
        handleCodeInApp: true,
      });
      toast.success(
        "Password reset email sent successfully! Check your inbox."
      );
      setEmail("");

      // Redirect to login after a short delay
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      // Show specific error messages based on error code
      if (error.code === "auth/user-not-found") {
        toast.error("No user found with this email address.");
      } else if (error.code === "auth/invalid-email") {
        toast.error("Invalid email address.");
      } else {
        toast.error("Failed to send password reset email. Please try again.");
      }
      console.error(error);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Send Reset Email</button>
        <button type="button" onClick={() => navigate("/login")}>
          Back to Login
        </button>
      </form>
      {/* Toast container to display notifications */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ForgotPassword;

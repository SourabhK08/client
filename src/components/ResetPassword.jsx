import React, { useState } from "react";
import { auth } from "../firebase";
import { confirmPasswordReset } from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const oobCode = queryParams.get("oobCode");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!oobCode) {
      toast.error("Invalid or expired action code.");
      return;
    }

    try {
      console.log("Attempting to reset password..."); // Debug line
      await confirmPasswordReset(auth, oobCode, password);
      toast.success("Password has been reset successfully!");
      console.log("Password reset successful!"); // Debug line

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error("Error resetting password:", error);
      toast.error("Failed to reset password. Please try again.");
    }
  };

  return (
    <div className="reset-password-container">
      <form className="reset-password-form" onSubmit={handleSubmit}>
        <h2>Reset Password</h2>
        <label htmlFor="password">
          New Password:
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Reset Password</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ResetPassword;

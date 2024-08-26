import React from "react";
import "../App.css";

function SignUpForm() {
  return (
    <div className="signup-container">
      <form action="" className="signup-form">
        <h2>Sign Up</h2>

        <label htmlFor="email">
          Email:
          <input type="text" name="email" id="" />
        </label>

        <label htmlFor="password">
          Password:
          <input type="password" name="password" id="" />
        </label>

        <button>Sign Up</button>

        <p>
          Already Registered? <a href="#">Login</a>
        </p>
      </form>
    </div>
  );
}

export default SignUpForm;

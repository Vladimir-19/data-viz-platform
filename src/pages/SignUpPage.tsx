import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "../style/LoginPage.css";
import "../index.css";
import { Button } from "@/components/ui/button";

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await signUp(email, password);
      navigate("/", { replace: true });
    } catch (err) {
      setError("Failed to create an account. Please try again.");
      console.error("Sign-Up error:", err);
    }
  };

  const handleSightInClick = () => {
    navigate("/login");
  };

  return (
    <div className="login-page">
      <div className="dashboard-background">
        <div className="dashboard-content">
          <img
            src="/home.jpg"
            alt="Welcome to the Dashboard"
            className="dashboard-image"
          />
        </div>
      </div>
      <div className="auth-container">
        <div className="auth-form">
          <h2>Sign Up</h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSignUp}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button
              className="active-button"
              type="submit"
              style={{ width: "100%" }}
            >
              Sign Up
            </Button>
          </form>
          <Button
            className="active-button"
            type="submit"
            style={{ width: "100%", marginBlock: "9px" }}
            onClick={handleSightInClick}
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

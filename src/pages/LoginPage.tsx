import React, { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "../style/LoginPage.css";
import "../index.css";
import { Button } from "@/components/ui/button";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(""); // State for email error message
  const [passwordError, setPasswordError] = useState(""); // State for password error message
  const [loginError, setLoginError] = useState(""); // State for login error messages
  const { login, googleLogin, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    setLoginError("");

    let isValid = true;

    // Check for empty fields
    if (!email) {
      setEmailError("Email is required.");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email.");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required.");
      isValid = false;
    }

    if (!isValid) return;

    try {
      await login(email, password);
    } catch (error) {
      setLoginError("Invalid email or password. Please try again.");
      console.error("Login error:", error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      navigate("/", { replace: true });
    } catch (error) {
      setLoginError("Google login failed. Please try again.");
      console.error("Google login error:", error);
    }
  };

  const handleSighUpClick = () => {
    navigate("/signup");
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
          <h2>Login</h2>
          {loginError && <p className="error-message">{loginError}</p>}
          <form onSubmit={handleLogin}>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="error-message">{emailError}</p>}
            <br />

            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p className="error-message">{passwordError}</p>}
            <br />

            <Button
              className="active-button"
              type="submit"
              style={{ width: "100%" }}
            >
              Login
            </Button>
          </form>
          <Button
            className="google-button"
            onClick={handleGoogleLogin}
            style={{ marginTop: "20px", width: "100%" }}
          >
            Login with Google
          </Button>
          <Button
            className="active-button"
            type="submit"
            style={{ width: "100%" }}
            onClick={handleSighUpClick}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

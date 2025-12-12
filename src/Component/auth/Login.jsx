// src/Component/auth/Login.jsx
// 🔗 Backend base URL (env in production, localhost in dev)
const API_BASE =
  (import.meta.env.VITE_API_URL?.replace(/\/+$/, "")) || "http://127.0.0.1:8000";

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // 👈 loader state
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const url = `${API_BASE}/auth/login`;
    console.log("Login → POST", url, "payload:", formData);

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("Login failed:", res.status, text);

        if (res.status === 401) {
          setError("Invalid email or password.");
        } else if (res.status === 404) {
          setError("Login API not found. Check backend URL.");
        } else {
          setError("Login failed. Please try again.");
        }
        return;
      }

      const data = await res.json();

      // Save token + flag
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("isLoggedIn", "true");

      alert("Login successful!");
      navigate("/");
      window.location.reload();
    } catch (err) {
      console.error("Login error:", err);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="login-page">
      <div className="login-card">
        <h1>Welcome Back 👋</h1>
        <p className="login-subtext">Log in to continue to your dashboard</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="view-toggle"
              onClick={() => setShowPassword((v) => !v)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {error && <p className="login-error">{error}</p>}

          <button
            type="submit"
            className={`login-submit ${loading ? "is-loading" : ""}`}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="btn-spinner" />
                <span>Logging you in...</span>
              </>
            ) : (
              "Log In"
            )}
          </button>
        </form>

        <p className="login-footer">
          Don’t have an account?{" "}
          <Link to="/signup" className="signup-link">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

// 🔗 Backend base URL (env in production, localhost in dev)
const API_BASE =
  (import.meta.env.VITE_API_URL?.replace(/\/+$/, "")) || "http://127.0.0.1:8000";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const url = `${API_BASE}/auth/login`;
    console.log("Login → POST", url);

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        setError("Invalid email or password.");
        return;
      }

      const data = await res.json();

      // ✅ Save token in localStorage
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("isLoggedIn", "true");

      alert("Login successful!");
      navigate("/");
      window.location.reload(); // refresh to update navbar instantly
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong.");
    }
  };

  return (
    <main className="login-page">
      <div className="login-card">
        <h1>Welcome Back 👋</h1>
        <p className="login-subtext">Please log in to continue</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* Password field with toggle */}
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
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="login-submit">
            Log In
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

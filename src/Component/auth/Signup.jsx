// 🔗 Backend base URL (env in production, localhost in dev)
const API_BASE =
  (import.meta.env.VITE_API_URL?.replace(/\/+$/, "")) ||
  "http://127.0.0.1:8000";

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // ✅ Validate name: only letters + spaces
    if (name === "name") {
      const regex = /^[A-Za-z\s]*$/;
      if (!regex.test(value)) {
        setError("Full name should contain only letters.");
        return;
      } else {
        setError("");
      }
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const url = `${API_BASE}/auth/register`;
    console.log("Signup → POST", url);

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        // Try to surface backend error if available
        let msg = "Signup failed! Try again.";
        try {
          const body = await res.json();
          if (body?.detail) {
            if (Array.isArray(body.detail) && body.detail[0]?.msg) {
              msg = body.detail[0].msg;
            } else if (typeof body.detail === "string") {
              msg = body.detail;
            }
          }
        } catch {
          // ignore JSON parse error
        }
        setError(msg);
        return;
      }

      await res.json();
      alert("Signup successful!");
      navigate("/login");
    } catch (err) {
      console.error("Signup error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="signup-page">
      <div className="signup-card">
        <h1>Create an Account</h1>

        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* Password field with eye toggle */}
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

          {error && <p className="signup-error">{error}</p>}

          <button type="submit" className="signup-submit">
            Sign Up
          </button>
        </form>

        <p className="signup-footer">
          Already have an account?{" "}
          <Link to="/login" className="login-link">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}

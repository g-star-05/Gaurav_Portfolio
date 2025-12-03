const API_BASE =
  import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

    // ✅ Validate name field (only letters & spaces)
    if (name === "name") {
      const regex = /^[A-Za-z\s]*$/; // only A-Z, a-z, and space allowed
      if (!regex.test(value)) {
        setError("Full name should contain only letters.");
        return;
      } else {
        setError("");
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  try {
    const res = await fetch(`${API_BASE}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      setError("Signup failed! Try again.");
      return;
    }

    const data = await res.json();
    alert("Signup successful!");
    navigate("/login");
  } catch (err) {
    console.error(err);
    setError("Something went wrong.");
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
              onClick={() => setShowPassword(!showPassword)}
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
          <a href="/login" className="login-link">
            Login
          </a>
        </p>
      </div>
    </main>
  );
}

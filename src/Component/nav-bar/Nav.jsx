import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);

    const saved = localStorage.getItem("theme");
    const initialTheme = saved === "light" ? "light" : "dark";
    setTheme(initialTheme);
    document.body.classList.toggle("light", initialTheme === "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.classList.toggle("light", newTheme === "light");
    localStorage.setItem("theme", newTheme);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    alert("Logged out successfully!");
    navigate("/");
    window.location.reload();
  };

  const closeDrawer = () => setOpen(false);

  return (
    <nav className="nav">
      <div className="nav-container">
        {/* Brand */}
        <NavLink to="/" className="brand" onClick={closeDrawer}>
          Gaurav<span className="brand-accent">...</span>
        </NavLink>

        {/* Desktop Menu (visible on desktop only) */}
        <div className="menu">
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* Right Side: Login + Theme + Hamburger */}
        <div className="nav-right">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="login-btn logout">
              Logout
            </button>
          ) : (
            <NavLink to="/login" className="login-btn">
              Login
            </NavLink>
          )}

          {/* Theme Toggle */}
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "dark" ? "🌙" : "☀️"}
          </button>

          {/* Hamburger (mobile only) */}
          <button
            className={`hamburger ${open ? "active" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Drawer (mobile only) */}
      <div className={`drawer ${open ? "open" : ""}`}>
        <div className="drawer-inner">
          <NavLink to="/services" onClick={closeDrawer}>
            Services
          </NavLink>
          <NavLink to="/projects" onClick={closeDrawer}>
            Projects
          </NavLink>
          <NavLink to="/about" onClick={closeDrawer}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={closeDrawer}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

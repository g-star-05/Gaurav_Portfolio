import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Nav from "./Component/nav-bar/Nav";
import "./Component/nav-bar/Nav.css";

import Hero from "./Component/hero/Hero";
import "./Component/hero/Hero.css";

import About from "./Component/about/About";
import "./Component/about/About.css";

import Projects from "./Component/projects/Projects";
import "./Component/projects/Projects.css";

import Footer from "./Component/footer/Footer";
import "./Component/footer/Footer.css";

import Service from "./Component/services/Service";
import "./Component/services/Service.css";

// Auth
import Login from "./Component/auth/Login";      // <- make sure file is Login.jsx
import "./Component/auth/Login.css";

import Signup from "./Component/auth/Signup";    // <- file: Signup.jsx
import "./Component/auth/Signup.css";

export default function App() {
  return (
    <>
      <Nav />

      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Projects />
              <Footer />
            </>
          }
        />

        {/* About page */}
        <Route
          path="/about"
          element={
            <>
              <About />
              <Footer />
            </>
          }
        />

        {/* Projects page */}
        <Route
          path="/projects"
          element={
            <>
              <Projects />
              <Footer />
            </>
          }
        />

        {/* Services page */}
        <Route
          path="/services"
          element={
            <>
              <Service />
              <Footer />
            </>
          }
        />

        {/* Contact / Footer page */}
        <Route path="/contact" element={<Footer />} />

        {/* Login page */}
        <Route path="/login" element={<Login />} />

        {/* Signup page */}
        <Route path="/signup" element={<Signup />} />

        {/* 404 page */}
        <Route
          path="*"
          element={
            <main style={{ padding: "80px 20px", textAlign: "center" }}>
              <h1>404</h1>
              <p>Page not found.</p>
            </main>
          }
        />
      </Routes>
    </>
  );
}

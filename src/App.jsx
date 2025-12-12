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
import Login from "./Component/auth/Login";
import "./Component/auth/Login.css";

import Signup from "./Component/auth/Signup";
import "./Component/auth/Signup.css";

// 🆕 Project Request Page
import ProjectRequest from "./Component/project-request/ProjectRequest";
import "./Component/project-request/ProjectRequest.css";

export default function App() {
  return (
    <>
      <Nav />

      <Routes>
        {/* Home Page */}
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

        {/* About Page */}
        <Route
          path="/about"
          element={
            <>
              <About />
              <Footer />
            </>
          }
        />

        {/* Projects Page */}
        <Route
          path="/projects"
          element={
            <>
              <Projects />
              <Footer />
            </>
          }
        />

        {/* Services Page */}
        <Route
          path="/services"
          element={
            <>
              <Service />
              <Footer />
            </>
          }
        />

        {/* Contact Page */}
        <Route path="/contact" element={<Footer />} />

        {/* 🆕 Project Request Page */}
        <Route
          path="/project"
          element={
            <>
              <ProjectRequest />
              <Footer />
            </>
          }
        />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Signup Page */}
        <Route path="/signup" element={<Signup />} />

        {/* 404 Page */}
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

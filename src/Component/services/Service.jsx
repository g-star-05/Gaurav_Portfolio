import React from "react";
import "./Service.css";

export default function Service() {
  return (
    <section className="service-section">
      <div className="service-container">
        <h1 className="service-title">My Services</h1>
        <p className="service-intro">
          I specialize in building responsive, modern, and high-performance websites using 
          <strong> HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>React</strong>.
        </p>

        <div className="service-cards">
          <div className="service-card">
            <h2>🌐 Web Development</h2>
            <p>Building fully responsive websites and web applications using the latest web technologies.</p>
          </div>

          <div className="service-card">
            <h2>🎨 UI/UX Design</h2>
            <p>Designing clean, user-friendly interfaces and smooth interactions for better user experiences.</p>
          </div>

          <div className="service-card">
            <h2>⚙️ Frontend Optimization</h2>
            <p>Improving website performance, accessibility, and SEO with modern best practices.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

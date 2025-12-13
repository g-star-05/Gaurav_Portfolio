// src/Component/project-request/ProjectRequest.jsx
import React, { useState, useEffect } from "react";
import "./ProjectRequest.css";

// use same pattern as Login/Signup
const API_BASE =
  (import.meta.env.VITE_API_URL?.replace(/\/+$/, "")) || "http://127.0.0.1:8000";

const defaultForm = {
  fullName: "",
  email: "",
  phone: "",
  projectTitle: "",
  projectType: "",
  description: "",
  budget: "",
  timeframe: "",
  reference: "",
  contactMethod: "",
};

export default function ProjectRequest() {
  const [form, setForm] = useState(defaultForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: "success" | "error", msg: string }

  // 🌗 theme state (shared with rest of site via body + localStorage)
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const initial = saved === "light" ? "light" : "dark";
    setTheme(initial);
    document.body.classList.toggle("light", initial === "light");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.body.classList.toggle("light", next === "light");
    localStorage.setItem("theme", next);
  };

  // ✅ VALIDATION ADDED HERE
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Full name → only letters & spaces
    if (name === "fullName") {
      const onlyLetters = /^[A-Za-z\s]*$/;
      if (!onlyLetters.test(value)) {
        // ignore invalid keystroke
        return;
      }
    }

    // Phone → only digits
    if (name === "phone") {
      const onlyDigits = /^[0-9]*$/;
      if (!onlyDigits.test(value)) {
        // ignore invalid keystroke
        return;
      }
    }

    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    // basic required checks
    if (!form.fullName || !form.email || !form.projectType || !form.description) {
      setStatus({
        type: "error",
        msg: "Please fill all required fields marked with *.",
      });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.fullName,
          email: form.email,
          phone: form.phone,
          projectTitle: form.projectTitle,
          projectType: form.projectType,
          description: form.description,
          budget: form.budget,
          timeframe: form.timeframe,
          reference: form.reference,
          contactMethod: form.contactMethod,
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("Contact failed:", res.status, text);
        setStatus({
          type: "error",
          msg: "Could not send your request. Please try again.",
        });
        return;
      }

      setStatus({
        type: "success",
        msg: "Thank you! I’ve received your project details and will contact you soon.",
      });
      setForm(defaultForm);
    } catch (err) {
      console.error("Contact error:", err);
      setStatus({
        type: "error",
        msg: "Network error. Please check your internet and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="project-page">
      <div className="project-card">
        <header className="project-header">
          <div className="project-header-main">
            <h1>Let’s Build Something Great Together</h1>
            <p>Tell me about your project, and I’ll get back to you soon.</p>
          </div>
        </header>

        <form className="project-form" onSubmit={handleSubmit}>
          {/* 1. Basic Details */}
          <section className="project-section">
            <h2>1. Basic Details</h2>
            <div className="project-grid">
              <div className="field">
                <label>
                  Full Name <span className="req">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Your full name"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="field">
                <label>
                  Email Address <span className="req">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="field">
                <label>Phone / WhatsApp Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={handleChange}
                  inputMode="numeric"
                />
              </div>
            </div>
          </section>

          {/* 2. Project Information */}
          <section className="project-section">
            <h2>2. Project Information</h2>

            <div className="field">
              <label>Project Title / Idea</label>
              <input
                type="text"
                name="projectTitle"
                placeholder='E.g. "E-commerce Website for Pet Shop" or "Personal Portfolio Website"'
                value={form.projectTitle}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>
                Project Type <span className="req">*</span>
              </label>
              <select
                name="projectType"
                value={form.projectType}
                onChange={handleChange}
                required
              >
                <option value="">Select project type</option>
                <option value="website-design">Website Design</option>
                <option value="web-dev-frontend">Web Development (Frontend)</option>
                <option value="web-dev-fullstack">Web Development (Full Stack)</option>
                <option value="api-backend">API or Backend Setup</option>
                <option value="landing-page">Landing Page</option>
                <option value="business-site">Business Website</option>
                <option value="other">Other (Custom Requirement)</option>
              </select>
            </div>
          </section>

          {/* 3. Description */}
          <section className="project-section">
            <h2>3. Description</h2>
            <div className="field">
              <label>
                Describe your project or idea in a few lines{" "}
                <span className="req">*</span>
              </label>
              <textarea
                name="description"
                rows="4"
                placeholder="E.g. I want a responsive tourism website with booking options and image gallery."
                value={form.description}
                onChange={handleChange}
                required
              />
            </div>
          </section>

          {/* 4. Budget Range */}
          <section className="project-section">
            <h2>4. Budget Range</h2>
            <div className="field">
              <label>What’s your approximate budget?</label>
              <select
                name="budget"
                value={form.budget}
                onChange={handleChange}
              >
                <option value="">Select budget range</option>
                <option value="5k-10k">₹5,000 – ₹10,000</option>
                <option value="10k-25k">₹10,000 – ₹25,000</option>
                <option value="25k+">₹25,000+</option>
              </select>
            </div>
          </section>

          {/* 5. Deadline / Timeframe */}
          <section className="project-section">
            <h2>5. Deadline / Timeframe</h2>
            <div className="field">
              <label>When do you want your project to be completed?</label>
              <select
                name="timeframe"
                value={form.timeframe}
                onChange={handleChange}
              >
                <option value="">Select timeframe</option>
                <option value="1-week">1 week</option>
                <option value="2-4-weeks">2–4 weeks</option>
                <option value="1-month+">1 month+</option>
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>
          </section>

          {/* 6. Reference (Optional) */}
          <section className="project-section">
            <h2>6. Reference (Optional)</h2>
            <div className="field">
              <label>Share any reference website or design you like</label>
              <textarea
                name="reference"
                rows="2"
                placeholder="E.g. https://example.com or Instagram profile link"
                value={form.reference}
                onChange={handleChange}
              />
            </div>
          </section>

          {/* 7. Preferred Contact Method */}
          <section className="project-section">
            <h2>7. Preferred Contact Method</h2>
            <div className="field">
              <label>How should I contact you?</label>
              <div className="radio-row">
                <label className="radio-pill">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="email"
                    checked={form.contactMethod === "email"}
                    onChange={handleChange}
                  />
                  <span>Email</span>
                </label>
                <label className="radio-pill">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="whatsapp"
                    checked={form.contactMethod === "whatsapp"}
                    onChange={handleChange}
                  />
                  <span>WhatsApp</span>
                </label>
                <label className="radio-pill">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="phone"
                    checked={form.contactMethod === "phone"}
                    onChange={handleChange}
                  />
                  <span>Phone Call</span>
                </label>
              </div>
            </div>
          </section>

          {/* Status message */}
          {status && (
            <p
              className={
                status.type === "success"
                  ? "project-status project-status--success"
                  : "project-status project-status--error"
              }
            >
              {status.msg}
            </p>
          )}

          {/* 8. Submit */}
          <div className="project-submitRow">
            <button
              type="submit"
              className="project-submitBtn"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="btn-spinner" />
                  <span>Sending...</span>
                </>
              ) : (
                "Send Request"
              )}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

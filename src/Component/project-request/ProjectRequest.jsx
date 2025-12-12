import React, { useState, useEffect } from "react";
import "./ProjectRequest.css";

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
  const [status, setStatus] = useState(null);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const initial = saved === "light" ? "light" : "dark";
    setTheme(initial);
    document.body.classList.toggle("light", initial === "light");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // ✅ Full name — allow only letters and spaces
    if (name === "fullName") {
      const onlyLetters = value.replace(/[^A-Za-z\s]/g, "");
      setForm((f) => ({ ...f, [name]: onlyLetters }));
      return;
    }

    // ✅ Phone — allow only digits (+ optional at start)
    if (name === "phone") {
      const onlyNumbers = value.replace(/[^0-9+]/g, "");
      setForm((f) => ({ ...f, [name]: onlyNumbers }));
      return;
    }

    // default
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    // Basic validation
    if (!form.fullName || !form.email || !form.projectType || !form.description) {
      setStatus({
        type: "error",
        msg: "Please fill all required fields marked with *.",
      });
      return;
    }

    // ✅ Full Name validation (only alphabets)
    if (!/^[A-Za-z\s]+$/.test(form.fullName)) {
      setStatus({
        type: "error",
        msg: "Full name should contain only letters.",
      });
      return;
    }

    // ✅ Phone validation (optional but must be numeric if filled)
    if (form.phone && !/^\+?[0-9]{7,15}$/.test(form.phone)) {
      setStatus({
        type: "error",
        msg: "Please enter a valid phone number (digits only, 7–15 long).",
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
                  placeholder="+91 9876543210"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
          </section>

          {/* 2–7 Sections remain unchanged */}
          {/* ... all your other sections here ... */}

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

          {/* Submit */}
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

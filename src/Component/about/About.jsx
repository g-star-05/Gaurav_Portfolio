import React, { useState } from "react";
import "./About.css";
import person from "../../assets/clickme.png"; // replace with your actual image

const About = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(v => !v);

  return (
    <section id="about" className="about">
      <div className="about__container">
        {/* Left: clickable person */}
        <div className="about__figureWrap">
          <button
            className={`about__figureBtn ${open ? "is-open" : ""}`}
            onClick={toggle}
            aria-expanded={open}
            aria-controls="about-panel"
            aria-label={open ? "Hide about me" : "Show about me"}
          >
            <span className="about__glow" aria-hidden="true"></span>
            <img
              src={person}
              alt="Gaurav standing, click to see about me"
              className="about__person"
            />
            <span className="about__tapHint">Tap / Click</span>
          </button>
        </div>

        {/* Right: About Me text */}
        <div
          id="about-panel"
          className={`about__panel ${open ? "is-open" : ""}`}
          role="region"
          aria-label="About me"
        >
          <h2 className="about__title">About Me</h2>
          <p>
            I’m <strong>Gaurav</strong>, a front-end developer passionate about
            building clean, responsive, and modern websites using HTML, CSS,
            JavaScript, and React.
          </p>
          <p>
            I love crafting smooth user experiences, exploring design trends,
            and constantly improving my development skills. When I’m not coding,
            you’ll find me planning new UI ideas or exploring new tools.
          </p>

          <div className="about__facts">
            <div><span className="k">2+</span><small>Years of learning</small></div>
            <div><span className="k">10+</span><small>Projects built</small></div>
            <div><span className="k">React</span><small>Primary stack</small></div>
          </div>

          <div className="about__actions">
            <a href="#projects" className="btn btn--primary">View Projects</a>
            <a href="#contact" className="btn btn--ghost">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

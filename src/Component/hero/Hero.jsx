import React from "react";
import "./Hero.css";
import heroImg from "../../assets/hero-photo.png";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__container">
        {/* Left: text */}
        <div className="hero__copy">
          <p className="hero__eyebrow">
            <span className="hero__dot" aria-hidden="true"></span>
            <span className="hero__hello">Hello</span>
          </p>

          <div className="hero__titleRow">
            <h1 className="hero__intro">
              <span className="hero__border"></span>
              I’m&nbsp;<span className="hero__name">Gaurav Tare</span>
              
            </h1>
            <h1 className="hero__role">Web&nbsp;Developer</h1>
          </div>

          <div className="hero__cta">
            <a href="#contact" className="btn btn--primary">Got a project?</a>
            <a href="#resume" className="btn btn--ghost">My resume</a>
          </div>
        </div>

        {/* Right: image */}
        <div className="hero__visual">
          <div className="hero__ring">
            <img src={heroImg} alt="Gaurav portrait" className="hero__img" />
          </div>
        </div>
      </div>

      <div className="hero__skillsWrap">
        <ul className="hero__skills">
          <li>HTML</li><li>CSS</li><li>JavaScript</li>
          <li>Node.js</li><li>React</li><li>Git</li><li>GitHub</li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;

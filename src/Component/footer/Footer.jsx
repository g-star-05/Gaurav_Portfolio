import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="ft" id="contact">
      <div className="ft__inner">
        {/* Left: contact details */}
        <div className="ft__contact">
          <h3 className="ft__heading">Let’s connect</h3>

          <div className="ft__item">
            <span className="ft__ico" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M6.6 10.8a15.3 15.3 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2a12 12 0 0 0 3.7 1c.5 0 .9.4.9.9v3.4c0 .5-.4.9-.9.9A17.9 17.9 0 0 1 2 6.8c0-.5.4-.9.9-.9H6.3c.5 0 .9.4.9.9.1 1.3.4 2.6 1 3.7.2.4.1.9-.2 1.2l-1.4 1.4Z" />
              </svg>
            </span>
            <a href="tel:+916261000811" className="ft__text">+91 6261000811</a>
          </div>

          <div className="ft__item">
            <span className="ft__ico" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
              </svg>
            </span>
            <a href="mailto:gauravtare2002@gamil.com" className="ft__text">gauravtare2002@gmail.com</a>
          </div>

          <div className="ft__item">
            <span className="ft__ico" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
              </svg>
            </span>
            <span className="ft__text">Sanjay Nagar "B", Burhanpur, MP, India</span>
          </div>
        </div>

        {/* Right: popping text animation */}
        <div className="ft__anim" aria-live="polite">
          <div className="poptext">
            <span>Design.</span>
            <span>Develop.</span>
            <span>Deploy.</span>
            <span>Deliver.</span>
            <span>✨</span>
          </div>

          <small className="type-sub">
            Turning your ideas into fully functional, beautiful websites.
          </small>
        </div>
      </div>

      <div className="ft__bar">
        <p>© {new Date().getFullYear()} Gaurav — All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

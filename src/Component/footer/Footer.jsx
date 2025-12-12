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
            <a href="tel:+916261000811" className="ft__text">
              +91 6261000811
            </a>
          </div>

          <div className="ft__item">
            <span className="ft__ico" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
              </svg>
            </span>
            <a href="mailto:gauravtare2002@gmail.com" className="ft__text">
              gauravtare2002@gmail.com
            </a>
          </div>

          <div className="ft__item">
            <span className="ft__ico" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
              </svg>
            </span>
            <span className="ft__text">
              Sanjay Nagar "B", Burhanpur, MP, India
            </span>
          </div>

          {/* Social Links */}
          <div className="ft__social">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" className="ft__social-ico">
                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2v-2.9h2V9.8c0-2 1.2-3.2 3-3.2.9 0 1.9.2 1.9.2v2.1h-1.1c-1 0-1.3.6-1.3 1.2v1.5h2.4l-.4 2.9h-2v7A10 10 0 0 0 22 12Z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" className="ft__social-ico">
                <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.3 17v-7H5.9v7h2.4Zm-.1-8a1.3 1.3 0 1 0 0-2.7 1.3 1.3 0 0 0 0 2.7ZM18 17v-4.1c0-2.1-1.1-3-2.5-3a2.1 2.1 0 0 0-2 1h-.1v-.8h-2.3V17h2.4v-3.8c0-1 .5-1.6 1.4-1.6s1.4.6 1.4 1.6V17H18Z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" className="ft__social-ico">
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7Zm10 2c1.6 0 3 1.4 3 3v10c0 1.6-1.4 3-3 3H7c-1.6 0-3-1.4-3-3V7c0-1.6 1.4-3 3-3h10Zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.5 5.5 0 0 0 12 7.5Zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5ZM17.8 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
              </svg>
            </a>
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

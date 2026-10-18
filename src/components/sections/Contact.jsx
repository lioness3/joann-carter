import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaCopy,
  FaCommentDots,
  FaLinkedin,
  FaGithub,
  FaBehance,
} from "react-icons/fa";
import Button from "../Button";
import "../../styles/sections/contact.css";
const Contact = () => {
  const email = "Joann333Carter@gmail.com";
  const phone = "(603) 566-5610";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    alert("Email copied to clipboard!");
  };
  const handleEmail = () => {
    const subject = encodeURIComponent("Inquiry from Portfolio");
    const body = encodeURIComponent(
      "Hi Joann, I'd like to get in touch regarding...",
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const handleText = () => {
    const smsLink = `sms:${phone.replace(/\D/g, "")}`;
    window.location.href = smsLink;
  };

  return (
    <section className="contact-container" id="contact-me">
      {/* left column: wording and site info */}
      <div className="contact-about">
        <div className="contact-values">
          <span>Designing with empathy.</span>
          <span>Driven by curiosity.</span>
          <span>Committed to growth.</span>
        </div>
        <div className="contact-updated">Last Updated: October 2026</div>
        <div className="contact-location">Based in New Hampshire, EST</div>
        <div className="contact-copyright">
          © 2026 Joann Carter. All rights reserved
        </div>
      </div>

      {/* right column: ways to reach me */}
      <div className="contact-links">
        <div className="contact-group">
          <h3 className="contact-group-title">Message me</h3>
          <div className="contact-actions">
            <Button
              classN="contact-btn"
              icon={<FaEnvelope />}
              onClick={handleEmail}
              btnText={"Email"}
            />
            <Button
              classN="contact-btn"
              icon={<FaPhone />}
              onClick={() =>
                (window.location.href = `tel:${phone.replace(/\D/g, "")}`)
              }
              btnText={"Call"}
            />
            <Button
              classN="contact-btn"
              icon={<FaCommentDots />}
              onClick={handleText}
              btnText={"Text"}
            />
          </div>
          <div className="contact-subtitle">
            <span className="email-text">{email}</span>
            <FaCopy
              className="copy-icon"
              onClick={copyEmail}
              title="Copy email"
            />
          </div>
        </div>

        <div className="contact-group">
          <h3 className="contact-group-title">Find me online</h3>
          <div className="contact-socials">
            <a
              href="https://www.linkedin.com/in/joann-carter/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/lioness3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://www.behance.net/Carter-Joann"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBehance /> Behance
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

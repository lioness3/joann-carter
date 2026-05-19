import React from "react";
import { FaEnvelope, FaPhone, FaCopy, FaCommentDots } from "react-icons/fa";
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
      <div className="contact-section">
        <Button
          classN="contact-btn"
          icon={<FaEnvelope />}
          onClick={handleEmail}
          btnText={"Email Me"}
          primary={true}
        />

        <div className="contact-subtitle">
          <span className="email-text">{email}</span>
          <FaCopy
            className="copy-icon"
            onClick={copyEmail}
            title="Copy email"
          />
        </div>
      </div>

      <div className="contact-section">
        <Button
          classN="contact-btn"
          icon={<FaPhone />}
          onClick={() =>
            (window.location.href = `tel:${phone.replace(/\D/g, "")}`)
          }
          btnText={"Call Me"}
          primary={true}
        />
      </div>

      <div className="contact-section">
        <Button
          classN="contact-btn"
          icon={<FaCommentDots />}
          onClick={handleText}
          btnText={"Text Me"}
          primary={true}
        />
      </div>
    </section>
  );
};

export default Contact;

import React from "react";
import "../styles/sectionTitle.css";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <section className="section-title-bg">
      <div className="section-title-text">
        <h2 className="section-title-heading">{title}</h2>
      </div>

      {subtitle && <p className="section-title-subtitle">{subtitle}</p>}
    </section>
  );
};

export default SectionTitle;

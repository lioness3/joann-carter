import React from "react";
import { Link } from "react-router-dom";
import "../../styles/sections/caseStudies.css";
const CaseStudyCard = ({
  mainImage,
  bgColor,
  title,
  description,
  id,
  featured,
}) => {
  return (
    <Link
      to={`/case-study/${id}`}
      className="case-study-link"
      style={{ textDecoration: "none" }}
    >
      <div
        className={`case-study-card${featured ? " featured" : ""}`}
        style={{
          backgroundImage: `url(${mainImage})`,
          backgroundColor: bgColor,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Label on the featured case study card */}
        {featured && (
          <span className="featured-label">
            <svg
              className="featured-star"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2.5l2.94 5.96 6.56.95-4.75 4.63 1.12 6.54L12 17.5l-5.87 3.08 1.12-6.54L2.5 9.41l6.56-.95L12 2.5z" />
            </svg>
            Featured
          </span>
        )}
        <div style={{ background: bgColor }}>
          <div className="case-study-banner">
            <h3 className="case-study-title">{title}</h3>

            <p className="case-study-description">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CaseStudyCard;

import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { useState } from "react";
import { skillsList } from "../../data/skillsList";
import workIcon from "../../assets/icons/Work.svg";
import eduIcon from "../../assets/icons/Edu.svg";
import skillsIcon from "../../assets/icons/brain.svg";
import "../../styles/sections/Resume.css";

const Resume = () => {
  // Default to UX
  const [activeFilter, setActiveFilter] = useState("UX");

  // Extract arrays from your data structure
  const { Software, UX } = skillsList[0];

  // Build "All" dynamically
  const allSkills = [...new Set([...UX, ...Software])];

  // Determine which list to show
  const getFilteredSkills = () => {
    if (activeFilter === "UX") return UX;
    if (activeFilter === "Software") return Software;
    return allSkills;
  };
  return (
    <section className="resume-wrapper" id="resume-section">
      <a
        href="/UX_Engineer_Resume_JoannCarter.pdf"
        type="application/pdf"
        download
        className="resume-download-btn"
        onClick={() => console.log("Resume downloaded")}
      >
        <FaFileDownload />
        Download
      </a>
      {/* Work History */}
      <div className="resume-content-section">
        <div className="resume-title-wrapper">
          <img
            className="resume-title-icon"
            src={workIcon}
            alt="briefcase icon"
          />
          <h2 className="resume-title">Work History</h2>
        </div>

        <div className="resume-item">
          <h3 className="resume-job-title">
            AI Training Specialist{" "}
            <span className="resume-date">(2025 – Present)</span>
          </h3>
          <p className="resume-job-type">Private Contract</p>
          <p className="resume-job-description">
            Contributes to AI model development by testing, writing, and
            comparing code across HTML, Python, React, and JavaScript. Provides
            feedback to refine AI output and improve model accuracy.
          </p>
        </div>

        <div className="resume-item">
          <h3 className="resume-job-title">
            Web and Mobile Development{" "}
            <span className="resume-date">(2020 – Present)</span>
          </h3>
          <p className="resume-job-type">Private Contract</p>
          <p className="resume-job-description">
            Builds and refines front‑end and back‑end code for responsive web
            and mobile experiences. Focuses on clean performance, strong
            security, and smooth interaction.
          </p>
        </div>

        <div className="resume-item">
          <h3 className="resume-job-title">
            Full‑Stack Internship <span className="resume-date">(2020)</span>
          </h3>
          <p className="resume-job-type">Moica</p>
          <p className="resume-job-description">
            Worked on an Ionic app using TypeScript and React. Improved scroll
            functions in the app’s calendar and organized codebase into reusable
            parts.
          </p>
        </div>
      </div>

      {/* Education */}
      <div className="resume-content-section">
        <div className="resume-title-wrapper">
          <img
            className="resume-title-icon"
            src={eduIcon}
            alt="education icon"
          />
          <h2 className="resume-title">Education</h2>
        </div>
        <div className="resume-item">
          <h3 className="resume-job-title">
            UX Design Course{" "}
            <span className="resume-date">(2025 – Present)</span>
          </h3>
          <p className="resume-job-type">Google, Coursera</p>
          <p className="resume-job-description">
            Expands skills in UX research, prototyping, and ideation. Includes
            hands‑on experience with user interviews, wireframing, and usability
            testing.
          </p>
        </div>

        <div className="resume-item">
          <h3 className="resume-job-title">
            B.S. in Computer Science <span className="resume-date">(2023)</span>
          </h3>
          <p className="resume-job-type">Southern New Hampshire University</p>
          <p className="resume-job-description">
            Earned a Bachelor of Science in Software Engineering with a 4.0 GPA.
            Coursework included full‑stack development, system architecture, and
            cybersecurity.
          </p>
        </div>

        <div className="resume-item">
          <h3 className="resume-job-title">
            Web and Mobile Development{" "}
            <span className="resume-date">(2020)</span>
          </h3>
          <p className="resume-job-type">Epicodus, Portland, OR</p>
          <p className="resume-job-description">
            Completed an intensive coding bootcamp with pair‑programming.
            Strengthened communication and teamwork skills.
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="resume-content-section">
        <div className="resume-title-wrapper">
          <img
            className="resume-title-icon"
            src={skillsIcon}
            alt="skillset icon"
          />
          <h2 className="resume-title">Skills</h2>
        </div>
        {/* FILTER BUTTONS */}
        <div className="skills-filter">
          <button
            className={activeFilter === "UX" ? "active" : ""}
            onClick={() => setActiveFilter("UX")}
          >
            UX
          </button>

          <button
            className={activeFilter === "Software" ? "active" : ""}
            onClick={() => setActiveFilter("Software")}
          >
            Software
          </button>

          <button
            className={activeFilter === "All" ? "active" : ""}
            onClick={() => setActiveFilter("All")}
          >
            All
          </button>
        </div>
        <p className="filter-description">Filter the skills by category.</p>
        {/* FILTERED SKILLS */}
        <ul className="skills-list">
          {getFilteredSkills().map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Resume;

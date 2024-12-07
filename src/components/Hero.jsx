// Top section of webpage called 'Hero'
import "./styles/hero.css";
import Pdf from "../images/Resume_JoannCarter_Nov24.pdf";
import headShot from "../images/headshot.png";
import { useEffect, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import Tooltip from "@mui/material/Tooltip";

export default function Hero() {
  const roles = [
    "Software Engineering.",
    "Front-End Development.",
    "Full-Stack Development.",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showCaret, setShowCaret] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (showCaret) {
        // If currently showing caret, switch to the next word
        setShowCaret(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % roles.length);
      } else {
        // If currently showing a word, switch to the caret
        setShowCaret(true);
      }
    }, 2000); // how often it changes

    return () => clearTimeout(timer);
  });

  return (
    <div className="hero-content">
      {/* first column */}
      <div className="intro">
        <h1 className="hello">Hello,</h1>
        <h1 className="name">I&apos;m Joann.</h1>
        <p className="currently-seeking">
          Currently seeking a role in
          <br />
          {showCaret ? (
            <span className="caret"> |</span> // Show the blinking caret
          ) : (
            <span className="role"> {roles[currentWordIndex]}</span> // Show the current word
          )}{" "}
        </p>
        <p className="last-updated">Last Updated: December, 2024</p>
      </div>
      {/* second column */}
      <div>
        <img className="portfolio-pic" src={headShot} alt="headshot of Joann" />
      </div>
      <div className="link-group">
        <a href="https://github.com/lioness3" target="_blank" rel="noreferrer">
          <Tooltip title="Visit Github">
            <GitHubIcon fontSize="large" />
          </Tooltip>
        </a>
        <a
          href="https://linkedin.com/in/joann-carter/"
          target="_blank"
          rel="noreferrer"
        >
          <Tooltip title="Visit LinkedIn">
            <LinkedInIcon fontSize="large" />
          </Tooltip>
        </a>
        <a href={Pdf} target="_blank" rel="noopener noreferrer">
          <Tooltip title="Download Resume">
            <SystemUpdateAltIcon fontSize="large" />
          </Tooltip>
        </a>
      </div>
    </div>
  );
}

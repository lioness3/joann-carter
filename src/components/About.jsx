import { useState, useEffect, useRef } from "react";
import "./styles/about.css";
import Pdf from "../images/JoannCarter_Resume_3_2025.pdf";
import Tooltip from "@mui/material/Tooltip";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import cat from "../images/shadow.jpg";
import truck from "../images/truck.png";

import { FaRegHandshake } from "react-icons/fa";
import { IoSchoolOutline } from "react-icons/io5";
import { GoLightBulb } from "react-icons/go";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { MdOutlineEmojiNature } from "react-icons/md";
import { GiBrain } from "react-icons/gi";

import { FaCaretDown } from "react-icons/fa";

export default function About() {
  const [showContentHire, setShowContentHire] = useState(true); //used to hide/show Hire Me content- shows front side first
  const [showContentCurrently, setShowContentCurrently] = useState(true); //used to hide/show Currently content - shows front side first
  const [showContentCreative, setShowContentCreative] = useState(true); //used to hide and show Creative content - shows front side first
  const [showContentFreeTime, setShowContentFreeTime] = useState(true); // used to hide/show free time content - shows front side first
  const [showContentGrad, setShowContentGrad] = useState(true); //used to hide/show that I have a degeree - shows front side first
  const logoSize = 48; //decorative logo SIZE on about cards
  const logoColor = "rgba(0,0,0,.8)"; //decorative logo SIZE on about cards

  //hide and show scro;; ocpn to prompt user to scroll more
  const [showIcon, setShowIcon] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = scrollRef.current.scrollTop;
      //when the div starts to scroll, hide the scroll icon
      if (scrollTop > 3) {
        setShowIcon(false);
      } else {
        setShowIcon(true);
      }
    };
    scrollRef.current.addEventListener("scroll", handleScroll);
  }, []);
  return (
    // HIRE ME
    <div className="about-section">
      <div ref={scrollRef} className="about-track">
        {showIcon ? (
          <div className="scroll-cont">
            <p className="scroll-memo">SCROLL DOWN </p>{" "}
            <FaCaretDown size={168} className="scroll-icon" />
            <FaCaretDown size={168} className="scroll-icon" />
            <FaCaretDown size={168} className="scroll-icon" />
          </div>
        ) : null}
        <div
          className="about-card "
          onClick={() => setShowContentHire(!showContentHire)}
        >
          {showContentHire ? (
            <div>
              {/* Front side Hire Me */}
              <p className="sm-heading">You should </p>
              <p className="lg-heading button-highlight">HIRE ME</p>
              <FaRegHandshake size={logoSize} color={logoColor} />
              <p className="med-text">
                {" "}
                because I am trust-worthy, a
                <span className="keyword-link"> fast-learner</span>, and eager
                to work!{" "}
              </p>
              <p className="subtle-heading"> click to learn more</p>
            </div>
          ) : (
            <div>
              {/* Backside, shows when clicked */}
              <p className="back-heading">Why Hire Me?</p>
              <p className="back-text">
                I&apos;m a dedicated software engineer with a strong foundation
                in JavaScript, and React.
              </p>
              <p className="back-text">
                Through extensive pair programming at Epicodus, an internship,
                and continueing education, I&apos;ve honed my skills in
                collaboration, problem-solving, and efficient coding practices.
              </p>
              <p className="back-text">
                {" "}
                I&apos;m passionate about crafting clean, maintainable, and
                user-friendly applications, and I thrive in fast-paced,
                collaborative environments.{" "}
              </p>
            </div>
          )}
        </div>
        {/* GRAD */}
        <div
          className="about-card"
          onClick={() => setShowContentGrad(!showContentGrad)}
        >
          {showContentGrad ? (
            <div>
              {/* Front side GRAD */}
              <p className="sm-heading">Academic Excellence </p>
              <p className="lg-heading button-highlight">4.0 GPA</p>
              <IoSchoolOutline size={logoSize} color={logoColor} />
              <p className="med-text">
                B.S.C.S.
                <br />
                with a <br />
                <span className="keyword-link">
                  Software Enginnering Major.
                </span>
              </p>
              <p className="subtle-heading"> click to learn more</p>
            </div>
          ) : (
            <div className="contact-me">
              {/* Backside, shows when clicked */}
              <p className="back-heading">Coding Bootcamp </p>
              <p className="back-text">
                A coding boot camp in Portland, Oregon, intensified my ability
                to collaborate effectively through peer programming and quickly
                adapt to new challenges.
              </p>
              <div className="contact-link-group">
                <a
                  href="https://github.com/lioness3"
                  target="_blank"
                  rel="noreferrer"
                >
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
          )}
        </div>
        {/* CREATIVE GOAL */}
        <div
          className="about-card"
          onClick={() => setShowContentCreative(!showContentCreative)}
        >
          {showContentCreative ? (
            <div>
              {/* Front side CREATIVE */}
              <p className="sm-heading">I turn </p>
              <p className="lg-heading  animated-text">CREATIVE</p>
              <GoLightBulb size={logoSize} color={logoColor} />
              <p className="med-text">
                ideas into tangible
                <span className="keyword-link"> solutions</span>, combining
                technical expertise with a keen eye for design.
              </p>
              <p className="subtle-heading"> click to learn more</p>
            </div>
          ) : (
            <div>
              {/* Backside, shows when clicked */}
              <p className="back-heading">Creative and Logical</p>
              <GiBrain size={logoSize} color={logoColor} />
              <p className="back-text">
                My goal is to build user-friendly and visually appealing
                applications that solve real-world problems.
              </p>
              <p className="back-text">
                Let&apos;s work together and achieve greatness!
              </p>
            </div>
          )}
        </div>

        {/* CURRENTLY */}
        <div
          className="about-card"
          onClick={() => setShowContentCurrently(!showContentCurrently)}
        >
          {showContentCurrently ? (
            <div>
              {/* Front side CURRENTLY */}
              <p className="sm-heading">I am </p>
              <p className="lg-heading button-highlight">CURRENTLY</p>
              <HiMiniDevicePhoneMobile size={logoSize} color={logoColor} />
              <p className="med-text">
                enrolled in an online course,
                {/* working on a mobile application called, */}
                <br />
                <span className="keyword-link"> Google UX Design </span>
                {/* <span className="keyword-link"> Dine or Ditch </span> */}
              </p>
              <p className="subtle-heading"> click to learn more</p>
            </div>
          ) : (
            <div className="construction">
              {/* Backside, shows when clicked */}
              <p className="back-heading">Dine or Ditch </p>
              <p className="back-text">
                An app that helps users decide where to eat.
              </p>
              <p className="back-text">
                I am currently working on improving the UX design of the app
                that I am building. This app uses your location to suggest a
                random nearby restaurant. Built with React Native, Expo, and
                TypeScript.
              </p>
              <p className="construction-text">
                This app is under construction to improve the UI/UX.
              </p>
              {/* <p className="back-text">
                An app that helps users decide where to eat.
              </p>
              <p className="back-text">
                Feeling hungry? Let Dine or Ditch decide! This app uses your
                location to suggest a random nearby restaurant. Built with React
                Native, Expo, and TypeScript.
              </p>
              <p className="construction-text">
                This app is still under construction.
              </p> */}

              <img
                className="const-truck"
                src={truck}
                alt="construction truck for decoration animation"
              />
            </div>
          )}
        </div>

        {/* FREE TIME */}
        <div
          className="about-card"
          onClick={() => setShowContentFreeTime(!showContentFreeTime)}
        >
          {showContentFreeTime ? (
            <div>
              {/* Front side FREE TIME */}
              <p className="sm-heading">In my </p>
              <p className="lg-heading button-highlight">FREE TIME</p>
              <MdOutlineEmojiNature size={logoSize} color={logoColor} />
              <p className="med-text">
                I enjoy making art out of recycled material, recharging in
                nature and traveling with
                <span className="keyword-link"> my cat</span>.
              </p>
              <p className="subtle-heading"> click to learn more</p>
            </div>
          ) : (
            <div className="cat-img">
              {/* Backside, shows when clicked */}
              <img src={cat} alt="cat" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import PropTypes from "prop-types";
import "./styles/creation.css";
import { AiFillGithub } from "react-icons/ai";
import lightbulb from "../images/lightbulb.svg";
import { AiFillCloseCircle } from "react-icons/ai";
export default function Creation({
  title,
  description,
  language,
  wireframe,
  contributions,
  colors,
  afterthoughts,
  demo,
  gitLink,
  onClose,
}) {
  return (
    // TITLE
    <div className="creation-section">
      <div className="prj-card">
        <p className="prj-header"> Title:</p>
        <p className="prj-title">{title}</p>
        <AiFillCloseCircle className="close-btn" onClick={onClose} />
      </div>
      {/* TECH IMG */}
      <div className=" prj-card inline-display">
        <p className="prj-header">Technology:</p>
        <div className="tech-container">
          {language.map((img, index) => (
            <img
              src={img}
              key={index}
              className="tech-used"
              alt={"technology used"}
            />
          ))}
        </div>
      </div>
      {/* DESCRIPTION */}
      <div className="prj-card">
        <p className="prj-header"> Description:</p>
        <p className="prj-content">{description}</p>
      </div>
      {/* DEMO IMG */}
      <div className="prj-card">
        <p className="prj-header"> Demo:</p>
        <div className="demo-group">
          {demo.map((picUrl, index) => (
            <img src={picUrl} key={index} className="demo-img" alt={"demo"} />
          ))}
        </div>
      </div>
      {/* COLOR PALETTE */}
      <div className="prj-card inline-display">
        <p className="prj-header"> Color Palette:</p>
        <div className="color-palette-cont">
          {colors.map((pcolor, index) => (
            <div
              className="color-block"
              style={{ backgroundColor: pcolor }}
              key={index}
            ></div>
          ))}
        </div>
      </div>
      {/* CONTRIBUTIONS */}
      <div className="prj-card">
        <p className="prj-header">Contributions:</p>
        <p className="prj-content">{contributions}</p>
      </div>
      {/* AFTER THOUGHTS */}
      <div className="prj-card ">
        <p className="prj-header"> Afterthoughts:</p>
        <p className="prj-content">{afterthoughts}</p>
      </div>
      {/* If there is a git repo, show the icon with a link to that source code */}
      {gitLink ? (
        <div className="prj-card git-cont">
          <p className="prj-header"> View the source code:</p>
          <a href={gitLink} target="_blank" rel="noopener noreferrer">
            <AiFillGithub size={48} color={"var(--button-color)"} />
          </a>
        </div>
      ) : null}
      <div className="bottom-buttons">
        <AiFillCloseCircle className="close-btn-btm" onClick={onClose} />
      </div>
    </div>
  );
}
Creation.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  language: PropTypes.array,
  contributions: PropTypes.string,
  colors: PropTypes.array,
  afterthoughts: PropTypes.string,
  demo: PropTypes.array,
  wireframe: PropTypes.string,
  gitLink: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

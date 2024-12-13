import PropTypes from "prop-types";
import "./styles/creation.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdOutlineNavigateNext } from "react-icons/md";
import { forwardRef } from "react";
const Creation = forwardRef((props, ref) => {
  const buttonSize = 32;
  return (
    // TITLE
    <div className="creation-section" ref={ref}>
      <div className="prj-card">
        <p className="prj-header"> Title:</p>
        <p className="prj-title">{props.title}</p>
        <AiFillCloseCircle
          className="close-btn"
          onClick={props.onClose}
          size={buttonSize}
        />
      </div>
      {/* TECH IMG */}
      <div className=" prj-card inline-display">
        <p className="prj-header">Technology:</p>
        <div className="tech-container">
          {props.language.map((img, index) => (
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
        <p className="prj-content">{props.description}</p>
      </div>
      {/* DEMO IMG */}
      <div className="prj-card">
        <p className="prj-header"> Demo:</p>
        <div className="demo-group">
          {props.demo.map((picUrl, index) => (
            <img src={picUrl} key={index} className="demo-img" alt={"demo"} />
          ))}
        </div>
      </div>
      {/* COLOR PALETTE */}
      <div className="prj-card inline-display">
        <p className="prj-header"> Color Palette:</p>
        <div className="color-palette-cont">
          {props.colors.map((pcolor, index) => (
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
        <p className="prj-content">{props.contributions}</p>
      </div>
      {/* AFTER THOUGHTS */}
      <div className="prj-card ">
        <p className="prj-header"> Afterthoughts:</p>
        <p className="prj-content">{props.afterthoughts}</p>
      </div>
      {/* If there is a git repo, show the icon with a link to that source code */}
      {props.gitLink ? (
        <div className="prj-card git-cont">
          <p className="prj-header"> View the source code:</p>
          <a href={props.gitLink} target="_blank" rel="noopener noreferrer">
            <AiFillGithub size={48} color={"var(--button-color)"} />
          </a>
        </div>
      ) : null}
      <div className="bottom-buttons">
        <AiFillCloseCircle
          className="close-btn-btm"
          onClick={props.onClose}
          size={buttonSize}
        />
        <MdOutlineNavigateNext
          size={buttonSize}
          className="next-btn-btm"
          onClick={props.onNext}
        />
      </div>
    </div>
  );
});
Creation.displayName = "Creation";
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
  onNext: PropTypes.func.isRequired,
};
export default Creation;

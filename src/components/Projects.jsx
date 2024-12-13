import "./styles/projects.css";
import content from "./Content";
import { useState, useRef, useEffect } from "react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Creation from "./Creation";
import cssLogo from "../images/css-3.svg";
import jsLogo from "../images/jsLogo.png";
import reactLogo from "../images/react-native-1.svg";
import pythonLogo from "../images/python.svg";
import javaLogo from "../images/java.svg";
import htmlLogo from "../images/html-5.svg";
import dockerLogo from "../images/docker.svg";
import gitLogo from "../images/githubWhite.svg";

export default function Projects() {
  const [showMore, setShowMore] = useState(false);
  const [checked, setChecked] = useState(true);
  const [prjInFocus, setPrjInFocus] = useState({});
  const creationRef = useRef(null);

  const handleShowMore = (index) => {
    // toggle the show more state from true to false with each click
    setShowMore(!showMore);
    setPrjInFocus(content[index]); // Access project by index
  };
  const handleNextPrj = () => {
    const currentIdx = content.indexOf(prjInFocus); // Get current index
    const nextIdx = (currentIdx + 1) % content.length; // Wrap around for last project
    setPrjInFocus(content[nextIdx]);
  };
  const handleChecked = (event) => {
    setChecked(event.target.checked);
  };
  useEffect(() => {
    if (creationRef.current) {
      // Scroll to the top of the Creation component
      creationRef.current.scrollTop = 0;
    }
  }, [prjInFocus]);

  return (
    <div className="projects-section">
      {checked ? (
        <div className="logo-background-container">
          <img src={cssLogo} className="flying-image" alt="logo" />
          <img src={jsLogo} className="flying-image" alt="logo" />
          <img src={reactLogo} className="flying-image" alt="logo" />
          <img src={pythonLogo} className="flying-image" alt="logo" />
          <img src={javaLogo} className="flying-image" alt="logo" />
          <img src={htmlLogo} className="flying-image" alt="logo" />
          <img src={dockerLogo} className="flying-image" alt="logo" />
          <img src={gitLogo} className="flying-image" alt="logo" />
        </div>
      ) : null}
      <div className="projects-track">
        <div className="prj-trk-header">
          <p> Title </p> <p>Technology</p>
        </div>
        {content.map((proj) => (
          <div
            key={proj.id}
            className="prjs-card"
            onClick={() => handleShowMore(proj.id)}
          >
            <h4 className="prj-card-title">{proj.title}</h4>

            <div className="logo-group">
              {proj.language.map((language, index) => (
                <img
                  key={index}
                  className="logo-img"
                  src={language}
                  alt=" logo"
                />
              ))}
            </div>
          </div>
        ))}
        <FormControlLabel
          control={
            <Switch
              checked={checked}
              onChange={handleChecked}
              size="small"
              color="var(--primary-color)"
              sx={{
                "& .MuiSwitch-track": {
                  backgroundColor: checked
                    ? "var(--primary-color)"
                    : "var(--grey-color)",
                  opacity: ".7",
                },
                "& .MuiSwitch-thumb": {
                  backgroundColor: checked
                    ? "var(--primary-color)"
                    : "var(--grey-color)",
                },
              }}
            />
          }
          label="Animate Background"
          sx={{
            color: checked ? "var(--grey-color)" : "var(--primary-color)",
            "& .MuiFormControlLabel-label": {
              fontSize: ".75rem", // Set your desired font size here
              opacity: ".6",
            },
          }}
        />
      </div>

      {/* shows the details of the project the user clicks on
                if show more is true then render the creation component */}
      {showMore ? (
        <Creation
          ref={creationRef}
          title={prjInFocus.title}
          description={prjInFocus.description}
          language={prjInFocus.language}
          contributions={prjInFocus.contributions}
          colors={prjInFocus.colors}
          afterthoughts={prjInFocus.afterthoughts}
          demo={prjInFocus.demo}
          wireframe={prjInFocus.wireframe}
          gitLink={prjInFocus.gitLink}
          onClose={handleShowMore}
          onNext={handleNextPrj}
        />
      ) : null}
    </div>
  );
}

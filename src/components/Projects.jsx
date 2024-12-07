import "./styles/projects.css";
import content from "./Content";
import { useState } from "react";
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
  const [prjInFocus, setPrjInFocus] = useState({});

  const handleShowMore = (project) => {
    // toggle the show more state from true to false with each click
    setShowMore(!showMore);
    setPrjInFocus(project);
  };

  return (
    <div className="projects-section">
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
      <div className="projects-track">
        {content.map((proj) => (
          <div
            key={proj.id}
            className="prjs-card"
            onClick={() => handleShowMore(proj)}
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
      </div>

      {/* shows the details of the project the user clicks on
                if show more is true then render the creation component */}
      {showMore ? (
        <Creation
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
        />
      ) : null}
    </div>
  );
}

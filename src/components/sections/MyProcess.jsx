import LoadingImage from "../LoadingImage";
import personaMock from "../../assets/images/persona-mockup.png";
import lowFi from "../../assets/images/low-fi-mockup.png";
import highFi from "../../assets/images/hi-fi-mockup.png";
import uxCycle from "../../assets/images/design_cycle.png";
import developmentMockup from "../../assets/images/development-iMac-24-inch.png";
import empathize from "../../assets/images/empathize.png";
import analyzingCompetitors from "../../assets/images/analyzingCompetitors.png";
import "../../styles/sections/myProcess.css";
// This section explains my design process and uses a igag display pattern
export default function MyProcess() {
  return (
    <section id="my-process" className="process-wrapper">
      <div className="process-section">
        <div className="process-text-container">
          <h3>Idea to Finished Design</h3>
          <p className="process-text">
            Follow a real life{" "}
            <a
              href="https://www.figma.com/design/Nx5d5BMkTyRCxPRHQhE54D/Dine-or-Ditch?node-id=0-1&t=h8akLGDqkMIhD1wn-1"
              target="_blank"
              rel="noopener noreferrer"
              className="process-link"
            >
              example
            </a>{" "}
            of my design process from an idea to a finished design, with each
            step documented in Figma.
          </p>
        </div>
        <div className="process-image-container">
          <LoadingImage
            src={uxCycle}
            alt="Illustration of the design cycle in the UX design process."
          />
        </div>
      </div>
      <div className="process-section">
        <div className="process-text-container">
          <h3>Listen & Empathize</h3>
          <p className="process-text">
            Being <span className="process-bold-word">empathetic</span> and
            truly listening to understand the people I am designing for is the
            <span className="process-bold-word">
              {" "}
              foundation to my design process
            </span>
            . I strive to create a safe and open space for users to share their
            thoughts, feelings, and experiences.
          </p>
        </div>
        <div className="process-image-container">
          <LoadingImage
            src={empathize}
            alt="Illustration of the empathize phase in the UX design process."
          />
        </div>
      </div>

      <div className="process-section">
        <div className="process-text-container">
          <h3>User Research</h3>
          <p className="process-text">
            User research grounds my design decisions in real evidence rather
            than assumptions or trends. By{" "}
            <span className="process-bold-word">
              uncovering genuine user needs
            </span>
            , pain points, and motivators, I’m able to focus on the right
            problems and design solutions that feel intuitive and meaningful.
          </p>
        </div>
        <div className="process-image-container">
          <LoadingImage
            src={personaMock}
            alt="Mock up of a Luis the laborer persona."
          />
          <p className="img-subtext">An example of a real user story I did.</p>
        </div>
      </div>
      <div className="process-section">
        <div className="process-text-container">
          <h3>Analyze Competitors</h3>
          <p className="process-text">
            I study competitors to understand what
            <span className="process-bold-word"> works well </span>and
            <span className="process-bold-word"> what does not</span>. This
            helps me keep things intuitive while also discovering opportunities
            in the gaps I find.
          </p>
        </div>
        <div className="process-image-container">
          <LoadingImage
            src={analyzingCompetitors}
            alt="Illustration of the analyzing competitors phase in the UX design process."
          />
        </div>
      </div>
      <div className="process-section">
        <div className="process-text-container">
          <h3>Low-Fidelity Prototypes</h3>
          <p className="process-text">
            I use Low‑fi prototypes to help me
            <span className="process-bold-word"> explore ideas quickly </span>
            and stay focused on the core experience without getting distracted
            by visuals. This lets me test and adjust before anything becomes too
            precious to change.
          </p>
        </div>
        <div className="process-image-container">
          <LoadingImage
            src={lowFi}
            alt="Mock up of a Low Fidelity Prototype from the camp store app design process."
          />
          <p className="img-subtext">My actual prototype.</p>
        </div>
      </div>
      <div className="process-section">
        <div className="process-text-container">
          <h3>High-Fidelity Prototypes</h3>
          <p className="process-text">
            High‑fi prototypes are my favorite part of the process because they
            <span className="process-bold-word"> bring the design to life</span>
            ! This is where I get to see how the visuals and interactions work
            together to support the user experience. It also gives clients a
            realistic view of how the final product will function and feel.
          </p>
        </div>
        <div className="process-image-container">
          <LoadingImage
            src={highFi}
            alt="Mock up of a High Fidelity Prototype from the camp store app design process."
          />
          <p className="img-subtext">I brought this prototype to life.</p>
        </div>
      </div>
      <div className="process-section">
        <div className="process-text-container">
          <h3>Development</h3>
          <p className="process-text">
            I also develop the code that makes my prototypes functional. Several
            of my development projects are available to view on{" "}
            <a
              href="https://github.com/lioness3"
              target="_blank"
              rel="noopener noreferrer"
              className="process-link"
            >
              GitHub
            </a>
            .
          </p>
        </div>

        <div className="process-image-container">
          <LoadingImage
            src={developmentMockup}
            alt="Mock up of a High Fidelity Prototype from the camp store app design process."
          />
          <p className="img-subtext">A real screenshot from my laptop.</p>
        </div>
      </div>
    </section>
  );
}

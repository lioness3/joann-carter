import LoadingImage from "../LoadingImage";
import portraitImage from "../../assets/images/portrait.jpeg";
import "../../styles/sections/aboutMe.css";
export default function AboutMe() {
  return (
    <section className="about-wrapper" id="about-me">
      <div className="about-bio-panel">
        <h2 className="about-quote">
          “I believe good design should feel natural, not instructional.”
        </h2>

        <div className="about-image">
          <LoadingImage src={portraitImage} alt="Portrait of Joann" />
        </div>
      </div>
      <p className="about-description">
        I am a UX Engineer who blends creativity with logical thinking. I create
        intuitive experiences with accessibility and inclusivity in mind,
        ensuring all users feel empowered and never overwhelmed.
      </p>
    </section>
  );
}

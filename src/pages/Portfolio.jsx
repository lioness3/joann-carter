import Hero from "../components/sections/Hero";
import SectionTitle from "../components/SectionTitle";
import CaseStudies from "../components/sections/CaseStudies";

import MyProcess from "../components/sections/MyProcess";
import AboutMe from "../components/sections/AboutMe";
import Resume from "../components/sections/Resume";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Portfolio({ studies }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      const el = document.getElementById(sectionId);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
      // Clear state so a page reload doesn't re-trigger the scroll
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location, navigate]);
  return (
    <main>
      {/* HERO SECTION */}
      <Hero />
      {/* CASE STUDIES SECTION */}
      <SectionTitle
        title={"Case Studies"}
        subtitle={
          "A mix of real-world and continuing education projects that I have collected over the past few years. "
        }
      />
      <CaseStudies studies={studies} />
      {/* MY PROCESS SECTION */}
      <SectionTitle
        title={"My Process"}
        subtitle={"A look into how I approach design challenges."}
      />
      <MyProcess />
      {/* RESUME SECTION */}
      <SectionTitle
        title={"Resume"}
        subtitle={
          "Download my resume to learn more about my background, skills, and experience."
        }
      />
      <Resume />
      {/* ABOUT ME SECTION */}
      <SectionTitle
        title={"About me"}
        subtitle={
          "Learn more about my background, skills, and experience as a UX designer."
        }
      />
      <AboutMe />

      {/* CONTACT SECTION */}
      <SectionTitle
        title={"Contact"}
        subtitle={"Get in touch with me through email, call, or text."}
      />
      <Contact />
      <Footer />
    </main>
  );
}

export default Portfolio;

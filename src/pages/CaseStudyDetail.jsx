import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import InfoCard from "../components/cards/InfoCard";
import CaseStudySideMenu from "../components/navigation/CaseStudySideMenu";
import CaseStudyContentsMenu from "../components/navigation/CaseStudyContentsMenu";
import "../styles/caseStudyDetailPage.css";

function CaseStudyDetail({ studies }) {
  const { id } = useParams();
  const study = studies.find((s, idx) => String(idx) === id);
  const [contentsOpen, setContentsOpen] = useState(false);

  const categories = study.categories;
  const caseStudyInfo = Object.entries(categories);
  // color palette of the case study used for block coloring on some info cards
  const colorPalette = study.palette;

  const [activeId, setActiveId] = useState(null);
  const observer = useRef(null);
  const scrollRef = useRef(null);
  const suppressObserverRef = useRef(false);
  const suppressTimeoutRef = useRef(null);

  // RESETS THE SCROLL POSITION WHEN THE CASE STUDY CHANGES
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "instant" });
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  // FIGURES OUT THE POSITION OF THE CARD IN VIEW WHILE SCROLLING
  useEffect(() => {
    if (!scrollRef.current) return;

    const isMobile = window.innerWidth <= 969;
    const options = {
      root: isMobile ? null : scrollRef.current,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0.1,
    };

    observer.current = new IntersectionObserver((entries) => {
      if (suppressObserverRef.current) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);

    const sections = document.querySelectorAll(".info-card");
    sections.forEach((sec) => observer.current.observe(sec));

    return () => observer.current.disconnect();
  }, [id]); // < rerun this when the case study changes

  // Called when a side-menu / contents item is clicked. Pins the active id and
  // mutes the IntersectionObserver while the smooth scroll animates, so
  // intermediate sections can't flicker the highlight onto the wrong item.
  const handleMenuSelect = (key) => {
    setActiveId(key);
    suppressObserverRef.current = true;
    if (suppressTimeoutRef.current) clearTimeout(suppressTimeoutRef.current);

    const release = () => {
      suppressObserverRef.current = false;
      if (suppressTimeoutRef.current) {
        clearTimeout(suppressTimeoutRef.current);
        suppressTimeoutRef.current = null;
      }
      scrollRef.current?.removeEventListener("scrollend", release);
      window.removeEventListener("scrollend", release);
    };

    const isMobile = window.innerWidth <= 969;
    if (isMobile) {
      window.addEventListener("scrollend", release, { once: true });
    } else {
      scrollRef.current?.addEventListener("scrollend", release, { once: true });
    }
    // Fallback for browsers without scrollend, or if no scroll ever fires.
    suppressTimeoutRef.current = setTimeout(release, 1200);
  };

  // Error handling for lost case study data
  if (!study) return <div>Case study not found.</div>;

  return (
    <div className="case-study-detail-layout">
      {/* LEFT SIDE MENU */}
      <CaseStudySideMenu
        categories={categories}
        activeId={activeId}
        onSelect={handleMenuSelect}
      />
      {/* RIGHT CONTENT */}
      <div className="case-study-right-col">
        {/* Simple Header */}
        <div className="case-study-simple-header">
          <div className="header-right">
            <h1 className="simple-header-title">{study.title}</h1>
            <span className="simple-header-type">{study.type}</span>
          </div>
          {/* Mobile Contents - shows the back to case studies button and contents drop down */}
          <div className="mobile-contents">
            <Link
              to="/"
              state={{ scrollTo: "case-studies" }}
              className="mobile-back-btn"
            >
              ←
            </Link>
            <button
              className="contents-btn"
              onClick={() => setContentsOpen((prev) => !prev)}
            >
              Contents▾
            </button>
            <CaseStudyContentsMenu
              categories={categories}
              open={contentsOpen}
              setOpen={setContentsOpen}
            />
          </div>
        </div>
        <div className="case-study-scrolling-container" ref={scrollRef}>
          {/* Loops through the caseStudies.js data file and displays the info on cards  */}
          {caseStudyInfo.map(([key, category]) => {
            return (
              <InfoCard
                key={key}
                id={key}
                category={category}
                colorPalette={colorPalette}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CaseStudyDetail;

//top navigation bar
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/navigation/navbar.css";
import ThemeToggle from "../ThemeToggle";
import Logo from "../../assets/images/logo/logo-joanncarter.png";
import GlobalMobileMenu from "./GlobalMobileMenu";
import HamburgerIcon from "../../assets/icons/hamburger.svg";
// section ids in page order, used to HIGHLIGHT the link of the section in view
const SECTION_LINKS = [
  { id: "case-studies", label: "Case Studies" },
  { id: "my-process", label: "My Process" },
  { id: "resume-section", label: "Resume" },
  { id: "about-me", label: "About Me" },
  { id: "contact-me", label: "Contact" },
];

function Navbar() {
  const [globalOpen, setGlobalOpen] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const navRef = useRef(null);
  const clickLock = useRef(false);
  const { pathname } = useLocation();

  // ACTIVEID follows the section whose TITLE has reached the navbar
  useEffect(() => {
    if (pathname !== "/") return;
    const update = () => {
      // a clicked link stays active while the smooth scroll finishes
      if (clickLock.current) return;
      const navBottom = navRef.current?.offsetHeight ?? 0;
      const atPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      let current = null;
      SECTION_LINKS.forEach(({ id }) => {
        const el = document.getElementById(id);
        const title = el?.previousElementSibling;
        if (title && title.getBoundingClientRect().top <= navBottom + 50) {
          current = id;
        }
      });
      setActiveId(atPageBottom ? "contact-me" : current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  // no link is highlighted on other pages like CASE STUDY details
  const shownId = pathname === "/" ? activeId : null;

  const handleLinkClick = (id) => {
    clickLock.current = true;
    setActiveId(id);
    // unlock after the smooth scroll has had time to land
    setTimeout(() => {
      clickLock.current = false;
    }, 1500);
  };

  useEffect(() => {
    const syncHeight = () => {
      if (navRef.current) {
        document.documentElement.style.setProperty(
          "--nav-height",
          `${navRef.current.offsetHeight}px`,
        );
      }
    };
    syncHeight();
    window.addEventListener("resize", syncHeight);
    return () => window.removeEventListener("resize", syncHeight);
  }, []);

  return (
    <nav className="nav-bar" ref={navRef}>
      <button
        className="hamburger-btn"
        onClick={() => setGlobalOpen((prev) => !prev)}
      >
        <img src={HamburgerIcon} alt="Hamburger Icon" />
      </button>
      <div className="logo">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={Logo} alt="Logo" />
        </Link>
      </div>

      <GlobalMobileMenu open={globalOpen} setOpen={setGlobalOpen} />
      <div className="nav-bar-menu-items">
        {SECTION_LINKS.map(({ id, label }) => (
          <Link
            key={id}
            to="/"
            state={{ scrollTo: id }}
            className={shownId === id ? "active" : undefined}
            onClick={() => handleLinkClick(id)}
          >
            {label}
          </Link>
        ))}
      </div>

      <div className="nav-actions">
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;

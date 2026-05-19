//top navigation bar
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../styles/navigation/navbar.css";
import ThemeToggle from "../ThemeToggle";
import Logo from "../../assets/images/logo/logo-joanncarter.png";
import GlobalMobileMenu from "./GlobalMobileMenu";
import HamburgerIcon from "../../assets/icons/hamburger.svg";
function Navbar() {
  const [globalOpen, setGlobalOpen] = useState(false);
  const navRef = useRef(null);

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
        <Link to="/" state={{ scrollTo: "case-studies" }}>
          Case Studies
        </Link>

        <Link to="/" state={{ scrollTo: "my-process" }}>
          My Process
        </Link>
        <Link to="/" state={{ scrollTo: "resume-section" }}>
          Resume
        </Link>
        <Link to="/" state={{ scrollTo: "about-me" }}>
          About Me
        </Link>

        <Link to="/" state={{ scrollTo: "contact-me" }}>
          Contact
        </Link>
      </div>

      <div className="nav-actions">
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;

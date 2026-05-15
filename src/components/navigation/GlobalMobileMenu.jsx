import "../../styles/navigation/globalMobileMenu.css";
import { Link } from "react-router-dom";

export default function GlobalMobileMenu({ open, setOpen }) {
  const closeMenu = () => setOpen(false);

  return (
    <>
      <div
        className={`global-overlay ${open ? "open" : ""}`}
        onClick={closeMenu}
      />

      <nav className={`global-mobile-menu ${open ? "open" : ""}`}>
        <Link to="/" state={{ scrollTo: "case-studies" }} onClick={closeMenu}>
          Case Studies
        </Link>
        <Link to="/" state={{ scrollTo: "my-process" }} onClick={closeMenu}>
          My Process
        </Link>
        <Link to="/" state={{ scrollTo: "resume-section" }} onClick={closeMenu}>
          Resume
        </Link>
        <Link to="/" state={{ scrollTo: "about-me" }} onClick={closeMenu}>
          About Me
        </Link>
        <Link
          to="/"
          onClick={() => {
            closeMenu();
            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
          }}
        >
          Contact
        </Link>
      </nav>
    </>
  );
}

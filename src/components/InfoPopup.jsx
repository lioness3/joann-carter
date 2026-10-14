import { useState, useEffect } from "react";
import "../styles/infoPopup.css";
export default function InfoPopup() {
  const [open, setOpen] = useState(false);
  // handles pop up when clicking on user experience engineer
  useEffect(() => {
    function handlePointerDown() {
      setOpen(false);
    }

    if (open) {
      document.addEventListener("pointerdown", handlePointerDown);
    }

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [open]);

  return (
    <div className="info-wrapper">
      {!open && (
        <div>
          <h4 className="info-trigger" onClick={() => setOpen(!open)}>
            User Experience Engineer
          </h4>
          <p className="hero-description">
            Combining logic and empathy to make technology feel intuitive.
          </p>
        </div>
      )}
      {open && (
        //pop up that opens and closes based on user click
        <div className="info-popup">
          A <span id="title-bold">User Experience Engineer</span> uses how
          people feel when interacting with a product to make technology easier
          to use.
        </div>
      )}
    </div>
  );
}

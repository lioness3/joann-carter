import { useState, useEffect } from "react";
import { CgScrollV } from "react-icons/cg";

function ScrollIcon() {
  const [showIcon, setShowIcon] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (document.getElementById("about-track").scrollY > 10) {
        console.log("====================================");
        console.log("scroll100");
        console.log("====================================");
        setShowIcon(false);
      } else {
        setShowIcon(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="scroll-icon"
      style={{ display: showIcon ? "block" : "none" }}
    >
      <CgScrollV color="yellow" />
    </div>
  );
}

export default ScrollIcon;

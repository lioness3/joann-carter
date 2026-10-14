import React from "react";
import "../../styles/sections/hero.css";
import heroImage from "../../assets/images/heroImage.png";
import Button from "../Button";
import InfoPopup from "../InfoPopup";
import { FaArrowRight } from "react-icons/fa";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="hero-name">Joann Carter</h1>
        <InfoPopup />
        <Button
          classN="btn-cta"
          icon={<FaArrowRight />}
          link="https://www.figma.com/design/Nx5d5BMkTyRCxPRHQhE54D/Dine-or-Ditch?node-id=0-1&t=h8akLGDqkMIhD1wn-1"
          btnText={"View My Design Process"}
        />
      </div>

      <div className="hero-right">
        <img src={heroImage} alt="Portrait" className="hero-image" />
      </div>
    </section>
  );
}

import "../../styles/cards/prototypeCard.css";
import Button from "../Button";

export default function PrototypeCard({ image, link, btnText, description }) {
  return (
    <div className="prototype-card">
      <div className="prototype-col1">
        <img src={image} alt="Prototype" />

        {link && (
          <Button
            icon={null}
            onClick={null}
            btnText={btnText}
            variant="secondary"
            link={link}
          />
        )}

        <p className="prototype-btn-desc">Try out the Prototype on Figma</p>
      </div>

      <div className="prototype-col2">
        {description && <p className="prototype-description">{description}</p>}
      </div>
    </div>
  );
}

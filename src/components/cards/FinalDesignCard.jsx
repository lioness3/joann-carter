import "../../styles/cards/finalDesignCard.css";
import Button from "../Button";

export default function FinalDesignCard({
  images = [],
  btnText,
  link,
  buttonDescription,
}) {
  return (
    <section className="final-design-card">
      <div className="final-design-images">
        {images.map((img, i) => (
          <img key={i} src={img} alt={` screen ${i + 1}`} />
        ))}
      </div>
      <div className="final-design-bottom">
        {link && (
          <Button
            btnText={btnText}
            link={link}
            variant="secondary"
            classN="final-design-btn"
          />
        )}
        {buttonDescription && (
          <p className="final-design-desc">{buttonDescription}</p>
        )}
      </div>
    </section>
  );
}

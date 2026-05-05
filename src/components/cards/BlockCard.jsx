// Mini block to render on the cards that uses the color palette as the background
import "../../styles/cards/blockCard.css";
export default function BlockCardList({
  item,
  bgColor,
  feedback = false,
  quote = "",
}) {
  if (feedback == true) {
    return (
      <div
        className="block-card feedback-block"
        // passes bgColor as a CSS variable so blockCard.css can layer it over white
        style={{ "--block-color": bgColor }}
      >
        <p className="block-card-feedback">{quote}</p>
      </div>
    );
  } else {
    return (
      <div
        className="block-card"
        // passes bgColor as a CSS variable so blockCard.css can layer it over white
        style={{ "--block-color": bgColor }}
      >
        <h3 className="block-card-title">{item.title}</h3>
        <p className="block-card-description">{item.description}</p>
      </div>
    );
  }
}

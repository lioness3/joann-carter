import "../styles/button.css";

export default function Button({
  classN = "",
  icon = null,
  iconRight = false,
  onClick,
  btnText = "",
  // "primary" | "secondary" | "outline"
  variant = "primary",
  link = "",
}) {
  const iconEl = icon && <span className="button-icon">{icon}</span>;
  const textEl = btnText && <span className="button-text">{btnText}</span>;
  const children = (
    <>
      {iconRight ? textEl : iconEl}
      {iconRight ? iconEl : textEl}
    </>
  );

  if (variant === "outline") {
    return (
      <button
        type="button"
        className={`custom-outline-button ${classN}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  if (variant === "primary") {
    // LINK renders a real anchor with PRIMARY styling, otherwise a BUTTON
    if (link) {
      return (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`custom-primary-button ${classN}`}
        >
          {children}
        </a>
      );
    }
    return (
      <button
        type="button"
        className={`custom-primary-button ${classN}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  // SECONDARY — link style
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`custom-secondary-button ${classN}`}
    >
      {children}
    </a>
  );
}

import "./styles/footer.css";
import CopyButton from "./CopyButton.jsx";

export default function Footer() {
  return (
    <div className="footer-container">
      <CopyButton
        textToCopy="Joann333Carter@gmail.com"
        textToDisplay="Joann333Carter@gmail.com"
      />
      <CopyButton
        textToCopy="603 566 - 5610"
        textToDisplay="Text or Call: (603) 566-5610"
      />
    </div>
  );
}

import "./styles/footer.css";
import Header from "./Header";

export default function Footer() {
  return (
    <div className="footer-container">
      {/* <h1 className="footer-title">Contact Me</h1> */}

      <p className="footer-email"> Joann333Carter@gmail.com</p>
      <p className="footer-phone"> (603)566-5610</p>
      <div className="handshake-container">
        <div className="hand hand1"></div>
        <div className="hand hand2"></div>
      </div>
    </div>
  );
}

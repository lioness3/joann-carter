import { useNavigate } from "react-router-dom";
import RobotAnimation from "../components/RobotAnimation";
import Button from "../components/Button";
import "../styles/errorPage.css";

export default function ErrorPage({ code = 404 }) {
  const navigate = useNavigate();

  const messages = {
    404: { heading: "Page not found.", sub: "This page doesn't exist or was moved." },
    500: { heading: "Something went wrong.", sub: "An unexpected error occurred." },
  };

  const { heading, sub } = messages[code] ?? messages[404];

  return (
    <div className="error-page">
      <RobotAnimation />
      <h1 className="error-code">{code}</h1>
      <p className="error-message">{heading}</p>
      <p className="error-sub">{sub}</p>
      <Button
        btnText="Go home"
        primary={true}
        onClick={() => navigate("/")}
      />
    </div>
  );
}

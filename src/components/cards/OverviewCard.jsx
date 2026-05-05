import "../../styles/cards/overviewCard.css";
import Button from "../Button";
import { FaGithub } from "react-icons/fa";

export default function OverviewCard({
  role,
  timeline,
  tools,
  catchPhrase,
  summary,
  image,
  sourceCode,
}) {
  return (
    <div>
      <div className="overview-details">
        <span className="overview-label">Role:</span>
        <span> {role} | </span>
        <span className="overview-label">Timeline:</span>
        <span> {timeline} | </span>
        <span className="overview-label">Tools: </span>
        <span>{tools}</span>
      </div>
      <h4 className="info-card-headline">{catchPhrase}</h4>
      <p className="info-card-description">{summary}</p>
      <img src={image} alt="Overview" className="info-card-image" />

      {sourceCode && (
        <Button
          classN="sourcecode_btn"
          icon={<FaGithub />}
          btnText="View the Source Code"
          primary={false}
          link={sourceCode}
        />
      )}
    </div>
  );
}

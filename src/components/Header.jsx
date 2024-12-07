import PropTypes from "prop-types";
import "./styles/header.css";
export default function Header({ content }) {
  return (
    <div className="header-card">
      {/* uses predefined character entities to look like "<Content/>" */}
      <p className="header-title">
        &lt;<span>{content}</span> &frasl; &gt;
      </p>
    </div>
  );
}
// define content as a type string
Header.propTypes = {
  content: PropTypes.string,
};

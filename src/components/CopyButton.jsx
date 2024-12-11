import { useState } from "react";
import "./styles/CopyButton.css";

import PropTypes from "prop-types";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function CopyButton({ textToCopy, textToDisplay }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500); // Reset after 1.5 seconds
  };

  return (
    <CopyToClipboard text={textToCopy} onCopy={handleCopy}>
      <button className="copy-word">
        {isCopied ? "Copied!" : textToDisplay}
      </button>
    </CopyToClipboard>
  );
}
CopyButton.propTypes = {
  textToCopy: PropTypes.string,
  textToDisplay: PropTypes.string,
};

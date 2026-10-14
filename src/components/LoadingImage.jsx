import { useState } from "react";

// drop-in IMG replacement, shows SHIMMER placeholder until image LOADS
// LAZY loading defers offscreen images, ONERROR clears placeholder too
export default function LoadingImage({ className = "", alt = "", ...props }) {
  const [loaded, setLoaded] = useState(false);

  // CACHED images can finish before ONLOAD attaches, so check COMPLETE on REF
  const checkComplete = (el) => {
    if (el?.complete) setLoaded(true);
  };

  return (
    <img
      ref={checkComplete}
      loading="lazy"
      alt={alt}
      // IMG-LOADING class adds the shimmer from GLOBAL.CSS
      className={`${className} ${loaded ? "" : "img-loading"}`.trim()}
      onLoad={() => setLoaded(true)}
      onError={() => setLoaded(true)}
      {...props}
    />
  );
}

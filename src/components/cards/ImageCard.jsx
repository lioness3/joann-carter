import { useRef, useState, useEffect } from "react";
import "../../styles/cards/imageCard.css";

export default function ImageCard({ images, descriptions, intro }) {
  const isSingle = images.length === 1;
  const scrollRef = useRef(null);
  const [isScrollable, setIsScrollable] = useState(false);
  // DISPLAYS a scroll indicator by watching the scroll container to see if images are isScrollable.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const check = () => setIsScrollable(el.scrollWidth > el.clientWidth);
    check();

    const observer = new ResizeObserver(check);
    observer.observe(el);
    return () => observer.disconnect();
  }, [images]);

  // No images fallback
  if (!Array.isArray(images) || images.length === 0) {
    return (
      <div className="image-card empty">
        <p>No images available.</p>
      </div>
    );
  }

  return (
    <div className="image-card">
      {intro && <p className="image-card-intro">{intro}</p>}
      <div ref={scrollRef} className={isSingle ? "single" : "multiple"}>
        {images.map((img, index) => (
          <figure key={index} className="image-card-item">
            <img src={img} alt="" />
            <figcaption className="image-card-caption">
              {descriptions[index] || ""}
            </figcaption>
          </figure>
        ))}
      </div>
      {isScrollable && (
        <p className="image-card-scroll-indicator">
          Scroll to see more &gt; &gt;
        </p>
      )}
    </div>
  );
}

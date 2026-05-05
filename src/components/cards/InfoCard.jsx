// StudyCard.jsx
import React from "react";
import "../../styles/cards/infoCard.css";
import BlockCard from "./BlockCard";
import ImageCard from "./ImageCard";
import PrototypeCard from "./PrototypeCard";
import UsabilityCard from "./UsabilityCard";
import FinalDesignCard from "./FinalDesignCard";
import OverviewCard from "./OverviewCard";
import Button from "../Button";

// Gets the data to display from the case studies data
// determines what card to display through the type key in the categories part of the data
export default function InfoCard({ id, category, colorPalette }) {
  return (
    <section className="info-card" id={id}>
      {/* Icon display on card */}
      <div className="info-card-col1">
        {category.icon && (
          <img
            src={category.icon}
            alt={`${category.title} icon`}
            className="card-icon"
          />
        )}
      </div>

      <div className="info-card-col2">
        <h2 className="info-card-title">{category.title}</h2>
        {/* grey divider  */}
        <div className="info-card-divider" />
        {/* Display for OVERVIEW Card */}
        {category.type === "overview" && (
          <OverviewCard
            role={category.role}
            timeline={category.timeline}
            tools={category.tools}
            catchPhrase={category.catchPhrase}
            summary={category.summary}
            image={category.image}
            sourceCode={category.sourceCode}
          />
        )}
        {/* Display for text cards */}
        {category.type === "text" && (
          <div>
            <h4 className="info-card-headline">{category.headline}</h4>
            <p className="info-card-description">{category.description}</p>
          </div>
        )}
        {/* Display for block cards that use the color palette of that project for background */}
        {category.type === "block" && (
          <div className="info-card-block-row white-bg">
            {category.items.map((item, index) => (
              <BlockCard
                key={index}
                item={item}
                bgColor={colorPalette[index]}
              />
            ))}
          </div>
        )}
        {category.type === "image" && (
          <div className="info-card-image-row">
            <ImageCard
              images={category.images || []}
              descriptions={category.imageDescriptions || []}
              intro={category.imagesIntro || ""}
            />
          </div>
        )}
        {category.type === "prototype" && (
          <div>
            <PrototypeCard
              image={category.images || []}
              link={category.link || ""}
              btnText={category.buttonText || ""}
              description={category.description || ""}
            />
          </div>
        )}
        {category.type === "usability" && (
          <div>
            <UsabilityCard
              headline={category.headline}
              intro={category.intro}
              rounds={category.rounds}
              colorPalette={colorPalette}
            />
          </div>
        )}
        {/* Display for FEEDBACK block cards that use the color palette of that project for background */}
        {category.type === "feedback" && (
          <div className="info-card-block-row">
            {category.quotes.map((quote, index) => (
              <BlockCard
                key={index}
                feedback={true}
                quote={quote}
                bgColor={colorPalette[index]}
              />
            ))}
          </div>
        )}
        {/* Display for FINAL DESIGN Card */}
        {category.type === "final design" && (
          <div>
            <FinalDesignCard
              images={category.images}
              btnText={category.buttonText}
              link={category.link}
              buttonDescription={category.buttonDescription}
            />
          </div>
        )}
      </div>
    </section>
  );
}

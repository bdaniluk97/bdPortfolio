import React from "react";

const TechItem = ({ icon, techName }) => (
  <div className="tech-item">
    <img src={`${process.env.PUBLIC_URL}/images/${icon}`} alt={techName} />
    <span>{techName}</span>
  </div>
);

const TechStack = ({ stack }) => (
  <div className="techStack">
    {stack.map(({ techName, icon }, index) => (
      <TechItem key={index} techName={techName} icon={icon} />
    ))}
  </div>
);

export default TechStack;

import React from "react";
import "./Skills.css";
import { withTranslation } from 'react-i18next';

const Skill = ({ name, advancement }) => {
  const totalCircles = 5;
  const filledCircles = Array(advancement).fill(true);
  const emptyCircles = Array(totalCircles - advancement).fill(false);

  return (
    <div className="skill-element">
      <div className="skill-name">{name}</div>
      <div className="skill-level">
        {filledCircles.map((_, index) => (
          <div key={`filled-${index}`} className="circle filled"></div>
        ))}
        {emptyCircles.map((_, index) => (
          <div key={`empty-${index}`} className="circle"></div>
        ))}
      </div>
    </div>
  );
};

function SkillElement({ t, data }) {
  return <Skill name={data.name} advancement={data.advancement} />;
}

export default withTranslation()(SkillElement);

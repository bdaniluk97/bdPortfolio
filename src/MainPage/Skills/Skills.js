import React from "react";
import "./Skills.css";
import { withTranslation } from 'react-i18next';
import SkillElement from "./SkillElement";

function Skills({ t }) {
  return (
    <div className="mainContainer">
      <div id="skills">
        <div className="sub-page-title">{t('skills')}</div>
        <div className="skills-panel">
          <div className="skills-container">
            <div className="skill-category">{t('programingLanguages')}</div>
            <SkillElement data={{ name: 'React', advancement: 4 }} />
            <SkillElement data={{ name: 'Javascript', advancement: 4 }} />
            <SkillElement data={{ name: 'Typescript', advancement: 3 }} />
            <SkillElement data={{ name: 'Postgresql', advancement: 3 }} />
            <SkillElement data={{ name: 'Php', advancement: 2 }} />
            <SkillElement data={{ name: 'Symfony', advancement: 2 }} />
          </div>
          <div className="skills-container">
            <div className="skill-category">{t('otherSkills')}</div>
            <SkillElement data={{ name: 'Git', advancement: 4 }} />
            <SkillElement data={{ name: 'Svn', advancement: 4 }} />
            <SkillElement data={{ name: 'RestAPI', advancement: 4 }} />
            <SkillElement data={{ name: 'Adobe Lightroom', advancement: 4 }} />
            <SkillElement data={{ name: 'Figma', advancement: 3 }} />
            <SkillElement data={{ name: 'Adobe XD', advancement: 2 }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default withTranslation()(Skills);
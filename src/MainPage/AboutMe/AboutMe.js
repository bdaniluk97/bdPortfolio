import React from "react";
import { withTranslation } from 'react-i18next';
import "./AboutMe.css";

function AboutMe({ t }) {
  return (
    <div className="mainContainer">
      <div id="aboutMe">
        <div className="sub-page-title">{t('aboutMe')}</div>
        
        <div className="section">
          <p>
            {t('aboutMeDesc')}
          </p>
        </div>
      </div>
    </div>
  );
}

export default withTranslation()(AboutMe);

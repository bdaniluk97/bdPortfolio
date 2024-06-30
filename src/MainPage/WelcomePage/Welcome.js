import React from "react";
import "./WelcomePage.css";
import { withTranslation } from 'react-i18next';

function Welcome({ t }) {
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight + 100,
      behavior: "smooth"
    });
  }

  return (
    <div className="mainContainer welcomeContainer">
      <div id="welcomeContainer">
        <div id="title">{t('welcomeTitle')}</div>
        <div className="subtitle">{t('welcomeSubtitle')}</div>
        <div onClick={scrollDown} id="scrollDown">
          <div className="downwardArrow" />
        </div>
      </div>
    </div>
  );
}

export default withTranslation()(Welcome);

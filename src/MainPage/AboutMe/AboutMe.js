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
            Occaecat nulla veniam ipsum exercitation aliquip enim cillum laboris minim enim labore. Laborum dolore aliquip duis esse incididunt irure est anim. Reprehenderit consectetur nulla esse officia sit mollit do adipisicing id nulla excepteur anim. Dolor nulla officia nostrud Lorem eiusmod sint. Ad commodo consectetur sit irure aliquip. Ad deserunt et id est ad aliquip nisi fugiat reprehenderit velit nostrud consectetur voluptate. Ad commodo esse mollit irure nulla tempor do nisi ipsum duis cupidatat nisi consectetur.
          </p>
          <p>
            Consectetur laborum laborum enim sint deserunt adipisicing minim sunt id deserunt. Qui pariatur consequat ea eu irure pariatur fugiat excepteur excepteur magna laborum. Irure esse proident reprehenderit eiusmod nulla dolore sunt id.
          </p>
        </div>
      </div>
    </div>
  );
}

export default withTranslation()(AboutMe);

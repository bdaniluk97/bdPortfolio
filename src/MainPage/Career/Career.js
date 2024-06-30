import React from "react";
import "./Career.css";
import { withTranslation } from 'react-i18next';
import CareerCard from "./CareerCard";

function Career({ t }) {
  return (
    <div className="mainContainer " >
      <div id="career">
        <div className="sub-page-title">{t('career')}</div>
        {<CareerCard info={{
          constName: 'DCLOG',
          position: 'career-left'
        }} />}
        {<CareerCard info={{
          constName: 'NETTOM',
          position: 'career-right'
        }} />}
      </div>
    </div>
  );
}

export default withTranslation()(Career);

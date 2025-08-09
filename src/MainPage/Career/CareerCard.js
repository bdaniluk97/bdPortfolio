import React, { useState, useEffect } from "react";
import { withTranslation } from "react-i18next";
import "./CareerCard.css";
import { jobData } from "../../Data";
import useVisibilityOnScroll from "./hooks/use-visibility-on-scroll";
import TechStack from "./TechStack";

const CareerCardContent = ({ constName, position, t }) => {
  const [job, setJob] = useState(null);
  const isVisible = useVisibilityOnScroll(constName);

  useEffect(() => {
    const foundJob = jobData.find((job) => job.constName === constName);
    setJob(foundJob || null);
  }, [constName]);

  if (!job) return <div>{t('laodingCareerCard')}</div>;

  return (
    <div className={`career-card ${isVisible ? "card-showed" : ""} ${position}`} id={constName}>
      <div className="title">{job.title} - {job.constName}</div>

      <div className="description" style={{ whiteSpace: "pre-line", lineHeight: 1.5 }}>
        {t(job.description)}
      </div>

      <div className="location">{t(job.location)}</div>

      <div className="employment-period">
        {job.employmentPeriod[0]} - {t(job.employmentPeriod[1])}
      </div>

      <TechStack stack={job.techStack} />
    </div>
  );
};

const CareerCard = ({ t, info }) => (
  <CareerCardContent constName={info.constName} position={info.position} t={t} />
);

export default withTranslation()(CareerCard);

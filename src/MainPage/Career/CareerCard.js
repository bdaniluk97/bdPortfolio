import React, { useState, useEffect } from "react";
import { withTranslation } from 'react-i18next';
import "./CareerCard.css";
import { jobData } from "../../Data";

const JobDetails = ({ constName, position, t }) => {
  const [job, setJob] = useState(null);

  useEffect(() => {
    const foundJob = jobData.find(job => job.constName === constName);
    if (foundJob) {
      setJob(foundJob);
    }
  }, [constName]);

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    function handleScroll() {
      const careerElement = document.getElementById(constName);
      if (careerElement) {
        const { top, bottom } = careerElement.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (top < windowHeight - 100 && bottom > 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cardClass = isVisible ? "career-card card-showed" : "career-card";

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`${cardClass} ${position}`} id={constName} >
      <div className="title">{job.title} - {job.constName}</div>
      <div className="description">{t(job.description)}</div>
      <div className="location">{t(job.location)}</div>
      <div className="employment-period">
        {job.employmentPeriod[0]} - {t(job.employmentPeriod[1])}
      </div>
      <div className="techStack">
        {job.techStack.map((tech, index) => (
          <div key={index} className="tech-item">
            <img src={`/images/${tech.icon}`} alt={tech.techName} />
            <span>{tech.techName}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

function CareerCard({ t, info }) {
  return <JobDetails constName={info.constName} position={info.position} t={t} />;
}

export default withTranslation()(CareerCard);

import React from "react";
import { withTranslation } from "react-i18next";
import "./ProjectCard.css";

function ProjectCard({ t, project }) {
    return (
        <div className="project-card">
            <div className="project-img"></div>
            <div className="project-content">
                <div className="project-name">{project.projectConst}</div>
                <div className="project-desc">{project.shortDesc}</div>
            </div>
        </div>
    );
}

export default withTranslation()(ProjectCard);

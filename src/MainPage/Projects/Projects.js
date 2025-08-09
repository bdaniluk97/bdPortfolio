import React from "react";
import { withTranslation } from "react-i18next";
import "./Projects.css";
import ProjectCard from "./ProjectCard";
import { projectInfo } from "../../ProjectData";

function Projects({ t }) {
    if (!projectInfo || projectInfo.length === 0) {
        return null;
    }

    return (
        <div className="mainContainer">
            <div className="sub-page-title">{t("projects")}</div>
            {projectInfo.map((project, index) => (
                <ProjectCard key={project.id || index} project={project} />
            ))}
        </div>
    );
}

export default withTranslation()(Projects);

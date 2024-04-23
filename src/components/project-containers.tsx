import ProjectItem from "./project-item"

import '../styles/projects/project-containers.scss';

const ProjectContainers = () => {
    return (
        <div className="project">
            <ProjectItem index={1} />
            <ProjectItem index={2} />
            <ProjectItem index={3} />
        </div>
    )
}

export default ProjectContainers;
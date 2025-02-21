import ProjectItem from "./project-item"

import '/src/styles/projects/project-containers.scss';

const ProjectContainers = () => {

    return (
        <div className="project">
            {/* <ProjectItem index={1} /> */}
            {/* <ProjectItem index={2} /> */}
            <ProjectItem index={4} />
            <ProjectItem index={5} />
            <ProjectItem index={6} />
            <ProjectItem index={3} />
            <ProjectItem index={7} />
            <ProjectItem index={8} />
            <ProjectItem index={9} />
            <ProjectItem index={10} />
        </div>
    )
}

export default ProjectContainers;
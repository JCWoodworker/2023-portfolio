import "./projects.scss"

import Project1 from "./project_components/Project1"
import Project2 from "./project_components/Project2"
import Project3 from "./project_components/Project3"
import Project4 from "./project_components/Project4"

const Projects = () => {
	return (
		<div className="projects-container">
			<Project1 />
			<Project2 />
			<Project3 />
			<Project4 />
		</div>
	)
}

export default Projects

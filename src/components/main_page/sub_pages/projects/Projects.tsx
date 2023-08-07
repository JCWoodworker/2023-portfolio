import "./projects.scss"
import { projectsList } from "./projectsList"

const Projects: React.FC = () => {
	return (
		<div id="Projects">
			<div className="projects-header">
				<h1>Projects</h1>
			</div>
			<div className="projects-container">
				{projectsList.map((project, index) => {
						return (
							<div className={`project-card project-${index + 1}`}>
								<h1>{project.name}</h1>
								<p>{project.description}</p>
								<a href={project.link} target="_blank">Click here to see it in action!</a>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}

export default Projects

import React, { useState } from "react"
import "./projects.scss"
import { projectsList } from "./projectsList"

const Projects: React.FC = () => {
	const [currentTile, setCurrentTile] = useState({
		title: "",
		information: "",
	})
	const onMouseOver = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const project = e.currentTarget
		const h1Element = project.querySelector("h1")
		const aElement = project.querySelector("a")
		setCurrentTile({
			title: h1Element?.innerText || "",
			information: aElement?.innerText || "",
		})
		h1Element? h1Element.innerText = "Skills & Deployment" : ""
		aElement? aElement.innerText = "Click Here to View Site!" : ""
		console.log(project, "mouse enter")
		}
	
	const onMouseLeaveHandler = (e: React.MouseEvent) => {
		const project = e.currentTarget
		const h1Element = project.querySelector("h1")
		const aElement = project.querySelector("a")
		h1Element? h1Element.innerText = currentTile.title : ""
		aElement? aElement.innerText = currentTile.information : ""
		console.log(project, "mouse leave")
	}

	return (
		<div id="Projects">
			<div className="projects-header">
				<h1>Projects</h1>
			</div>
			<div className="projects-container">
				{projectsList.map((project, index) => {
					return (
						<div
							key={project.name}
							className={`project-card project-${index + 1}`}
							onMouseEnter={onMouseOver}
							onMouseLeave={onMouseLeaveHandler}
						>
							<h1>{project.name}</h1>
							<p>{project.description}</p>
							<a href={project.link} target="_blank">
								Hover/Long Press For More Info
							</a>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Projects

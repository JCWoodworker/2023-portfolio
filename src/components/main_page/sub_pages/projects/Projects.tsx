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
		h1Element ? (h1Element.innerText = "Skills & Deployment:") : ""
		aElement ? (aElement.innerText = "Click Here to View Site!") : ""
	}

	const onMouseLeaveHandler = (e: React.MouseEvent) => {
		const project = e.currentTarget
		const h1Element = project.querySelector("h1")
		const aElement = project.querySelector("a")
		h1Element ? (h1Element.innerText = currentTile.title) : ""
		aElement ? (aElement.innerText = currentTile.information) : ""
	}

	return (
		<div id="Projects">
			<div className="sub-page-header-div">
				<h1 className="sub-page-h1">Projects</h1>
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
							<div className="project-skills-display">
							{project.skills.map((skill, index) => {
								return (
									<p key={index} className="skill">
										{skill}
									</p>
								)
							})}
							</div>
							<a href={project.link} target="_blank">
								Tap/Hover For More Info
							</a>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Projects

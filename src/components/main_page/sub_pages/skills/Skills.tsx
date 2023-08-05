import "./skills.scss"
import typedWordAnimation from "../../../../utilities/typedWordAnimation"

type Skills = {
	[key: string]: string
}

const skillsObject: Skills = {
	Languages: "  Javascript - Typescript - Python",
	Frontend: "  React - Redux - HTML - CSS - Electron",
	Backend: "  Node.js - Express.js - Nest.js",
	Database: "  PostgreSQL",
	Testing: "  Jest - Cypress",
	Deployment: "  Heroku - AWS - Netlify",
	Other:
		"  Agile - Scrum - Jira - Splunk - OOP - TDD - Git - Github - Github Actions - Linux - Windows - Microsoft Office - Google Suite",
}

const Skills: React.FC = () => {
	return (
		<div id="Skills">
			<div className="skills-page-header">
				<h1>Skills</h1>
			</div>
			<div className="skills-page-container">
				{Object.keys(skillsObject).map((key, index) => {
					return (
						<div key={index} className="skills-page-section">
							<strong>{typedWordAnimation(key, "skills-page-section-header")}:</strong> 
							{typedWordAnimation(
								skillsObject[key],
								"skills-page-section-body"
							)}
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Skills

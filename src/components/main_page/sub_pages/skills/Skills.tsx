import "./skills.scss"
import { skillsArray } from "./skillsArray"
import typedWordAnimation from "../../../../utilities/typedWordAnimation"

const Skills: React.FC = () => {
	return (
		<div id="Skills">
			<div className="sub-page-header-div">
				<h1 className="sub-page-h1">Skills</h1>
			</div>
			<div className="skills-page-container">
				{skillsArray.map((skill, index) => {
					return (
						<div key={index}>
							{typedWordAnimation(skill, "skill-text")}
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Skills

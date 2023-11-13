import "./skills.scss"
import { skillsArray } from "./skillsArray"
import typedWordAnimation from "../../../../utilities/typedWordAnimation"

const Skills: React.FC = () => {
	return (
		<div id="Skills">
			<div className="sub-page-header-div">
				<h1 className="sub-page-h1">What Technologies have I worked with?</h1>
			</div>
			<div className="skills-page-container">
				{skillsArray.map((skill, index) => {
					if (skill[1] === true) {
						return (
							<div key={index}>
								{typedWordAnimation(skill[0], "skill-text highlighted-skills")}
							</div>
						)
					}
					return (
						<div key={index}>
							{typedWordAnimation(skill[0], "skill-text")}
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Skills

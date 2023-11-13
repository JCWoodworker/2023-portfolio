import "./skills.scss"
import { skillsArray } from "./skillsArray"
import typedWordAnimation from "../../../../utilities/typedWordAnimation"

const Skills: React.FC = () => {
	return (
		<div id="Skills">
			<div className="sub-page-header-div">
				<h1 className="sub-page-h1">What Technologies have I worked with?</h1>
			</div>
			<ul className="skill-level-key">Skill Level Key:
				<li>{`| Highly Skilled |`}</li>
				<li>{`| Proficient |`}</li>
				<li>{`| Normal |`}</li>
			</ul>
			<div className="skills-page-container">
				{skillsArray.map((skill, index) => {
					if (skill[1] === true && skill[2] === true) {
						return (
							<div key={index}>
								{typedWordAnimation(skill[0], "skill-text bold-skill highlighted-skill")}
							</div>
						)
					} else if (skill[1] === true && skill[2] === false) {
						return (
							<div key={index}>
								{typedWordAnimation(skill[0], "skill-text bold-skill")}
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

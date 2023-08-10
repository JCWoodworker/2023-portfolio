import { skillsArray } from "../skills/skillsArray"

type Skill = typeof skillsArray[number]

interface Project {
	name: string
	link: string
	skills: Skill[]
	deployment: string
	description: string
}

export const projectsList: Project[] = [
	{
		name: "Woodworker's Project Manager",
		link: "https://woodworking-project-calc.herokuapp.com/",
		skills: ["Javascript", "React", "Node", "Express", "SCSS", "PostgreSQL", "Heroku", "Git", "Github"],
		deployment: "Heroku",
		description: "Some shit here",
	},
	{
		name: "Business Link List",
		link: "https://bizlinks.netlify.app/",
		skills: ["Typescript", "React", "SCSS", "Netlify", "Git", "Github"],
		deployment: "",
		description: "Some shit here",
	},
	// {
	// 	name: "Project 2",
	// 	link: "",
	// 	skills: [],
	// 	deployment: "",
	// 	description: "",
	// },
	// {
	// 	name: "Project 3",
	// 	link: "",
	// 	skills: [],
	// 	deployment: "",
	// 	description: "",
	// }
]

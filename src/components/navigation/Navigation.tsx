import { useState } from "react"

import "./navigation.scss"
import typedWordAnimation from "../../utilities/typedWordAnimation"

// import SideNav from "./side_links/SideNav"
import TopNav from "./top_links/TopNav"

const Nav: React.FC = () => {
	const [viewNavTopLinks, setViewNavTopLinks] = useState(false)

	const scrollToDiv = (divName: string) => {
		const element = document.getElementById(divName)
		if (viewNavTopLinks && element !== null) {
			const yOffset = -66
			const y = element.getBoundingClientRect().top + window.scrollY + yOffset
			window.scrollTo({ top: y, behavior: "smooth" })
			setViewNavTopLinks(false)
			return true
		}
		element?.scrollIntoView({ behavior: "smooth", block: "start" })
		setViewNavTopLinks(false)
	}

	const navLinkHome = typedWordAnimation("Home", "nav-link")
	const navLinkProjects = typedWordAnimation("Projects", "nav-link")
	const navLinkSkills = typedWordAnimation("Skills", "nav-link")
	const navLinkContact = typedWordAnimation("Contact", "nav-link")

	return (
		<>
			<div className="nav-bar-side  ">
				<div className="nav-headshot-and-title">
					<div className="blur-headshot">
						<img
							className="nav-headshot"
							src="https://s3.amazonaws.com/jcwoodworker.portfolio/jc-headshot-large.svg"
							loading="lazy"
						></img>
					</div>
					<h2 className="nav-title-name">James Corey</h2>
				</div>
				<div className="nav-side-links-container">
					<p className="nav-link" onClick={() => scrollToDiv("home")}>
						{navLinkHome}
					</p>
					<p className="nav-link" onClick={() => scrollToDiv("skills")}>
						{navLinkSkills}
					</p>
					<p className="nav-link" onClick={() => scrollToDiv("projects")}>
						{navLinkProjects}
					</p>
					<p className="nav-link" onClick={() => scrollToDiv("contact")}>
						{navLinkContact}
					</p>
				</div>
				<div className="nav-side-links-spacer"></div>
				<div className="nav-social-media-icons">
					<i className="bi bi-linkedin"></i>
					<i className="bi bi-github"></i>
				</div>
			</div>
			<TopNav
				scrollToDiv={scrollToDiv}
				viewNavTopLinks={viewNavTopLinks}
				setViewNavTopLinks={setViewNavTopLinks}
			/>
		</>
	)
}

export default Nav

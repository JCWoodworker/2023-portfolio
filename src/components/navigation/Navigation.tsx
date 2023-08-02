import { useState } from "react"

import "./navigation.scss"

import typedWordAnimation from "../../utilities/typedWordAnimation"

const Nav = () => {
	const [viewNavTopLinks, setViewNavTopLinks] = useState(false)

	let navTopLinks = null
	let threeDotsIcon = "bi bi-three-dots-vertical dots-icon"

	if (viewNavTopLinks) {
		navTopLinks = (
			<div className="nav-top-links">
				<p className="nav-link-top">Home</p>
				<p className="nav-link-top">Page 2</p>
				<p className="nav-link-top">Page 3</p>
			</div>
		)
		threeDotsIcon = "bi bi-three-dots dots-icon"
	} else {
		navTopLinks = null
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
					<p className="nav-link">{navLinkHome}</p>
					<p className="nav-link">{navLinkProjects}</p>
					<p className="nav-link">{navLinkSkills}</p>
					<p className="nav-link">{navLinkContact}</p>
				</div>
				<div className="nav-side-links-spacer"></div>
				<div className="nav-social-media-icons">
					<i className="bi bi-linkedin"></i>
					<i className="bi bi-github"></i>
				</div>
			</div>
			<div className="nav-bar-top">
				<img
					className="top-nav-logo"
					src="https://s3.amazonaws.com/jcwoodworker.portfolio/jc-logo-blue.svg"
				></img>
				<i
					className={`${threeDotsIcon} menu-icon`}
					onClick={() => setViewNavTopLinks(!viewNavTopLinks)}
				></i>
			</div>
			{navTopLinks}
		</>
	)
}

export default Nav

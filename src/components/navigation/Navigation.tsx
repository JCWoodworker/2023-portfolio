import { useState } from "react"
import "./navigation.scss"

const Nav = () => {
	const [viewNavTopLinks, setViewNavTopLinks] = useState(false)

	let navTopLinks = null
	let threeDotsIcon = "bi bi-three-dots-vertical"

	if (viewNavTopLinks) {
		navTopLinks = (
			<div className="nav-top-links">
				<p className="nav-link-top">Home</p>
				<p className="nav-link-top">Page 2</p>
				<p className="nav-link-top">Page 3</p>
			</div>
		)
		threeDotsIcon = "bi bi-three-dots"
	} else {
		navTopLinks = null
	}

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
					<h2>James Corey</h2>
				</div>
				<div className="nav-side-links">
					<p className="nav-link-side">Home</p>
					<p className="nav-link-side">Projects</p>
					<p className="nav-link-side">Skills</p>
				</div>
				<div className="spacer"></div>
				<div className="nav-social-media-icons">
					<i className="bi bi-linkedin"></i>
					<i className="bi bi-github"></i>
				</div>
			</div>
			<div className="nav-bar-top">
				<h1>Navigation</h1>
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

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
					<h2 className="nav-title-name">
						<span>J</span>
						<span>a</span>
						<span>m</span>
						<span>e</span>
						<span>s</span>&nbsp;
						<span>C</span>
						<span>o</span>
						<span>r</span>
						<span>e</span>
						<span>y</span>
					</h2>
				</div>
				<div className="nav-side-links-container">
					<p className="nav-link">
						<span>H</span>
						<span>o</span>
						<span>m</span>
						<span>e</span>
					</p>
					<p className="nav-link">
						<span>P</span>
						<span>r</span>
						<span>o</span>
						<span>j</span>
						<span>e</span>
						<span>c</span>
						<span>t</span>
						<span>s</span>
					</p>
					<p className="nav-link">
						<span>S</span>
						<span>k</span>
						<span>i</span>
						<span>l</span>
						<span>l</span>
						<span>s</span>
					</p>
					<p className="nav-link">
						<span>C</span>
						<span>o</span>
						<span>n</span>
						<span>t</span>
						<span>a</span>
						<span>c</span>
						<span>t</span>
					</p>
				</div>
				<div className="nav-side-links-spacer"></div>
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

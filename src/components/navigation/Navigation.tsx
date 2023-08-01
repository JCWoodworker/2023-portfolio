import { useState } from "react"
import "./navigation.scss"

const Nav = () => {
	const [viewNavTopLinks, setViewNavTopLinks] = useState(false)

	let navTopLinks = null
	viewNavTopLinks
		? (navTopLinks = (
				<div className="nav-top-links">
					<p className="nav-link-top">Home</p>
					<p className="nav-link-top">Page 2</p>
					<p className="nav-link-top">Page 3</p>
				</div>
      ))
		: (navTopLinks = null)

	return (
		<>
			<div className="nav-bar-side  ">
				<h1>Navigation</h1>
				<div className="nav-side-links">
					<p className="nav-link-side">Home</p>
					<p className="nav-link-side">Page 2</p>
					<p className="nav-link-side">Page 3</p>
				</div>
			</div>
			<div className="nav-bar-top">
				<h1>Navigation</h1>
				<i
					className="bi bi-three-dots-vertical menu-icon"
					onClick={() => setViewNavTopLinks(!viewNavTopLinks)}
				></i>
			</div>
			{navTopLinks}
		</>
	)
}

export default Nav

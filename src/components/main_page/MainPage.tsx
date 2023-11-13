import { useState, useEffect } from "react"
import "./mainPage.scss"
import { scrollToDiv } from "../../utilities/scrollToDiv"

import { Spinner } from "react-bootstrap"

import Background from "./sub_pages/background/Background"
import Skills from "./sub_pages/skills/Skills"
import Projects from "./sub_pages/projects/Projects"
import Contact from "./sub_pages/contact/Contact"

const MainPage: React.FC = () => {
	const [showTitle, setShowTitle] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowTitle(false)
		}, 2000)
		return () => clearTimeout(timer)
	}, [])

	useEffect(() => {
		if (!showTitle) {
			setTimeout(() => {
				scrollToDiv('Background', true) 
			}, 0)
		}
	}, [showTitle])

	return (
		<>
			{showTitle && (
				<div className="main-page-title fade-out">
					<h1>James Corey</h1>
					<p>-Web Developer-</p>
					<div>
						<Spinner animation="grow" variant="light" size="sm" />
						<Spinner animation="grow" variant="light" size="sm" />
						<Spinner animation="grow" variant="light" size="sm" />
					</div>
				</div>
			)}
			{!showTitle && (
				<div className="main-page-grid">
					<div className="main-page-child odd-section-bg">
						<Background />
					</div>
					<div className="main-page-child even-section-bg">
						<Skills />
					</div>
					<div className="main-page-child odd-section-bg">
						<Projects />
					</div>
					<div className="main-page-child even-section-bg">
						<Contact />
					</div>
				</div>
			)}
		</>
	)
}

export default MainPage

import { useState, useEffect } from "react"
import "./mainPage.scss"

import { Spinner } from "react-bootstrap"

import Home from "./sub_pages/home/Home"
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
				<div className="main-page-grid parent-fade-in-container">
					<div className="main-page-child child-fade-in-container dark-blue-bg">
						<Home />
					</div>
					<div className="main-page-child child-fade-in-container medium-gray-bg">
						<Skills />
					</div>
					<div className="main-page-child child-fade-in-container dark-blue-bg">
						<Projects />
					</div>
					<div className="main-page-child child-fade-in-container medium-gray-bg">
						<Contact />
					</div>
				</div>
			)}
		</>
	)
}

export default MainPage

import { useState } from "react"

import "./navigation.scss"

import SideNav from "./side_links/SideNav"
import TopNav from "./top_links/TopNav"

const Nav: React.FC = () => {
	const [viewNavTopLinks, setViewNavTopLinks] = useState<boolean>(false)
	const navLinkList: string[] = ["Background", "Skills", "Projects", "Contact"]

	const scrollToDiv = (divName: string) => {
		const element = document.getElementById(divName)
		if (viewNavTopLinks && element !== null) {
			const yOffset = -66
			const y = element.getBoundingClientRect().top + window.scrollY + yOffset
			window.scrollTo({ top: y, behavior: "smooth" })
			setViewNavTopLinks(false)
			return
		}
		element?.scrollIntoView({ behavior: "smooth", block: "start" })
		setViewNavTopLinks(false)
		return
	}

	return (
		<>
			<SideNav scrollToDiv={scrollToDiv} navLinkList={navLinkList} />
			<TopNav
				scrollToDiv={scrollToDiv}
				viewNavTopLinks={viewNavTopLinks}
				setViewNavTopLinks={setViewNavTopLinks}
				navLinkList={navLinkList}
			/>
		</>
	)
}

export default Nav

import { useState } from "react"

import "./navigation.scss"

import SideNav from "./side_links/SideNav"
import TopNav from "./top_links/TopNav"

const Nav: React.FC = () => {
	const [viewNavTopLinks, setViewNavTopLinks] = useState<boolean>(false)
	const navLinkList: string[] = ["Background", "Skills", "Projects", "Contact"]

	return (
		<>
			<SideNav navLinkList={navLinkList} />
			<TopNav
				viewNavTopLinks={viewNavTopLinks}
				setViewNavTopLinks={setViewNavTopLinks}
				navLinkList={navLinkList}
			/>
		</>
	)
}

export default Nav

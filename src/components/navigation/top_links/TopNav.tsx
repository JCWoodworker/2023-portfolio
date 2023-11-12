import "./top_nav.scss"
import { scrollToDiv } from "../../../utilities/scrollToDiv"

interface TopNavProps {
	viewNavTopLinks: boolean
	setViewNavTopLinks: React.Dispatch<React.SetStateAction<boolean>>
	navLinkList: string[]
}

const TopNav: React.FC<TopNavProps> = ({
	viewNavTopLinks,
	setViewNavTopLinks,
	navLinkList,
}) => {
	let navTopLinks = null

	if (viewNavTopLinks) {
		navTopLinks = (
			<div className="nav-top-links-container">
				{navLinkList.map((link) => {
					return (
						<p
							className="nav-link-top"
							key={link}
							onClick={() => scrollToDiv(link, viewNavTopLinks, setViewNavTopLinks)}
						>
							{link}
						</p>
					)
				})}
			</div>
		)
	} else {
		navTopLinks = null
	}

	return (
		<>
			<div className="nav-bar-top">
				<h2>James Corey</h2>
				<i
					className={`bi bi-three-dots-vertical ${
						viewNavTopLinks ? "rotated" : ""
					} menu-icon`}
					onClick={() => setViewNavTopLinks(!viewNavTopLinks)}
				></i>
			</div>
			{navTopLinks}
		</>
	)
}

export default TopNav

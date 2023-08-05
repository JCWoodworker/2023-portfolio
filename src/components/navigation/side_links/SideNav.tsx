import "./side_nav.scss"
import typedWordAnimation from "../../../utilities/typedWordAnimation"
import { scrollToDiv } from "../../../utilities/scrollToDiv"
interface SideNavProps {
	// scrollToDiv: (id: string) => void
	navLinkList: string[]
}

const SideNav: React.FC<SideNavProps> = ({ navLinkList }) => {
	const fullName = typedWordAnimation("James Corey", "nav-title-name")

	return (
		<div className="nav-bar-side  ">
			<div className="nav-headshot-and-title">
				<div className="blur-headshot">
					<img
						className="nav-headshot"
						src="https://s3.amazonaws.com/jcwoodworker.portfolio/jc-headshot-large.svg"
						loading="lazy"
					></img>
				</div>
				{fullName}
			</div>
			<div className="nav-side-links-container">
				{navLinkList.map((link) => {
					return (
						<p
							className="nav-link"
							key={link}
							onClick={() => scrollToDiv(link)}
						>
							{link}
						</p>
					)
				})}
			</div>
			<div className="nav-side-links-spacer"></div>
			<div className="nav-social-media-icons">
				<a href="https://www.linkedin.com/in/j-corey/" target="_blank">
					<i className="bi bi-linkedin"></i>
				</a>
				<a href="https://github.com/JCWoodworker" target="_blank">
					<i className="bi bi-github"></i>
				</a>
			</div>
		</div>
	)
}

export default SideNav

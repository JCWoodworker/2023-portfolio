import "./side_nav.scss"
interface SideNavProps {
  scrollToDiv: (id: string) => void;
	navLinkList: string[];
}

const SideNav: React.FC<SideNavProps> = ({ scrollToDiv, navLinkList }) => {

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
				<h2 className="nav-title-name">James Corey</h2>
			</div>
			<div className="nav-side-links-container">
				{navLinkList.map((link) => {
					return (
						<p className="nav-link" key={link} onClick={() => scrollToDiv(link)}>
							{link}
						</p>
					)
				})}
			</div>
			<div className="nav-side-links-spacer"></div>
			<div className="nav-social-media-icons">
				<i className="bi bi-linkedin"></i>
				<i className="bi bi-github"></i>
			</div>
		</div>
	)
}

export default SideNav

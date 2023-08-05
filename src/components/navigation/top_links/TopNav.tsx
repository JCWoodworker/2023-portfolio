import "./top_nav.scss"

interface TopNavProps {
  scrollToDiv: (id: string) => void;
  viewNavTopLinks: boolean;
  setViewNavTopLinks: React.Dispatch<React.SetStateAction<boolean>>;
}

const TopNav: React.FC<TopNavProps> = ({ scrollToDiv, viewNavTopLinks, setViewNavTopLinks }) => {
	let navTopLinks = null

	if (viewNavTopLinks) {
		navTopLinks = (
			<div className="nav-top-links">
				<p className="nav-link-top" onClick={() => scrollToDiv("home")}>
					Home
				</p>
				<p className="nav-link-top" onClick={() => scrollToDiv("skills")}>
					Skills
				</p>
				<p className="nav-link-top" onClick={() => scrollToDiv("projects")}>
					Projects
				</p>
				<p className="nav-link-top" onClick={() => scrollToDiv("contact")}>
					Contact
				</p>
			</div>
		)
	} else {
		navTopLinks = null
	}

	return (
		<>
			<div className="nav-bar-top">
				<h2>JC</h2>
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

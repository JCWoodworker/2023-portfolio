import "./background.scss"

const Home: React.FC = () => {
	return (
		<div id="Background">
			<div className="sub-page-header-div">
				<h1 className="sub-page-h1">About Me</h1>
			</div>
			<div className="background-page-container">
				<p>Software Engineer | Woodworker | Father to a son and three dogs</p>
				<p>Currently an Operations Engineer with <span id="grubhub">Grubhub</span> - Boston, MA</p>
				<p>Notable accomplishments at Grubhub include building a desktop application with Electron & React and building a repo of python scripts that automate many of my team's tasks</p>
				<p>Check out my personal projects below!</p>
			</div>
		</div>
	)
}

export default Home

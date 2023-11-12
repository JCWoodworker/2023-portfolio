import "./background.scss"

const Home: React.FC = () => {
	return (
		<div id="Background">
			<div className="sub-page-header-div">
				<h1 className="sub-page-h1">About Me</h1>
			</div>
			<div className="background-page-container">
				<p className="background-page-current-role">Operations Engineer @ Grubhub - Boston, MA - March 2022 to Present</p>
				<p className="background-page-roles">Software Engineer | Woodworker | Father & Dog-Dad</p>
				<p className="background-page-accomplishments"><span id="accomplishments">Accomplishments at Grubhub:</span> Built desktop app using Electron & React to handle bulk data operations and restaurant updates -  Built repo of python automations saving HOURS of manual work</p>
			</div>
		</div>
	)
}

export default Home

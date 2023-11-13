import "./background.scss"

const Home: React.FC = () => {
	return (
		<div id="Background">
			<div className="sub-page-header-div">
				<h1 className="sub-page-h1">Who Am I?</h1>
			</div>
			<div className="background-page-container">
			<ul className="background-page-roles">
					<li>Software Engineer</li>
					<li>Woodworker</li>
					<li>Father & Dog-Dad</li>
				</ul>

				<p className="background-page-current-role">
					Operations Engineer @ Grubhub - Boston, MA - March 2022 to Present
				</p>
				<ul className="background-page-accomplishments">Accomplishments at Grubhub:
					<li>
						{`---> Built desktop app using Electron & React to handle bulk data
						operations and restaurant updates`}
					</li>
					<li>{`---> Built repo of python automations saving HOURS of manual work`}</li>
				</ul>
			</div>
		</div>
	)
}

export default Home

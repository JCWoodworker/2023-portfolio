import Navigation from "./components/navigation/Navigation"
import MainPage from "./components/main_page/MainPage"

import "./main.scss"

const App = () => {
	return (
		<div className="app-container">
			<div>
				<Navigation />
			</div>
			<div>
				<MainPage />
			</div>
		</div>
	)
}

export default App

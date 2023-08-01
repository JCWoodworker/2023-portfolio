import Navigation from "./components/navigation/Navigation"
import MainPage from "./components/main_page/MainPage"

import "./main.scss"

const App = () => {
	return (
		<div className="app-container">
			<div className="nav-container">
				<Navigation />
			</div>
			<div  className="main-page-container">
				<MainPage />
			</div>
		</div>
	)
}

export default App

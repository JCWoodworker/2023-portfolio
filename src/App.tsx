import { Container, Navbar, Nav } from "react-bootstrap"
import "./main.scss"

const App = () => {
	return (
		<>
			<Navbar bg="light" expand="lg" className="nav-bar flex-column">
      <img src="https://i.imgur.com/oLEqhuJ.jpg" title="source: imgur.com" />
				<Navbar.Brand href="#home">Your Logo</Navbar.Brand>

				{/* Collapse button for smaller screens */}
				<Navbar.Toggle aria-controls="basic-navbar-nav" />

				{/* Navigation links */}
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto flex-column">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#about">About</Nav.Link>
						<Nav.Link href="#contact">Contact</Nav.Link>
						{/* Add more Nav.Link components as needed */}
					</Nav>
				</Navbar.Collapse>
			</Navbar>

			<Container fluid>{/* Your page content goes here */}</Container>
		</>
	)
}

export default App

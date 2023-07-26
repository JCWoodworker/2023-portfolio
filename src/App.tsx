import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap"
import "./main.scss"

const App = () => {
	return (
		<>
			<Navbar
				key="md"
				expand="md"
				className="top-navigation-main-container"
			>
				<Container fluid>
					<Navbar.Brand className="navbar-brand" href="#">James Corey</Navbar.Brand>
					<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-$"md"`} />
					<Navbar.Offcanvas
						id={`offcanvasNavbar-expand-$"md"`}
						aria-labelledby={`offcanvasNavbarLabel-expand-$"md"`}
						placement="end"
					>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title className="offcanvas-title" id={`offcanvasNavbarLabel-expand-$"md"`}>
								James Corey - Software Engineer
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className="justify-content-end flex-grow-1">
								<Nav.Link className="nav-link" href="#action1">Home</Nav.Link>
								<Nav.Link className="nav-link" href="#action2">Link</Nav.Link>
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</>
	)
}

export default App

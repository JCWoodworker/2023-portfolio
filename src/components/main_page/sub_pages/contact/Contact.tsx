import ContactForm from "./ContactForm"
import "./contact.scss"

const Contact: React.FC = () => {
	return (
		<div id="Contact">
			<div className="sub-page-header-div">
				<h1 className="sub-page-h1">Contact</h1>
			</div>
			<div className="contact-page-container">
				<ContactForm />
			</div>
		</div>
	)
}

export default Contact

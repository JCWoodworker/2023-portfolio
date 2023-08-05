import ContactForm from "./ContactForm"
import "./contact.scss"

const Contact: React.FC = () => {
	return (
		<div id="contact">
			<div className="contact-page-header">
				<h1>Contact</h1>
			</div>
			<div className="contact-page-container">
				<ContactForm />
			</div>
		</div>
	)
}

export default Contact

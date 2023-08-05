import ContactForm from "./ContactForm"
import "./contact.scss"

const Contact = () => {
	return (
		<>
			<div className="contact-page-header">
				<h1>Contact</h1>
			</div>
			<div className="contact-page-container">
				<ContactForm />
			</div>
		</>
	)
}

export default Contact

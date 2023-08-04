import { useState, FormEvent, ChangeEvent } from "react"
import { Form, Button } from "react-bootstrap"
import emailjs from "emailjs-com"
import Swal from "sweetalert2"

const ContactForm = () => {
	const [formData, setFormData] = useState({
		email: "",
		firstName: "",
		message: "",
	})

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const clearForm = () => {
		setFormData({
			email: "",
			firstName: "",
			message: "",
		})
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const target = e.target as HTMLFormElement
		try {
			const result = await emailjs.sendForm(
				import.meta.env.VITE_EMAIL_SERVICE_ID,
				import.meta.env.VITE_EMAIL_TEMPLATE_ID,
				target,
				import.meta.env.VITE_EMAILJS_KEY
			)
			console.log(result.text)
			Swal.fire({
				icon: "success",
				title: "Message Sent Successfully",
			})
			target.reset()
			clearForm()
		} catch (error) {
			Swal.fire({
				icon: "error",
				title: "Ooops, something went wrong",
			})
		}
	}

	return (
		<>
			<p>Invite me to interview, or ask to connect for more information!</p>

			<Form onSubmit={handleSubmit} className="contact-form-container">
				<div>
					<div className="form-group-name-email">
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter your email"
								value={formData.email}
								name="email"
								onChange={handleChange}
							/>
						</Form.Group>
						<Form.Group controlId="formBasicFirstName">
							<Form.Label>First Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter your first name"
								value={formData.firstName}
								name="firstName"
								onChange={handleChange}
							/>
						</Form.Group>
					</div>
					<Form.Group controlId="formBasicMessage">
						<Form.Label>Message</Form.Label>
						<Form.Control
							as="textarea"
							rows={5}
							placeholder="Type your message"
							value={formData.message}
							name="message"
							onChange={handleChange}
						/>
					</Form.Group>
				</div>
				<Button variant="light" type="submit">
					Submit
				</Button>
				<br />
			</Form>
		</>
	)
}

export default ContactForm

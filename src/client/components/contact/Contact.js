import React, { useState, useRef } from "react";
import "./contact.css";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [address, setAddress] = useState("");
	const [requestCopy, setRequestCopy] = useState(false);
	const [isFormActive, setIsFormActive] = useState(true);
	const [hasSent, setHasSent] = useState(false);
	const contactForm = useRef();

	const handleSubmit = async (event) => {
		event.preventDefault();
		throwEmail();
		const params = {
			name,
			email,
			message,
			address,
			requestCopy
		};
		await fetch("/send", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(params)
		});
		setHasSent(true);
	};

	const handleChange = (event, setter) => {
		const { target } = event;
		setter(target.name === "requestCopy" ? target.checked : target.value);
	};

	const throwEmail = () => {
		contactForm.current.classList.add("fly");
		setTimeout(() => setIsFormActive(false), 200);
	};

	return (
		<section id="toContact" className="section is-contact">
			<div className="content-wrap is-side-by-side">
				<div className="left-side title-group">
					<h2 className="title">Contact</h2>
					<p className="subtitle font-large">
						Hopefully you found some of things that I've done over the years interesting
						and useful.
						<br />
						I'll be in touch with you when I hear from you.
					</p>
				</div>
				<div className="right-side">
					<p className="thank-you-note">
						{hasSent ? (
							<span>Thank you {name}, I will get back to you soon!</span>
						) : (
							!isFormActive && <span>Sending...</span>
						)}
					</p>
					<form className="contact-form" onSubmit={handleSubmit} ref={contactForm}>
						<div className="form-group">
							<label htmlFor="name">Name</label>
							<input
								className="text-input"
								type="text"
								name="name"
								value={name}
								onChange={() => handleChange(event, setName)}
								tabIndex={isFormActive ? "0" : "-1"}
								required
							/>
						</div>
						<div className="form-group is-address">
							<label htmlFor="address">Address</label>
							<input
								className="text-input"
								type="text"
								name="address"
								value={address}
								onChange={() => handleChange(event, setAddress)}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input
								className="text-input"
								type="email"
								name="email"
								value={email}
								onChange={() => handleChange(event, setEmail)}
								tabIndex={isFormActive ? "0" : "-1"}
								required
							/>
						</div>
						<div className="form-group">
							<label htmlFor="message">Message</label>
							<textarea
								name="message"
								rows="6"
								value={message}
								onChange={() => handleChange(event, setMessage)}
								tabIndex={isFormActive ? "0" : "-1"}
								required
							/>
						</div>
						<div className="form-group">
							<label className="receive-copy-check">
								<input
									type="checkbox"
									name="requestCopy"
									checked={requestCopy}
									onChange={() => handleChange(event, setRequestCopy)}
									tabIndex={isFormActive ? "0" : "-1"}
								/>
								<span className="dummy">
									{requestCopy ? String.fromCharCode(10004) : ""}
								</span>
								I want to receive a copy
							</label>
						</div>
						<button
							className="button is-flat is-submit outline-button"
							tabIndex={isFormActive ? "0" : "-1"}
						>
							SEND
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;

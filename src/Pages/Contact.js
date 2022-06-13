import { useState } from "react";

import "../CSS/Pages/Contact.scss";

function Contact() {
	function submit(name, email, body) {
		console.log(name, email, body);
	}

	return (
		// What's in the front
		<div className="contact-wrapper">
			<div className="contact-title">[ Contact ]</div>
			<div className="contact-card">
				<div className="contact-header">
					<div className="contact-header-name">
						<input
							id="name-input"
							placeholder="Name"
							className="name-input"
							type="text"
						></input>
					</div>
					<div className="contact-header-email">
						<input
							id="email-input"
							placeholder="Email"
							className="email-input"
							type="text"
						></input>
					</div>
				</div>
				<div className="contact-body">
					<textarea
						id="body-input"
						placeholder="Message"
						className="body-input"
						type="text"
					></textarea>
				</div>

				{/* Submit button */}
				<div className="card-footer">
					<div
						className="submit-button"
						// When clicked, submit element values and wipe submit fields
						onClick={() => {
							submit(
								document.getElementById("name-input").value,
								document.getElementById("email-input").value,
								document.getElementById("body-input").value
							);

							document.getElementById("name-input").value = "";
							document.getElementById("email-input").value = "";
							document.getElementById("body-input").value = "";
						}}
					>
						Submit
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;

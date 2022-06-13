import { useState } from "react";
import "../../CSS/Pages/About.scss";

function About() {
	const [title, setTitle] = useState("[ About Me ]");
	const [body, setBody] = useState("TESTING=");

	const yearsOfExperience = new Date().getFullYear() - 2019;

	return (
		// What's in the front
		<div className="about-wrapper">
			<div className="about-parent">
				<div className="about-title">{title}</div>
				<div className="about-body">
					After{" "}
					<span className="highlight-text"> {yearsOfExperience} years</span> of
					software developer experience and 3 years at{" "}
					<span className="highlight-text">Santa Clara University</span>, I have
					been able to work at many different companies including my own{" "}
					<span className="highlight-text">startup</span> and have worked on
					many different projects.
				</div>
			</div>
		</div>
	);
}

export default About;

import "../CSS/Projects.scss";

import { useEffect, useState } from "react";

import ProjectCard from "../Components/ProjectCard";

function Projects() {
	const projects = [
		{
			title: "Hack for Humanity 2021",
			description:
				'Created a website with a team that empowers low-income households and students to find cost-efficient recipes and order from local grocery stores or pickup. Won away for "Best use of Microsoft Azure".',
			buttonName: "GitHub",
			url: "https://github.com/A-Mackey/QuickBites",
			color: "#F7F052",
		},
		{
			title: "AidanMackey.net",
			description:
				"Developed this website using React.JS and Three.JS and deployed the website using Docker",
			buttonName: "GitHub",
			url: "https://github.com/A-Mackey/AidanMackey.net",
			color: "#65AFFF",
		},
		{
			title: "Dangerous Roads",
			description:
				"Website developed while working at INRIX which gives insights on the most dangerous roads globally.",
			buttonName: "Website",
			url: "https://inrix.com/most-dangerous-roads/",
			color: "#D5ACA9",
		},
		{
			title: "Inspirometer",
			description:
				"Collaborated with a team of engineers to develop a device and app that can measure and track lung capacity. Developed mobile app using React Native to allow for device connection and give users they historical usage data.",
			buttonName: "GitHub",
			url: "https://github.com/A-Mackey/Inspirometer-Mobile",
			color: "#A682FF",
		},
		{
			title: "IG Captions",
			description:
				"Developed a social media caption generation tool using React with a back-end in the Spring Boot Java API framework.",
			buttonName: "Website",
			url: "http://igcaptions.online",
			color: "#F3B700",
		},
		{
			title: "Raycasting Engine",
			description:
				"Built a raycasting game engine using WebGL in Javascript and put the application onto a webserver and deployed using Docker",
			buttonName: "Website",
			url: "http://aidanmackey.net:8080",
			color: "#4ECDC4",
		},
	];

	const [pageWidth, setPageWidth] = useState(getWidth());

	useEffect(() => {
		function handleResize() {
			setPageWidth(getWidth());
		}
		window.addEventListener("resize", handleResize);
	});

	function getWidth() {
		return Math.max(
			document.body.scrollWidth,
			document.documentElement.scrollWidth,
			document.body.offsetWidth,
			document.documentElement.offsetWidth,
			document.documentElement.clientWidth
		);
	}

	return (
		<div className="projects-wrapper">
			<div className="projects-parent">
				{projects.map((item, index) => (
					<div
						key={index}
						style={{
							width:
								pageWidth > 750
									? index % 3 === 0
										? "100%"
										: "calc(50% - 5px)"
									: "100%",
						}}
					>
						<ProjectCard
							color={item.color}
							title={item.title}
							index={index}
							description={item.description}
							buttonName={item.buttonName}
							url={item.url}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default Projects;

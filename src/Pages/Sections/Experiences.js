import { useState } from "react";

import "../../CSS/Pages/Experiences.scss";

// Logos
import AmazonLogo from "../../Assets/Companies/AmazonWhite.png";
import INRIXLogo from "../../Assets/Companies/INRIX.png";
import PanterixLogo from "../../Assets/Companies/PanterixWhite.png";
// Components
import ExperienceCard from "../../Components/ExperienceCard";

function Experiences() {
	const [title] = useState("[ Experiences ]");

	const experiences = [
		{
			id: 0,
			start: "June 2022",
			end: "September 2022",
			name: "Amazon",
			position: "Software Engineer Intern",
			imgRef: AmazonLogo,
			points: [
				"Incomming Software Engineer Intern summer of 2022 in Seattle, Washington.",
			],
		},
		{
			id: 1,
			start: "June 2021",
			end: "September 2021",
			name: "INRIX",
			position: "Software Engineer Intern & Product Manager",
			imgRef: INRIXLogo,
			points: [
				"Developed a live-updating website that visualizes traffic data to provide trend insights.",
				"Worked closely with INRIX management regarding product direction, scope, and timeline.",
				"Developed the back-end REST API using .NET framework in C#",
			],
		},
		{
			id: 2,
			start: "June 2020",
			end: "September 2020",
			name: "INRIX",
			position: "Full-Stack Development Intern",
			imgRef: INRIXLogo,
			points: [
				"Pitched the product developed at Panterix to futher develop with INRIX's high-density data.",
				"Integrated safety data into the map tile server used by millions of users worldwide.",
			],
		},
		{
			id: 3,
			start: "February 2020",
			end: "Present",
			name: "Panterix",
			position: "Co-Founder and Software Development Engineer",
			imgRef: PanterixLogo,
			points: [
				"Started a business from a hackathon project with a product that ranks roads on their safety.",
				"Participated in undergraduate research and published a paper at the Good Techs conference.",
				"Developed the companies products, website, and back-end API's.",
			],
		},
		{
			id: 4,
			start: "June 2016",
			end: "September 2019",
			name: "Santa Margarita High School",
			position: "IT Intern & Consultant",
			imgRef: PanterixLogo,
			points: [
				"Repaired broken computers and prepared technology for the school year.",
			],
		},
	];

	return (
		// What's in the front
		<div className="expWrapper">
			<div className="expParent">
				<div className="expCenter">
					<div className="expTitle">{title}</div>
					<div className="expCards">
						{experiences.map((item, index) => (
							<ExperienceCard
								key={index}
								index={index}
								company={item.name}
								position={item.position}
								start={item.start}
								end={item.end}
								img={item.imgRef}
								points={item.points}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Experiences;

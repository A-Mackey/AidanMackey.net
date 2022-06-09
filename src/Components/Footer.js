import "../CSS/Footer.scss";

import github from "../Assets/Socials/github.svg";
import devpost from "../Assets/Socials/devpost.svg";
import linkedin from "../Assets/Socials/linkedin.svg";

function Header() {
	const socials = [
		{
			name: "LinkedIn",
			image: linkedin,
			url: "https://www.linkedin.com/in/aidanmackey/",
		},
		{ name: "GitHub", image: github, url: "https://github.com/A-Mackey" },
		{
			name: "Devpost",
			image: devpost,
			url: "https://devpost.com/amackey",
		},
	];

	return (
		<div className="footer">
			<div className="footer-center">
				<div className="footer-left">
					<div className="footer-text-wrapper">
						<div className="footer-text">
							Designed and developed by Aidan Mackey
						</div>
						<div className="footer-text">
							Build with <code>React.JS</code> and <code>Three.JS</code>.
							Deployed with <code>Docker</code>
						</div>
					</div>
				</div>
				<div className="footer-right">
					{socials.map((item, index) => (
						<img
							key={index}
							src={item.image}
							alt={item.image}
							className="footer-image"
							onClick={() => window.open(item.url, "_blank")}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Header;

import "../CSS/Components/ProjectCard.scss";

import Button from "./Button";

function ProjectCard(props) {
	return (
		<div className="project-wrapper">
			<div
				style={{ backgroundColor: props.color }}
				className="project-stripe"
			></div>
			<div className="project-parent">
				<div className="project-title">{props.title}</div>
				<div className="project-description">{props.description}</div>
				<div
					className="project-button"
					onClick={() => window.open(props.url, "_blank")}
				>
					<Button title={props.buttonName} />
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;

import { useEffect } from "react";

import "../CSS/Components/Button.scss";

function Button(props) {
	useEffect(() => {});

	return (
		<div id="button" className="button">
			{props.title}
		</div>
	);
}

export default Button;

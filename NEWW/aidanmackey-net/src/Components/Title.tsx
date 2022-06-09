import React from "react";

import "../Style/Title.css";
import Keyboard from "../Assets/keyboard.svg";

function Title() {
	return (
		<div className="title-container">
			<div className="title-logo">
				<img src={Keyboard} alt="" />
			</div>
			<div className="title-text">{"AIDAN MACKEY"}</div>
		</div>
	);
}

export default Title;

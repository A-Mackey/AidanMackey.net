import { useState } from "react";
import "../CSS/TitlePage.scss";

function TitlePage() {
	const subTitle = "Engineer, Developer, Student";

	const finalTitle = "<AidanMackey/>";

	return (
		<div className="title-wrapper">
			<div className="title-parent">
				<div className="title-main">{finalTitle}</div>
				<div className="title-sub">{subTitle}</div>
			</div>
		</div>
	);
}

export default TitlePage;

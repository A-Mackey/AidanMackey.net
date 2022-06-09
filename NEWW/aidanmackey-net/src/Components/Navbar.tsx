import React from "react";

import "../Style/Navbar.css";

/*
◤◢
*/
function Navbar() {
	const beginTag = " ⌜";
	const endTag = "⌟ ";

	let tabs = [
		{ page: 1, href: "/", title: `${beginTag} Portfolio ${endTag}` },
		{ page: 2, href: "/contact", title: `${beginTag} Contact ${endTag}` },
	];

	function redirect(page: string | URL) {
		console.log("Redirecting to: " + page);
		window.location.assign(page);
	}

	return (
		<div className="navbar-container">
			<div className="navbar-left" onClick={() => redirect("/")}>
				<div>[AM]</div>
			</div>
			<div className="navbar-right">
				{tabs.map((tab) => (
					<div className="navbar-button" onClick={() => redirect(tab.href)}>
						{tab.title}
					</div>
				))}
			</div>
		</div>
	);
}

export default Navbar;

import "../CSS/Components/Header.scss";

function Header() {
	const beginTag = "⌜"; // ⌜
	const endTag = "⌟"; // ⌟
	const header = "[ AM ]";

	const links = [
		{ id: 0, title: "Home", ref: "/" },
		{ id: 1, title: "Contact", ref: "/contact" },
		{ id: 1, title: "Ray-Casting", ref: ":8080" },
	];

	return (
		<div className="header-wrapper">
			<div className="header-parent-wrapper">
				<div className="header-parent">
					<div className="header-title">{header}</div>

					<div className="header-button-parent">
						{links.map((item, index) => (
							<button
								key={index}
								onClick={() => (document.location = item.ref)}
								className="header-button"
							>
								{beginTag}
								{item.title}
								{endTag}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;

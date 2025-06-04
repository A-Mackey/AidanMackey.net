import "../CSS/Components/Header.scss";

function Header() {
	const beginTag = "⌜"; // ⌜
	const endTag = "⌟"; // ⌟
	const header = "[ AM ]";

	const links = [
		{ id: 0, title: "Contact", ref: "/contact" },
		{ id: 1, title: "Game Engine", href: "http://aidanmackey.net:2080" },
	];

	return (
		<div className="header-wrapper">
			<div className="header-parent-wrapper">
				<div className="header-parent">
					<div
						className="header-title"
						onClick={() => (document.location = "/")}
					>
						{header}
					</div>

					<div className="header-button-parent">
						{links.map((item, index) => (
							<button
								key={index}
								onClick={() =>
									item.ref
										? (document.location = item.ref)
										: (window.location.href = item.href)
								}
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

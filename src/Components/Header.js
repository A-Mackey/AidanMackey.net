import "../CSS/Header.scss";

function Header() {
	const beginTag = "⌜"; // ⌜
	const endTag = "⌟"; // ⌟
	const header = "[ AM ]";

	const links = [
		{ id: 0, title: "Home", ref: "/" },
		{ id: 1, title: "Contact", ref: "/contact" },
	];

	return (
		<div className="headerParent">
			<div className="headerTitle">{header}</div>

			<div className="headerButtonParent">
				{links.map((item, index) => (
					<button
						key={index}
						onClick={() => (document.location = item.ref)}
						className="headerButton"
					>
						{beginTag}
						{item.title}
						{endTag}
					</button>
				))}
			</div>
		</div>
	);
}

export default Header;

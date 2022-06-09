import "../CSS/Header.scss";

function Header() {
	// const beginTag = "⌜"; // ⌜
	// const endTag = "⌟"; // ⌟
	const header = "[AM]";

	// const links = [
	// 	{ id: 0, title: "Home", ref: "" },
	// 	{ id: 1, title: "Experience", ref: "" },
	// 	{ id: 2, title: "Projects", ref: "" },
	// 	{ id: 3, title: "Contact", ref: "" },
	// ];

	return (
		<div className="headerParent">
			<div className="headerTitle">{header}</div>

			{/* <div className="headerButtonParent">
          {
            links.map((item, index) => (
              <button
                key={index}
                className="headerButton">
                {beginTag}{item.title}{endTag}
              </button>
            ))
          }
        </div> */}
		</div>
	);
}

export default Header;

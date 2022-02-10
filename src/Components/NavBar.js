// CSS
import "../CSS/NavBar.css"


function NavBar(props) {

    const beginTag = " ⌜";
    const endTag = "⌟ ";

    const pages = props.pages;

    return (
        <div className="parentDiv">

            <div className="title">
                {beginTag} Project Title {endTag} 
            </div>

            <div className="menu">
                {
                    pages.map((item, index) => (
                        <button
                            className="menuItemButton"
                            onClick={() => props.setCurrentPage(index)}
                        >
                            {beginTag}{item.name}{endTag}
                        </button>
                    ))
                }
                
            </div>
        </div>
    );
}

export default NavBar;

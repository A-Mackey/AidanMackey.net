// CSS
import "../CSS/NavBar.css"


function NavBar(props) {

    const beginTag = " ⌜";
    const endTag = "⌟ ";

    const title = `AidanMackey.net`

    const pages = props.pages;

    return (
        <div className="navBarParentDiv">

            <div className="navBarTitle">
                {beginTag} {title} {endTag} 
            </div>

            <div className="navBarMenu">
                {
                    pages.map((item, index) => (
                        <button
                            key={index}
                            className="navBarMenuItemButton"
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

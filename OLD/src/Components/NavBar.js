// CSS
import "../CSS/NavBar.scss"

import { useState, useEffect } from 'react';


function NavBar(props) {
    const [renderButtons, setRenderButtons] = useState(true);
    const beginTag = " ⌜";
    const endTag = "⌟ ";

    const title = `AidanMackey.net`
    
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 800) { setRenderButtons(false);}
            if (window.innerWidth >= 800) { setRenderButtons(true); }
        }
        window.addEventListener('resize', handleResize)
        handleResize();
    })

    return (
        <div className="navBarParentDiv">

            <div className="navBarTitle">
                {beginTag} {title} {endTag} 
            </div>

            {renderButtons ? 
            <div className="navBarMenu">
            {
                props.pages.map((item, index) => (
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
                : <div className="navBarMenu">
                    <button
                            className="navBarMenuItemButtonMINI"
                            onClick={() => props.setCurrentPage(props.currentPage <= 0 ? props.pages.length - 1 : props.currentPage - 1 )}
                    >
                        {beginTag} 🡠 {endTag}
                    </button>
                    
                    <button
                            className="navBarMenuItemButtonMINI"
                            onClick={() => props.setCurrentPage(props.currentPage >= props.pages.length - 1 ? 0 : props.currentPage + 1 )}
                    >
                        {beginTag} 🡢 {endTag}
                    </button>
                </div>}

            
        </div>
    );
}

export default NavBar;

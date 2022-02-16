import { useState } from "react";
import "../CSS/TitlePage.scss"

// Components
import Space from '../Components/Space'

function TitlePage() {
    const [title, setTitle] = useState("<AidanMackey/>")
    const [subTitle, setSubTitle] = useState("Engineer, Developer, Student")
    return (
        // What's in the front
      <div className="titleWrapper">
        <div className="titleFront">
            <div className="titleParent">
                <div className="titleCenter">
                    <div className="titleTitle">
                        { title }
                    </div>
                    <div className="titleSubTitle">
                        { subTitle }
                    </div>
                </div>
            </div>
        </div>
            
        {/* What's in the back */}
        {/* <div className="titleBack">
            <div className="titleBackParent">
                <div className="titleBackCenter">
                    <Space />
                </div>
            </div>
        </div> */}
    </div>
  );
}

export default TitlePage;

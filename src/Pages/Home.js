import { useState } from "react";
import "../CSS/TitlePage.scss"

function TitlePage() {
    const [title, setTitle] = useState("<AidanMackey/>")
    const [subTitle, setSubTitle] = useState("Engineer, Developer, Student")
    return (
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
    </div>
  );
}

export default TitlePage;

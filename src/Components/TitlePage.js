import { useState } from "react";
import "../CSS/TitlePage.scss"

function TitlePage() {
    const [title, setTitle] = useState("<AidanMackey/>")
    const [subTitle, setSubTitle] = useState("Developer, Student, Producer")
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
                    THIS IS A TEST TO SEE EVEN MORE
                </div>
            </div>
        </div> */}
    </div>
  );
}

export default TitlePage;

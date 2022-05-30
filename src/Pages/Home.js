import { useState } from "react";
import "../CSS/TitlePage.scss"

function TitlePage() {
  const [title, setTitle] = useState("")
  const [subTitle, setSubTitle] = useState("Engineer, Developer, Student")

  const finalTitle = "<AidanMackey/>"

  return (
    <div className="titleWrapper">
      <div className="titleFront">
        <div className="titleParent">
          <div className="titleCenter">
            <div className="titleTitle">
              {finalTitle}
            </div>
            <div className="titleSubTitle">
              {subTitle}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitlePage;

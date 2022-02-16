import { useState } from "react";
import "../CSS/ExperienceCard.scss"

function Experiences(props) {
    const [title, setTitle] = useState("[ Experiences ]")

    return (
        // What's in the front
      <div className="expCardWrapper">
          <div className="expCardImgWrapper">
            <img className="imgCardImg" src={props.img} alt={props.alt} />
          </div>
          <div>
            {props.company} - {props.title}
          </div>
    </div>
  );
}

export default Experiences;

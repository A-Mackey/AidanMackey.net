import { useState } from "react";
import "../CSS/Experiences.scss"
import AmazonLogo from "../Assets/Companies/Amazon.png"
import INRIXLogo from "../Assets/Companies/INRIX.png"
import PanterixLogo from "../Assets/Companies/Panterix.png"
// Components
import ExperienceCard from '../Components/ExperienceCard'

function Experiences() {
    const [title, setTitle] = useState("[ Experiences ]")

    const experiences = [
        {id: 0, start: "June 2022", end: "September 2022", name: "Amazon", position: "Position", imgRef: AmazonLogo},
        {id: 1, start: "June 2021", end: "September 2021", name: "INRIX", position: "Position", imgRef: INRIXLogo},
        {id: 2, start: "June 2020", end: "September 2020", name: "INRIX", position: "Position", imgRef: INRIXLogo},
        {id: 3, start: "February 2020", end: "Present", name: "Panterix", position: "Position", imgRef: PanterixLogo},
    ]

    return (
        // What's in the front
      <div className="expWrapper">
        <div className="expParent">
            <div className="expCenter">
                <div className="expTitle">
                    { title }
                </div>
                {
                    experiences.map((item, index) => (
                        <ExperienceCard key={index} company={item.name} img={item.imgRef} />
                    ))
                }
            </div>
        </div>
    </div>
  );
}

export default Experiences;

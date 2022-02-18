import { useState } from "react";
import "../CSS/Experiences.scss"

function About() {
    const [title, setTitle] = useState("[ Experiences ]")

    return (
        // What's in the front
      <div className="expWrapper">
        <div className="expParent">
            <div className="expCenter">
                <div className="expTitle">
                    { title }
                </div>
                <div className="expCards">
                    {
                        experiences.map((item, index) => (
                            <ExperienceCard 
                                key={index} 
                                company={item.name} 
                                position={item.position} 
                                start={item.start} 
                                end={item.end} 
                                img={item.imgRef} 
                                points={item.points}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;

import { useState } from "react";
import "../CSS/About.scss"

function About() {
  const [title, setTitle] = useState("[ About Me ]")
  const [body, setBody] = useState(
    "TESTING="
  )

  const yearsOfExperience = new Date().getFullYear() - 2019;

  return (
    // What's in the front
    <div className="aboutWrapper">
      <div className="aboutParent">
        <div className="aboutCenter">
          <div className="aboutTitle">
            {title}
          </div>
          <div className="aboutBody">
            After <span className='highlightText'> {yearsOfExperience} years</span> of software developer experience and 3 years at <span className='highlightText'>Santa Clara University</span>, I have been able to work at many different companies including my own <span className='highlightText'>startup</span> and have worked on many different projects.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

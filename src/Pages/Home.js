import '../CSS/Home.scss'

import Sphere from '../Components/Sphere'
import { useEffect, useState } from 'react';

function Home(props) {
  const [sphereColor, setSphereColor] = useState("#ffffff");
  const sphereColorDimDelta = 900;

  const title = "[ aidan mackey ]"
  const subTitle = "[ developer | student | producer ]"
  const yearsOfExperience = new Date().getFullYear() - 2019;
  
  const body = `With [ ${yearsOfExperience} years ] of software developer experience and 3 years at [ Santa Clara University ] under my belt, I have been able to work at many different companies including my own [ startup ] and have worked on many projects. This website will highlight the more notable ones.`

  const highlights = [
    { highlight: "3 years", subHighlight: "of developer experience" },
    { highlight: "3rd year", subHighlight: "Santa Clara Student" },
    { highlight: "2021", subHighlight: " ACM hackathon winner" },
  ]


  const Socials = [
    { id: 0,    name: "LinkedIn",    ref: require("../Pictures/LinkedIn.png"),  link:"https://www.linkedin.com/in/aidanmackey/"    },
    { id: 1,    name: "GitHub",      ref: require("../Pictures/GitHub.png"),    link:"https://github.com/A-Mackey" },
    { id: 2,    name: "Devpost",     ref: require("../Pictures/Devpost.png"),   link:"https://devpost.com/amackey" },
  ]

  useEffect(() => {
      function handleResize() {
          if (window.innerWidth < sphereColorDimDelta) { setSphereColor("#333");}
          if (window.innerWidth >= sphereColorDimDelta) { setSphereColor("#fff"); }
      }
      window.addEventListener('resize', handleResize)
      handleResize();
  })

  return (
    <div className='homeParentDiv'>
      <div
        className='homeLeftSide'
      >
        <div className='homeTitle'>{title}</div>
        <div className='homeSubTitle'>{subTitle}</div>

        <div className='homeSocials'>
          {
            Socials.map((item, index) => (
              <form target="_blank" action={ item.link }>
                <button key={index} className='homeSocialButton'>
                  <img src={item.ref} alt="" className='homeSocialButtonImage'/>
                </button>
              </form>
            ))
          }
        </div>

        {/* <div className='homeBody'>
          {
            highlights.map((item, index) => (
              <li>[ {item.highlight} ] { item.subHighlight}</li>
            ))
          }
        </div> */}

        <div className='homeBody'>With <span className='highlightText'> {yearsOfExperience} years</span> of software developer experience and 3 years at <span className='highlightText'>Santa Clara University</span> under my belt, I have been able to work at many different companies including my own <span className='highlightText'>startup</span> and have worked on many projects. This website will highlight the more notable ones.</div>
      </div>
      <div
        className='homeRightSide'
        id='sphereDiv'
      > 
        <Sphere className='homeSphereObject' color={ sphereColor}/>
      </div>

    </div>
  );
}

export default Home;

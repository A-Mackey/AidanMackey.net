import '../CSS/Home.scss'

import Shape from '../Components/Shape'
import { useEffect, useState } from 'react';

function Home(props) {
  const [shapeColor, setShapeColor] = useState("#ffffff");
  const [shape, setShape] = useState("sphere")
  const sphereColorDimDelta = 900;

  const title = "[ aidan mackey ]"
  const subTitle = "[ developer | student | producer ]"
  const yearsOfExperience = new Date().getFullYear() - 2019;

  const Socials = [
    { id: 0,    name: "LinkedIn",    ref: require("../Pictures/LinkedIn.png"),  link:"https://www.linkedin.com/in/aidanmackey/"    },
    { id: 1,    name: "GitHub",      ref: require("../Pictures/GitHub.png"),    link:"https://github.com/A-Mackey" },
    { id: 2,    name: "Devpost",     ref: require("../Pictures/Devpost.png"),   link:"https://devpost.com/amackey" },
  ]

  useEffect(() => {
      function handleResize() {
          if (window.innerWidth < sphereColorDimDelta && shapeColor != "#333") { setShapeColor("#333");}
          if (window.innerWidth >= sphereColorDimDelta && shapeColor != "#fff") { setShapeColor("#fff"); }
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
              <form key={index} target="_blank" action={ item.link }>
                <button key={index} className='homeSocialButton'>
                  <img src={item.ref} alt="" className='homeSocialButtonImage'/>
                </button>
              </form>
            ))
          }
        </div>

        <div className='homeBody'>
          After <span className='highlightText'> {yearsOfExperience} years</span> of software developer experience and 3 years at <span className='highlightText'>Santa Clara University</span>, I have been able to work at many different companies including my own <span className='highlightText'>startup</span> and have worked on many different projects.
        </div>
      </div>
      <div
        className='homeRightSide'
        id='sphereDiv'
      > 
        <Shape className='homeSphereObject' color={shapeColor} shape={shape} />
      </div>

      <div className='changeShapeButtonsParent'>
          <div className='changeShapeButtons'>
            <button className='changeShapeButton' onClick={() => setShape("sphere")}>
              [ Sphere ]
            </button>
            <button className='changeShapeButton' onClick={() => setShape("cube")}>
              [ Cube ]
            </button>
            <button className='changeShapeButton' onClick={() => setShape("cone")}>
              [ Cone ]
            </button>
          </div>
        </div>

    </div>
  );
}

export default Home;

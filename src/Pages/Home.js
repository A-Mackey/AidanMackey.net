import '../CSS/Home.scss'

import Sphere from '../Components/Sphere'
import { useEffect, useState } from 'react';

function Home(props) {
  const [sphereColor, setSphereColor] = useState("#ffffff");
  const sphereColorDimDelta = 900;

  const title = "[ about me ]"
  const body = `lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  const body1 = `lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu .`

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

        <div className='homeBody'>{body}</div>
        <div className='homeBody'>{body1}</div>
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

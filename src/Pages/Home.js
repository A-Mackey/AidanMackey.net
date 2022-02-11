import '../CSS/Home.scss'

import ThreeScene from '../Components/FlyingSphereNew'
import { useEffect, useState } from 'react';

function Home(props) {
  const beginTag = " ⌜";
  const endTag = "⌟ ";

  const [sphereColor, setSphereColor] = useState("#ffffff");
  const sphereColorDimDelta = 900;

  const title = "[ about me ]"
  const body = `lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  const body1 = `lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu .`

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
        <div className='homeBody'>{body}</div>
        <div className='homeBody'>{body1}</div>
      </div>
      <div
        className='homeRightSide'
        id='sphereDiv'
      > 
        <ThreeScene className='homeSphereObject' color={ sphereColor}/>
      </div>

    </div>
  );
}

export default Home;

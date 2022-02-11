import '../CSS/Home.css'

import ThreeScene from '../Components/FlyingSphereNew'

function Home(props) {
  const beginTag = " ⌜";
  const endTag = "⌟ ";

  const title = "[ aidan mackey ]"
  const body = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  const body1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu .`


  return (
    <div className='homeParentDiv'>
      <div
        className='homeLeftSide'
      >
        <div className='homeTitle'>{ title }</div>
        <div className='homeBody'>{body}</div>
        <div className='homeBody'>{body}</div>
        <div className='homeBody'>{body1}</div>
        
        
      </div>
      <div
        className='homeRightSide'
        id='sphereDiv'
      > 
        <ThreeScene />
      </div>

    </div>
  );
}

export default Home;

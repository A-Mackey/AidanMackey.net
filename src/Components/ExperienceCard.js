import "../CSS/ExperienceCard.scss"

// Pictures
import dropdownLogo from '../Assets/dropdown.png'

function ExperienceCard(props) {


    const expandCard = () => {
      var points = document.querySelectorAll("[id='points']")
      points[props.index].classList.add("expandCardAnimation")
      points[props.index].style.opacity = "1"

      var dropDownMenus = document.querySelectorAll("[id='expCardButton']")
      dropDownMenus[props.index].classList.add("rotateExpCardDropdownLogo")
      dropDownMenus[props.index].style.webkitTransform = "rotate(-90deg)"
      dropDownMenus[props.index].style.mozTransform = "rotate(-90deg)"
      dropDownMenus[props.index].style.oTransform = "rotate(-90deg)"
    };

    return (
        // What's in the front
      <div className="expCardWrapper">
        <div className="expCardParent"> 
          <div className="expCardImgWrapper">
            <img className="imgCardImg" src={props.img} alt={props.alt} />
          </div>
          <div className="expCardTextWrapper">
            <div className="expCardTextUpperHalf">
              <div className="expCardTextTitle">
                {props.company} - {props.position}
              </div>
              <div className="expCardDropdownLogoWrapper">
                <button onClick={() => expandCard()} id="expCardButton" className="expCardButton">
                <img className="expCardDropdownLogo" src={dropdownLogo} alt={dropdownLogo} />
                </button>
              </div>
            </div>
            <div className="expCardTextSubTitle">
              {props.start} - {props.end}
            </div>
            
            <ul className="expCardList" id="points">
              {
                props.points.map((item, index) => (
                  <li 
                    key={index}
                    className="expCardListItem"
                  >
                    {item}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
    </div>
  );
}

export default ExperienceCard;

import "../CSS/ExperienceCard.scss"

function Experiences(props) {
    return (
        // What's in the front
      <div className="expCardWrapper">
        <div className="expCardParent"> 
          <div className="expCardImgWrapper">
            <img className="imgCardImg" src={props.img} alt={props.alt} />
          </div>
          <div className="expCardTextWrapper">
            <div className="expCardTextTitle">
              {props.company} - {props.position}
            </div>
            <div className="expCardTextSubTitle">
              {props.start} - {props.end}
            </div>
            <ul className="expCardList">
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

export default Experiences;

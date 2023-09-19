import React, { useState } from 'react'
import "./Teams.scss";
import img1 from "../../assets/images/tagScanner.svg";
import arrow from "../../assets/images/knowIcon.svg";
const ListingTeam = () => {
  const [activeItem, setActiveItem] = useState("1");
  const handleClick = (e) => {
    setActiveItem(e.target.id);
  };
  return (
    <div>
       <div className="team-section">
      <div className="left-side">
        <div className={activeItem === "1" ? "item item-1 scale-in-bl" : "item item-1"}>
          <div className={activeItem === "1" ? "active-title" : "item-title"} id={"1"} onClick={handleClick}>
          Tag scanner
          </div>
         {
           <div className={activeItem === "1" ? "shown item-text" : "hide" }>
           <div className="text">
           Garment tag scanner: AI-enabled, copy product attributes from garment tag in a giffy, no more manual entries for product listing csv!           </div>
           <div className="knowBtn">
            <div>Know more</div>
            <img src={arrow} alt="arrow-icon" />
           </div>
         </div>
         }
        </div>
      </div>
      <div className="right-side text-focus-in">
      <img src={img1} alt="img1" />
      </div>
    </div>
    </div>
  )
}

export default ListingTeam

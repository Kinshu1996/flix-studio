import React, { useState } from 'react'
import "./Teams.scss";
import img1 from "../../assets/images/creativeImg1.svg";
import img2 from "../../assets/images/creativeImg2.svg";
import img3 from "../../assets/images/creativeImg3.svg";
import arrow from "../../assets/images/knowIcon.svg";

const CreativeTeam = () => {
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
          Life style images
          </div>
         {
           <div className={activeItem === "1" ? "shown item-text" : "hide" }>
           <div className="text">
           Enrich product storytelling: transform e-commerce imagery into lifestyle shots, enabling buyers to visualize products in specific scenarios!
           </div>
           <div className="knowBtn">
            <div>Know more</div>
            <img src={arrow} alt="arrow-icon" />
           </div>
         </div>
         }
        </div>
        <div className={activeItem === "2" ? "item item-2 scale-in-bl" : "item item-2"}>
          <div className={activeItem === "2" ? "active-title" : "item-title"} id={"2"} onClick={handleClick}>
          Instagram creatives
          </div>
          <div className={activeItem === "2" ? "shown item-text" : "hide" }>
            <div className="text">
            Instagram creatives creation made easy. turn plain white backgrounds into Instagram-worthy posts!
            </div>
            <div className="knowBtn">
            <div>Know more</div>
            <img src={arrow} alt="arrow-icon" />
           </div>
          </div>
        </div>
        <div className={activeItem === "3" ? "item item-3 scale-in-bl" : "item item-3"}>
          <div className={activeItem === "3" ? "active-title" : "item-title"} id={"3"} onClick={handleClick}>
          Outdoor content creation from home
          </div>
          
            <div className={activeItem === "3" ? "shown item-text" : "hide" }>
            <div className="text">
            Simplify outdoor product photography: generate images in any location from the comfort of your home!
            </div>
            <div className="knowBtn">
            <div>Know more</div>
            <img src={arrow} alt="arrow-icon" />
           </div>
          </div>
        </div>
      </div>
      <div className="right-side text-focus-in">
        {
          activeItem === "1" ? <img src={img1} alt="img1" /> : activeItem === "2" ? <img src={img2} alt="img2" /> : <img src={img3} alt="img3" />
        }
      </div>
    </div>
    </div>
  )
}

export default CreativeTeam

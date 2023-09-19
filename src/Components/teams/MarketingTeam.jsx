import React, { useState } from "react";
import "./Teams.scss";
import mt1 from "../../assets/images/mt1.svg";
import mt2 from "../../assets/images/mt2.svg";
import mt3 from "../../assets/images/mt3.svg";
import mt4 from "../../assets/images/mt4.svg";
import arrow from "../../assets/images/knowIcon.svg";


const MarketingTeam = () => {
  const [activeItem, setActiveItem] = useState("1");
  const handleClick = (e) => {
    setActiveItem(e.target.id);
  };
  return (
    <div className="team-section">
      <div className="left-side">
        <div className={activeItem === "1" ? "item item-1 scale-in-bl" : "item item-1"}>
          <div className={activeItem === "1" ? "active-title" : "item-title"} id={"1"} onClick={handleClick}>
            Website banner creation
          </div>
         {
           <div className={activeItem === "1" ? "shown item-text" : "hide" }>
           <div className="text">
             Elevate your website imagery: transform <br />
             white background product images into <br />
             website banners worthy images!
           </div>
           <div className="knowBtn">
            <div>Know more</div>
            <img src={arrow} alt="arrow-icon" loading="lazy" />
           </div>
         </div>
         }
        </div>
        <div className={activeItem === "2" ? "item item-2 scale-in-bl" : "item item-2"}>
          <div className={activeItem === "2" ? "active-title" : "item-title"} id={"2"} onClick={handleClick}>
            Product explainer video
          </div>
          <div className={activeItem === "2" ? "shown item-text" : "hide" }>
            <div className="text">
              Empower sales with explainer videos: let your products speak
              clearly & boost complex product sales!
            </div>
            <div className="knowBtn">
            <div>Know more</div>
            <img src={arrow} alt="arrow-icon" loading="lazy" />
           </div>
          </div>
        </div>
        <div className={activeItem === "3" ? "item item-3 scale-in-bl" : "item item-3"}>
          <div className={activeItem === "3" ? "active-title" : "item-title"} id={"3"} onClick={handleClick}>
            Campaign specific creatives
          </div>
          
            <div className={activeItem === "3" ? "shown item-text" : "hide" }>
            <div className="text">
              Cost-efficient campaign shoots: use Flix+ to generate custom
              shoots from your office for Any campaign!
            </div>
            <div className="knowBtn">
            <div>Know more</div>
            <img src={arrow} alt="arrow-icon" loading="lazy" />
           </div>
          </div>
        </div>
        <div className={activeItem === "4" ? "item item-4 scale-in-bl" : "item item-4"}>
          <div className={activeItem === "4" ? "active-title" : "item-title"} id={"4"} onClick={handleClick}>
            Instagram creatives
          </div>
          <div className={activeItem === "4" ? "shown item-text" : "hide" }>
            <div className="text">
              {" "}
              Boost conversion chances: cut visualization time & display all
              product colors on models images, not Just swatches!
            </div>
            <div className="knowBtn">
            <div>Know more</div>
            <img src={arrow} alt="arrow-icon" loading="lazy" />
           </div>
          </div>
        </div>
      </div>
      <div className="right-side text-focus-in">
        {
          activeItem === "1" ? <img src={mt1} alt="mt1" loading="lazy" /> : activeItem === "2" ? <img src={mt2} alt="mt2" loading="lazy" /> : activeItem === "3" ? <img src={mt3} alt="mt3" loading="lazy" /> : <img src={mt4} alt="mt4" loading="lazy" />
        }
      </div>
    </div>
  );
};

export default MarketingTeam;

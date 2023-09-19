import React, { useState } from "react";
import "./Teams.scss";
import mt1 from "../../assets/images/mt1.svg";
import mt2 from "../../assets/images/mt2.svg";
import mt3 from "../../assets/images/mt3.svg";
import mt4 from "../../assets/images/mt4.svg";
import arrow from "../../assets/images/knowIcon.svg";

// const marketingTeamData = [
// {
//   id:"1",
//   title: "Website banner creation",
//   text: <div>

//   </div>,
//   img: mt1,
// },
// {
//   id:"2",
//   title: "Product explainer video",
//   text: <div>
//     Empower sales with explainer videos: let your products speak clearly & boost complex product sales!
//   </div>,
//   img: mt2,
// },
// {
//   id:"3",
//   title: "Campaign specific creatives",
//   text: <div>
//     Cost-efficient campaign shoots: use Flix+ to generate custom shoots from your office for Any campaign!
//   </div>,
//   img: mt3,
// },
// {
//   id:"4",
//   title: "Instagram creatives",
//   text: <div>
//         Boost conversion chances: cut visualization time & display all product colors on models images, not Just swatches!
//          </div>,
//   img: mt4,
// },

// ]

const MarketingTeam = () => {
  const [activeItem, setActiveItem] = useState("1");
  // const [activeClass, setActiveClass] = useState(false);
  const handleClick = (e) => {
    console.log(e.target.id);
    setActiveItem(e.target.id);
    // setActiveClass(true);
  };
  return (
    <div className="team-section">
      <div className="left-side">
        <div className={activeItem === "1" ? "item item-1 scale-in-bl" : "item item-1"}>
          <div className={activeItem === "1" ? "active-title" : "item-title"} id={"1"} onClick={handleClick}>
            Website banner creation
          </div>
         {
           <div className={activeItem == "1" ? "shown item-text" : "hide" }>
           <div className="text">
             Elevate your website imagery: transform <br />
             white background product images into <br />
             website banners worthy images!
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
            Product explainer video
          </div>
          <div className={activeItem == "2" ? "shown item-text" : "hide" }>
            <div className="text">
              Empower sales with explainer videos: let your products speak
              clearly & boost complex product sales!
            </div>
            <div className="knowBtn">
            <div>Know more</div>
            <img src={arrow} alt="arrow-icon" />
           </div>
          </div>
        </div>
        <div className={activeItem === "3" ? "item item-3 scale-in-bl" : "item item-3"}>
          <div className={activeItem === "3" ? "active-title" : "item-title"} id={"3"} onClick={handleClick}>
            Campaign specific creatives
          </div>
          
            <div className={activeItem == "3" ? "shown item-text" : "hide" }>
            <div className="text">
              Cost-efficient campaign shoots: use Flix+ to generate custom
              shoots from your office for Any campaign!
            </div>
            <div className="knowBtn">
            <div>Know more</div>
            <img src={arrow} alt="arrow-icon" />
           </div>
          </div>
        </div>
        <div className={activeItem === "4" ? "item item-4 scale-in-bl" : "item item-4"}>
          <div className={activeItem === "4" ? "active-title" : "item-title"} id={"4"} onClick={handleClick}>
            Instagram creatives
          </div>
          <div className={activeItem == "4" ? "shown item-text" : "hide" }>
            <div className="text">
              {" "}
              Boost conversion chances: cut visualization time & display all
              product colors on models images, not Just swatches!
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
          activeItem === "1" ? <img src={mt1} alt="mt1" /> : activeItem === "2" ? <img src={mt2} alt="mt2" /> : activeItem === "3" ? <img src={mt3} alt="mt3" /> : <img src={mt4} alt="mt4" />
        }
      </div>
    </div>
  );
};

export default MarketingTeam;

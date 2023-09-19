import React, { useState } from "react";
import "./Teams.scss";

import cn from "classnames";
import img1 from "../../assets/images/catalogTeam1.svg";
import img2 from "../../assets/images/catalogTeam2.svg";
import img3 from "../../assets/images/catalogTeam3.svg";
import img4 from "../../assets/images/catalogTeam4.svg";
import img5 from "../../assets/images/catalogTeam5.svg";
import img6 from "../../assets/images/catalogTeam6.svg";
import img7 from "../../assets/images/catalogTeam7.svg";

import Prev from "../../assets/images/prevIcon.svg";
import Next from "../../assets/images/nextIcon.svg";
import CatalogTeamItem from "./CatalogTeamItem";

const data = [
  {
    id: 0,
    title: "Ship and sip coffee",
    img: img1,
    text: "Send us your product, we'll handle the rest: wake up to stunning images with your morning coffee!"
  },
  {
    id: 1,
    title: "FlixModel",
    img: img2,
    text: "Enhance your in house studio shoots: choose from 1000+ meta models for your mannequin-based photography!"
  },
  {
    id: 2,
    title: "Packshot/Ghost",
    img: img3,
    text: "Slash catalog costs by 60% affordable and optimal visualization with ghost/pack-shot for transparent product communication"
  },
  {
    id: 3,
    title: "Colourways",
    img: img4,
    text: "Boost Conversion Chances: Cut Visualization Time & Display all Product Colors on Models images, Not Just Swatches!"
  },
  {
    id: 4,
    title: "Flix3D",
    img: img5,
    text: "Want to test which product would work in the market before actually manufacturing it? Try Flix3D"
  },
  {
    id: 5,
    title: "Virtual walk",
    img: img6,
    text: " Elevate buyer experience: utilize virtual walk to showcase fit, fall, length, weight & garment characteristics!"
  },
  {
    id: 6,
    title: "Product Videos",
    img: img7,
    text: "Product videos has better engagement compared to images. Use product video as versatile marketing content. "
  },
];
const CatalogTeam = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const halfwayIndex = Math.ceil(data.length / 2);

  // #2 above. Used to determine the height/spacing of each item
  // const itemHeight = 11;
  const itemHeight = 3.2;

  // #3 above. Used to determine at what point an item is moved from the top to the bottom
  const shuffleThreshold = halfwayIndex * itemHeight;

  const handleClick = (direction) => {
    console.log(data[activeIndex].title);
    setActiveIndex((prevIndex) => {
      if (direction === "next") {
        // If we are at the end of the carousel, set the index to 0
        if (prevIndex + 1 > data.length - 1) {
          return data.length - 1;
        }
        // Otherwise increment the index by 1
        return prevIndex + 1;
      }

      // If we are on the first slide and click previous, go to the last slide
      if (prevIndex - 1 < 0) {
        // return data.length - 1;
        return 0;
      }
      // We are moving backwards in the carousel, decrement index by 1
      return prevIndex - 1;
    });
  };

  return (
    <div className="team-section">
      <div className="left-side" style = {{display: "flex",gap: "3rem"}}>
        <div
          className="carousel-button prev" style={{cursor: "pointer"}}
          onClick={() => handleClick("prev")}
        >
          <img src={Prev} alt="prevBtn" />
        </div>

        <div className="carousel">
          <div className="slides">
            <div className="carousel-inner" >
              {data.map((item, i) => (
                <CatalogTeamItem halfwayIndex={halfwayIndex} itemHeight={itemHeight} shuffleThreshold={shuffleThreshold} activeIndex={activeIndex} setActiveIndex={setActiveIndex} data={data} 
                  className={cn("carousel-item", {
                    active: activeIndex === i,
                  })}
                  key={item.id} item={item} i={i} />
              ))}
            </div>
            
          </div>
        </div>

        <div
          type="button"
          className="carousel-button next" 
          style={{cursor: "pointer"}}
          onClick={() => handleClick("next")}
        >
          <img src={Next} alt="nextBtn" />
        </div>
      </div>
      <div className="right-side text-focus-in">
        <img src={data[activeIndex].img} alt="" />
      </div>
    </div>
  );
};

export default CatalogTeam;

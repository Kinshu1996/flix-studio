import React from "react";
import "./PhotoShoot.scss";
import { CustomButton as Button } from "../../CommonComponents/button/Button";
import img1 from "../../assets/images/img1.svg"
import img2 from "../../assets/images/img2.svg"
import img3 from "../../assets/images/img3.svg"
import img4 from "../../assets/images/img4.svg"
import img5 from "../../assets/images/img5.svg"
import img6 from "../../assets/images/img6.svg"
import rectangle1 from "../../assets/images/rectangle1.svg"
import rectangle2 from "../../assets/images/rectangle2.svg"
import gif1 from "../../assets/images/gif1.svg"
import starIcon from "../../assets/images/icon1.svg"

const PhotoShoot = () => {
  return (
    <div className="photoshoot-section">
      <div className="photoshoot-container">
        <div className="left-side">
          <div className="title lh-57 title-black">
            The only studio in the world using
            <span className="title-orange"> Gen-AI, 3D Tech & Photoshoot </span>
            for creating targeted commerce content.
          </div>
          <div className="text-grey f-18 lh-27 w-400 text-pad">
            We generate all types of catalog & marketing content required to
            sell and market your product.
          </div>
          <div className="button-section">
            <Button
              text="Explore all packs"
              className="primaryBtn Button"
              width="191.6px"
            />
            <Button
              text="Chat with sales"
              className="secondaryBtn Button"
              width="174px"
            />
          </div>
        </div>
        <div className="right-side">
          
        <div className="row">
        <div className="col">
          <img src={rectangle1} alt="img_1" loading="lazy" />
        </div>
        <div className="col">
          <img src={gif1} alt="gif_1" loading="lazy" />
        </div>
        <div className="col" style={{position: "relative"}}>
            <img src={starIcon} alt="star-icon" loading="lazy" style={{position: "absolute", right: "-3rem", top: "-3rem", zIndex: "0" }} />
          <img src={img1} alt="img1" loading="lazy" style={{position: "relative", zIndex: "1"}} />
        </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={img2} alt="img2" loading="lazy" />
          </div>
          <div className="col">
            <div className="row">
            <div className="col">
            <img src={img3} alt="img3" loading="lazy" />
            </div>
            <div className="col">
            <img src={img4} alt="img4" loading="lazy" />
            </div>
            </div>
            <div className="row">
              <div className="col">
              <img src={img5} alt="img5" loading="lazy" />
              </div>
              <div className="col">
              <img src={img6} alt="img6" loading="lazy" />
              </div>
              <div className="col">
              <img src={rectangle2} alt="rectangle2" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoShoot;

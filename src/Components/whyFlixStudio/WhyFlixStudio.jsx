import React from "react";
import "./WhyFlixStudio.scss";
import brand1 from "../../assets/images/brand1.svg";
import brand2 from "../../assets/images/brand2.svg";
import brand3 from "../../assets/images/brand3.svg";
import brand4 from "../../assets/images/brand4.svg";
import brand5 from "../../assets/images/brand5.svg";
import brand6 from "../../assets/images/brand6.svg";
import brand7 from "../../assets/images/brand7.svg";
import studio from "../../assets/images/studio.svg";
import flix from "../../assets/images/FLIX.svg";
import ownedIcon from "../../assets/images/ownedIcon.svg";
import { CustomButton as Button } from "../../CommonComponents/button/Button";

const imgData = [
  {
    id: 1,
    img: brand1,
  },
  {
    id: 2,
    img: brand2,
  },
  {
    id: 3,
    img: brand3,
  },
  {
    id: 4,
    img: brand4,
  },
  {
    id: 5,
    img: brand5,
  },
  {
    id: 6,
    img: brand6,
  },
  {
    id: 7,
    img: brand7,
  },
];
const WhyFlixStudio = () => {
  return (
    <div className="why-section">
      <div className="why-container">
        <div className="top-section">
          <div className="coma">“</div>
          <div className="right-side">
            <div className="heading">
              Why FlixStudio is right choice for you,
              <br />
              compared to other studios.
            </div>
            <div className="text">
              A trusted choice with{" "}
              <span>1000+ clients worldwide, 10M+ images generated,</span> and
              an <br />
              industry leader for the <span>last 5 years.</span>
            </div>
          </div>
        </div>


        <div className="middle-section">
          <div className="marque-group">
          <div className="marquee">
            {imgData.map((item) => (
              <img src={item.img} alt="img" loading="lazy" />
            ))}
          </div>
            <div className="marquee marquee-2">
            {imgData.map((item) => (
              <img src={item.img} alt="img" loading="lazy" />
            ))}
          </div>
          </div>
        </div>



        <div className="bottom-section">
          <div className="row">
            <div className="col col1">
              <div className="item-content">
                <div className="sub-heading">
                  We generate Images <br />
                  which helps you convey <br />
                  USP of your product
                </div>
                <Button
                  text="Explore End to End pack"
                  className="Button thirdBtn"
                  width="246px"
                />
              </div>
            </div>
            <div className="col col2">
              <div className="item-content">
                <div className="sub-heading">
                  Enables you to create catalog <br />
                  image from any phase of <br />
                  product development
                </div>
                <Button
                  text="Explore 3D pack"
                  className="Button thirdBtn"
                  width="198px"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col5">
              <div className="item-content">
                <img className="studio" src={studio} alt="img" loading="lazy" />
                <div className="flixImg">
                    <img className="ownedIcon" src={ownedIcon} alt="ownedIcon" loading="lazy" />
                  <img className="" src={flix} alt="flixImg" loading="lazy" />
                </div>
                <div className="country">
                  <span>USA</span>
                  <span>|</span>
                  <span> POLAND</span>
                  <span> |</span>
                  <span> GERMANY </span>
                  <span> |</span>
                  <span> INDIA</span>
                </div>
                <Button
                  text="Talk to image expert"
                  className="Button thirdBtn flixButton"
                  width="202px"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col col3">
              <div className="item-content">
                <div className="sub-heading">
                  Integration with
                  <br />
                  major e-commerce
                  <br />
                  partners worldwide{" "}
                </div>
                <Button
                  text="Talk to an expert"
                  className="Button thirdBtn"
                  width="202px"
                />
              </div>
            </div>
            <div className="col col4">
              <div className="item-content">
                <div className="sub-heading">
                  We understand image is <br />
                  subjective, so we are open for <br />
                  customizations as well{" "}
                </div>
                <Button
                  text="Check nearby studios"
                  className="Button thirdBtn"
                  width="233px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyFlixStudio;

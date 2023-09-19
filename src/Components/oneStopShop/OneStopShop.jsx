import React from "react";
import "./OneStopShop.scss";
import vector1 from "../../assets/images/vector1.svg";
import img from "../../assets/images/img7.svg";
import gif1 from "../../assets/images/gif2.svg";
import gif2 from "../../assets/images/gif3.svg";
import icon1 from "../../assets/images/icon2.svg";
import icon2 from "../../assets/images/icon3.svg";
import icon3 from "../../assets/images/icon-4.svg";
import GetStarted from "../getStarted/GetStarted";

const itemsData = [
  {
    id: 1,
    // img: gif2,
    img: img,
    title: "Catalog shoot",
    text: (
      <div className="text">
        Starring at <span className="title-black">$99</span> 60% off
      </div>
    ),
    btn: (
      <div className="btn">
        <div>Explore catalog packs</div>
        <img src={vector1} alt="vector" />
      </div>
    ),
    icon: <img className="img-icon icon1" src={icon1} alt="icon" />,
  },
  {
    id: 2,
    // img: gif2,
    img: gif1,
    title: "Video shoot",
    text: (
      <div className="text f-16 lh-19 w-400">
        Starring at <span className="title-black w-600">$99</span> 60% off
      </div>
    ),
    btn: (
      <div className="btn">
        <div>Explore video packs</div>
        <img src={vector1} alt="vector" />
      </div>
    ),
    icon: <img className="img-icon icon2" src={icon2} alt="icon" />,
  },
  {
    id: 3,
    // img: gif2,
    img: gif2,
    title: "Creative shoot",
    text: (
      <div className="text">
        Starring at <span className="title-black">$99</span> 60% off
      </div>
    ),
    btn: (
      <div className="btn">
        <div>Explore creative packs</div>
        <img src={vector1} alt="vector" />
      </div>
    ),
    icon: <img className="img-icon icon3" src={icon3} alt="icon" />,
  },
];
const OneStopShop = () => {
  return (
    <>
      <div className="stop-section">
        <div className="stop-container">
          <div className="title lh-52 title-black align-center">
            <span className="title-orange ">One stop shop</span> for all types
            of catalog & <br />
            marketing content required for buyers & <br />
            seller communication
          </div>
          <div className="text-grey w-400 lh-28 f-20 align-center">
            Powered by Gen-AI tools{" "}
          </div>
          <div className="content space-between">
            {itemsData.map((item) => (
              <div className="items flex-column">
                <div className="item-img ">
                  {item.icon}
                  <img className="img" src={item.img} alt="img" />
                </div>
                <div className="heading">{item.title}</div>
                {item.text}
                {item.btn}
              </div>
            ))}
          </div>
        </div>
      </div>
      <GetStarted />
    </>
  );
};

export default OneStopShop;

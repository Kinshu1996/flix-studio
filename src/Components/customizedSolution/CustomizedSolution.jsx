import React, { useContext } from "react";
import "./CustomizedSolution.scss";

import img1 from "../../assets/images/img10.svg";
import img2 from "../../assets/images/img11.svg";
import img3 from "../../assets/images/img12.svg";
import icon6 from "../../assets/images/icon6.svg";
import icon1 from "../../assets/images/arrowIcon1.svg";
import icon2 from "../../assets/images/arrowIcon2.svg";

import { Button } from "antd";
import GetStarted from "../getStarted/GetStarted";
import { Context } from "../../CommonComponents/context/AppContext";

const CustomizedSolution = () => {
  const {
    isHoveredFirst,
    handleHoverFirst,
    isHoveredSecond,
    handleHoverSecond,
    isHoveredThird,
    handleHoverThird,
  } = useContext(Context);
  //   console.log(isHovered);
  const data = [
    {
      id: 1,
      img: (
        <div className="img">
          <img src={icon6} alt="icon" className="img-icon" />
          <img src={img1} alt="img1" className="first-img" />
        </div>
      ),
      title: (
        <div className="sub-heading">
          Struggling to find models <br />
          for your shoot?
        </div>
      ),
      text: (
        <div className="sub-text">
          Relax, we've got you covered. We'll
          <br />
          provide the perfect models which <br />
          compliments your brand style.
        </div>
      ),
      btn: (
        <Button
          className="explore-btn"
          onMouseEnter={handleHoverFirst}
          onMouseLeave={handleHoverFirst}
        >
          Explore FlixModel
          <img
            src={isHoveredFirst ? icon2 : icon1}
            alt="icon"
            className="btn-icon"
          />
        </Button>
      ),
    },
    {
      id: 2,
      img: (
        <div className="img">
          <img src={img2} alt="img2" />
        </div>
      ),
      title: (
        <div className="sub-heading">
          Want a hands-off <br />
          approach?
        </div>
      ),
      text: (
        <div className="sub-text">
          Simply send us your products, and we'll take <br />
          care of everything, making sure your products <br />
          are beautifully showcased on your website.
        </div>
      ),
      btn: (
        <Button
          className="explore-btn explore-btn-sec"
          onMouseEnter={handleHoverSecond}
          onMouseLeave={handleHoverSecond}
          style={{ width: "291px" }}
        >
          Explore End 2 End services
          <img
            src={isHoveredSecond ? icon2 : icon1}
            alt="icon"
            className="btn-icon"
          />
        </Button>
      ),
    },
    {
      id: 3,
      img: (
        <div className="img">
          <img src={img3} alt="img3" />
        </div>
      ),
      title: (
        <div className="sub-heading">
          Don’t have physical <br />
          samples?
        </div>
      ),
      text: (
        <div className="sub-text">
          No problem! Our Flix3D technology <br />
          enables us to create stunning commerce <br />& marketing images from
          3D
        </div>
      ),
      btn: (
        <Button
          className="explore-btn"
          onMouseEnter={handleHoverThird}
          onMouseLeave={handleHoverThird}
        >
          Explore Flix3D
          <img
            src={isHoveredThird ? icon2 : icon1}
            alt="icon"
            className="btn-icon"
          />
        </Button>
      ),
    },
  ];

  return (
    <>
      <div className="customized-section">
        <div className="customized-container">
          <div className="heading">
            Customized solutions for every seller: Choose <br />
            the perfect fit for your unique use case!
          </div>
          <div className="customized-content">
            {data.map((item) => (
              <div className="item">
                {item.img}
                {item.title}
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

export default CustomizedSolution;

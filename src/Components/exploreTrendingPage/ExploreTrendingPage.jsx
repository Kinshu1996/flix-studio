import React, { useState } from "react";
import "./ExploreTrendingPage.scss";
import rect1 from "../../assets/images/rect1.svg";
import rect2 from "../../assets/images/rect2.svg";
import rect3 from "../../assets/images/rect3.svg";

import {
  CatalogPack,
  CreativePack,
  VideoPack,
} from "../catalogPack/CatalogPack";
import GetStarted from "../getStarted/GetStarted";

const ExploreTrendingPage = () => {
  const [active, setActive] = useState("1");

  const handleActive = (e) => {
    setActive(e.target.id);
  };

  return (
    <>
      <div className="explore-section">
        <div className="explore-container">
          <div className="top-section">
            <img className="rect1 " src={rect1} alt="rect1" loading="lazy"/>
            <div className="heading">Explore trending packages</div>
            <div className="trending-btn">
              <div
                className={active === "1" ? "active" : "trending"}
                id={"1"}
                onClick={handleActive}
              >
                Catalog Pack
              </div>
              <div
                className={active === "2" ? "active" : "trending"}
                id={"2"}
                onClick={handleActive}
              >
                Video Pack
              </div>
              <div
                className={active === "3" ? "active" : "trending"}
                id={"3"}
                onClick={handleActive}
              >
                Creative Pack
              </div>
            </div>
            <div className="text">
              <span>124 People </span>
              have booked one or more packages in last 24 hours
            </div>
            <img className="rect2" src={rect2} alt="rect2" loading="lazy" />
            <img className="rect3" src={rect3} alt="rect3" loading="lazy" />
          </div>
          <div className="bottom-section">
            {active === "2" ? (
              <VideoPack />
            ) : active === "3" ? (
              <CreativePack />
            ) : (
              <CatalogPack />
            )}
          </div>
        </div>
      </div>
      <GetStarted />
    </>
  );
};

export default ExploreTrendingPage;

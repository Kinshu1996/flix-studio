import { Col, Row } from "antd";
import React from "react";
import "./Offers.scss";
import offerImg1 from "../../assets/images/offerImg1.svg";
import offerImg2 from "../../assets/images/offerImg2.svg";
import offerImg3 from "../../assets/images/offerImg3.svg";
import offIcon from "../../assets/images/offIcon.svg";
import { CustomButton as Button } from "../../CommonComponents/button/Button";

const Offers = () => {
  return (
    <div className="offers-section">
      <div className="offer-container">
        <div className="top-section">
          <div className="heading">Offers</div>
          <div className="text">
            Don't miss out on this limited-time offer! Act now and take <br />{" "}
            advantage of this exclusive opportunity before it's gone!
          </div>
        </div>
        <div className="bottom-section">
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <div className="col first-col">
                <div className="img">
                  <img src={offerImg1} alt="offerImg"  />
                  <img src={offIcon} alt="off-icon" className="off-icon"  />
                </div>
                <div className="content">
                  <div className="item-title">
                    E-commerce starter pack (Fashion)
                  </div>
                  <div className="offer-section">
                    <div className="get">GET IT NOW</div>
                    <div className="offer">
                      50% <span>off</span>
                    </div>
                    <div className="only-text">
                      Only <span className="bold">$50</span>{" "}
                      <span className="grey">$100</span>
                    </div>
                    <Button text="Buy now" width="122px" className="buy-btn" />
                  </div>
                  <div className="item-text">
                    Don't miss this limited-time offer! Take the first step
                    towards a <br />
                    remarkable e-commerce journey with FlixStudio today!
                  </div>
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div className="col sec-col">
                <div className="img">
                  <img src={offerImg2} alt="offerImg"  />
                </div>
                <div className="content">
                  <div className="item-title">360 Product video</div>
                  <div className="offer-section">
                    <div className="get">GET IT NOW</div>
                    <div className="offer">40%</div>
                    <div className="only-text">
                      Only <span className="bold">$120</span>{" "}
                      <span className="grey">$200</span>
                    </div>
                    <Button text="Buy now" width="122px" className="buy-btn" />
                  </div>
                  <div className="item-text">
                    Immerse your customers in an unparalleled visual experience
                    with our cutting-edge 360-degree product videos.
                  </div>
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div className="col third-col">
                <div className="img">
                  <img src={offerImg3} alt="offerImg"  />
                </div>
                <div className="content">
                  <div className="item-title">Ghost image creation</div>
                  <div className="offer-section">
                    <div className="get">GET IT NOW</div>
                    <div className="offer">40%</div>
                    <div className="only-text">
                      Only <span className="bold">$120</span>{" "}
                      <span className="grey">$200</span>
                    </div>
                    <Button text="Buy now" width="122px" className="buy-btn" />
                  </div>
                  <div className="item-text">
                    Unlock the power of captivating visuals with our
                    limited-time offer on ghost image creation.
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Offers;

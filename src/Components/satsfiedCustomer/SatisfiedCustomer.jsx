import React, { useContext } from "react";
import "./SatisfiedCustomer.scss";
import img1 from "../../assets/images/Carousel1.svg";
import img2 from "../../assets/images/Carousel2.svg";
import img3 from "../../assets/images/Carousel3.svg";
import img4 from "../../assets/images/carousel4.svg";
import img5 from "../../assets/images/carousel5.svg";
import Card from "./Card";
import Carausel from "./Carausel.jsx";
import { Context } from "../../CommonComponents/context/AppContext";

const SatisfiedCustomer = () => {
  let cards = [
    {
      key: 0,
      content: <Card imagen={img1} />,
      text: `"Partnering with FlixStudio has been a game-changer for our business. The complexities of coordinating photoshoots with various criteria and customer demands were overwhelming. FlixStudio's streamlined process, from model selection to styling, has saved us valuable time and resources. Their efficient project managers ensure that our products are captured perfectly, and their quick turnaround time aligns perfectly with our fast-paced industry. Thanks to FlixStudio, we now launch our products on time, staying ahead in the competitive fashion market."
      `,
    },
    {
      key: 1,
      content: <Card imagen={img2} />,
      text: `"FlixStudio's innovative approach to apparel photography has revolutionized our workflow. As a mid-sized company, managing photoshoots used to be a major challenge due to customer requirements and time constraints. With FlixStudio, it's as simple as sharing an AWB code. The result? Impeccable images that match our brand's style and meet all criteria. Their user-friendly review portal and responsive team make collaboration effortless. In just 7 days, our products are photo-ready, giving us a competitive edge in the fast-moving fashion landscape."
      `,
    },
    {
      key: 2,
      content: <Card imagen={img3} />,
      text: `"Efficiency and speed are the name of the game in the fashion industry. FlixStudio understands this better than anyone. What used to be a time-consuming process fraught with delays has now become a seamless experience. From initial coordination to the final color-corrected images, FlixStudio's platform simplifies everything. As a brand, we're in control of the creative direction, and their expert team ensures our vision comes to life. With FlixStudio, we've eliminated launch delays and are always ready to shine in the highly competitive market."
    `,
    },
    {
      key: 3,
      content: <Card imagen={img4} />,
      text: `            "In the world of fashion, every moment counts, and FlixStudio has become our secret weapon for staying ahead. The traditional challenges of coordinating with photo studios and meeting diverse customer demands were draining our resources. FlixStudio's end-to-end solution has been a game-changer. Their project managers take care of every detail, and their efficient system delivers flawlessly color-corrected images in just 7 days. We're not just working with a photo studio; we're empowered by a digital transformation that ensures our products are always in the spotlight."
      `,
    },
    {
      key: 4,
      content: <Card imagen={img5} />,
      text: `            "FlixStudio isn't just a vendor; they're an invaluable partner that has reshaped our approach to apparel photography. The intricate process of arranging models, meeting styling requirements, and perfecting every detail used to consume our time and energy. Enter FlixStudio, and suddenly it's a breeze. With their platform, we're in control of the entire creative process, yet we're freed from the hassle of coordination. Timely, professional, and responsive – FlixStudio is our go-to for delivering top-quality images while maintaining our competitive edge"
      `,
    },
  ];

  const { goToSlide, setGoToSlide } = useContext(Context);
  return (
    <div className="satisfied-section">
      <div className="satisfied-container">
        <div className="top-section">
          <div className="heading">
            Let’s hear directly from Our <br />
            satisfied customers!
          </div>
          <div className="text">
            Over 100 new clients use FlixStudio to improve <br />
            their images monthly.
          </div>
        </div>
        <div className="customer-section">
          <div className="carousel-header">
            <span>Jane John, </span>E-commerce Manager
          </div>
          <Carausel
            cards={cards}
            height="308px"
            width="100%"
            margin="0 auto"
            offset={200}
            showArrows={false}
          />
          <div className="text-container">
            <div className="carousel-text">
              {cards.map((item, index) => (
                <div className="text-content" key={index}>
                  {item.key == goToSlide ? <div>{item.text}</div> : ""}
                </div>
              ))}
            </div>
          </div>
          <div className="dot-container">
            <div className="dots-content">
              {
                cards.map((item,index) => (
                  <div className={goToSlide == index ? "dot active-dot" : "dot"}  onClick={() => setGoToSlide(index)}></div>
                )
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SatisfiedCustomer;

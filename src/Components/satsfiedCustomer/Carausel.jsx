import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";


export default function Carausel(props) {

  const [goToSlide, setGoToSlide] = useState(0);

  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [cards] = useState(table);
 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGoToSlide((prevIndex) =>
        prevIndex === cards.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(intervalId); // Clear the interval when the component unmounts
    };
  }, [cards]);

  return (
   <>
    <div
        style={{
          height: props.height,
          margin: props.margin,
        }}
      >
        <Carousel
          slides={cards}
          goToSlide={goToSlide}
          animationConfig={config.gentle}
        />
      </div>
      <div className="text-container">
      <div className="carousel-text">
        {cards.map((item, index) => (
          <div className="text-content" key={index}>
            {item.key === goToSlide ? <div>{item.text}</div> : ""}
          </div>
        ))}
      </div>
    </div>
    <div className="dot-container">
      <div className="dots-content">
        {cards.map((item, index) => (
          <div
            className={goToSlide === index ? "dot active-dot" : "dot"}
            onClick={() => setGoToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
   </>
  );
}

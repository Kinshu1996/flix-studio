import Carousel from "react-spring-3d-carousel";
import { useState, useEffect, useContext } from "react";
import { config } from "react-spring";
import { Context } from "../../CommonComponents/context/AppContext";

export default function Carausel(props) {

  const {goToSlide, setGoToSlide} = useContext(Context);

  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [cards] = useState(table);
 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGoToSlide((prevIndex) =>
        prevIndex === props.cards.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(intervalId); // Clear the interval when the component unmounts
    };
  }, [props.cards, 3000]);

  // const carouselConfig = {
  //   spaceBetween: "20px", // Adjust this value to reduce the gap
  //   // Other configuration options go here
  // };

  return (
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
  );
}

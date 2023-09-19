import React from "react";
import arrow from "../../assets/images/knowIcon.svg";

const CatalogTeamItem = ({
  className,
  item,
  i,
  halfwayIndex,
  itemHeight,
  activeIndex,
  setActiveIndex,
}) => {
  const determinePlacement = (itemIndex) => {
    // Position item in the center of list
    if (activeIndex === itemIndex) return 0;

    // Targeting items in the second part of the list
    if (itemIndex >= halfwayIndex) {
      // If moving backwards from index 0 to the last item, move the value downwards
      if (activeIndex > itemIndex - halfwayIndex) {
        return (itemIndex - activeIndex) * itemHeight;
        // return ""
      } else {
        // Negative value moves upwards towards the top of the list
        // return -((data.length + activeIndex) - itemIndex) * itemHeight;
        // return ""
        return (itemIndex - activeIndex) * itemHeight;
      }
    }

    // Spacing for items after the current index
    if (itemIndex > activeIndex) {
      return (itemIndex - activeIndex) * itemHeight;
    }

    // Spacing for items before the current index

    if (itemIndex < activeIndex) {
      // If passing the negative threshold, move into a positive positioning
      // if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
      //   return (data.length - (activeIndex - itemIndex)) * itemHeight;
      //   // return 0;
      // }
      // Move into a negative positioning
      return -(activeIndex - itemIndex) * itemHeight;
      // return ""
    }
  };
  const isXyz = className === "active";
  const inlineStyles = isXyz
    ? {
        // transform: `translateY(${determinePlacement(i)}rem)`
        transform: `translateY(${determinePlacement(i)}rem)`,
      }
    : {
        transform: `translateY(${determinePlacement(i)}rem)`,
        //  transform: ""
      };
  return (
    <div
      onClick={() => setActiveIndex(i)}
      className={className}
      style={inlineStyles}
    >
      <div className="active-title">{item.title}</div>
      <div className="catalog-team-text">
        <div className="text">{item.text}</div>
        <div className="knowBtn">
          <div>Know more</div>
          <img src={arrow} alt="arrow-icon"  />
        </div>
      </div>
    </div>
  );
};

export default CatalogTeamItem;

import React, { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
 
  const [goToSlide, setGoToSlide] = useState(0);
  const [isHoveredFirst, setIsHoveredFirst] = useState(false);
  const [isHoveredSecond, setIsHoveredSecond] = useState(false);
  const [isHoveredThird, setIsHoveredThird] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  

  const handleHoverFirst = () => {
    setIsHoveredFirst(!isHoveredFirst);
  };

  const handleHoverSecond = () => {
    setIsHoveredSecond(!isHoveredSecond);
  };

  const handleHoverThird = () => {
    setIsHoveredThird(!isHoveredThird);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  
  return (
    <Context.Provider
      value={{
        goToSlide,
        setGoToSlide,
        isHoveredFirst,
        handleHoverFirst,
        isHoveredSecond,
        handleHoverSecond,
        isHoveredThird,
        handleHoverThird,
        isModalOpen,
        showModal,
        handleOk,
        handleCancel,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;

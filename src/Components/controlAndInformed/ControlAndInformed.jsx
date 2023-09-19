import React from "react";
import "./ControlAndInformed.scss";
import ReactPlayer from "react-player";
import icon from "../../assets/images/icon5.svg";
import video from "../../assets/videos/Booking Flow.mov";
import close from "../../assets/images/close.svg";
import minimise from "../../assets/images/minimize.svg";
import maximise from "../../assets/images/maximize.svg";

const ControlAndInformed = () => {
  return (
    <div className="control-section">
      <div className="control-container">
        <div className="heading">
          “You are always in control & informed”
          <br />
          thanks to FlixStudio software
        </div>
        <div className="text">
          Streamlined shoot management: book, track, and review with ease -{" "}
          <br />
          FlixStudio software, your all-in-one solution for total control!
        </div>
        <div className="content">
          <div className="tik-container tik-container-1">
            <img className="tic-icon" src={icon} alt="tic" loading="lazy" />
            <div className="tik-text">Job Tracking</div>
          </div>
          <div className="tik-container tik-container-3">
            <img className="tic-icon" src={icon} alt="tic" loading="lazy" />
            <div className="tik-text">Model Selection</div>
          </div>
          <div className="video-container">
            <div className="dot-container">
              <img src={close} alt="close" loading="lazy" />
              <img src={minimise} alt="minimise" loading="lazy" />
              <img src={maximise} alt="maximise" loading="lazy" />
            </div>
            <div className="player-wrapper">
              <ReactPlayer
                url={video}
                loop={true}
                width={"100%"}
                height={"100%"}
                playing={true}
                controls={false}
                className="video"
              />
            </div>
          </div>

          <div className="tik-container tik-container-2">
            <img className="tic-icon" src={icon} alt="tic" loading="lazy" />
            <div className="tik-text">DAM</div>
          </div>

          <div className="tik-container tik-container-4">
            <img className="tic-icon" src={icon} alt="tic" loading="lazy" />
            <div className="tik-text">On Image Feedback</div>
          </div>
        </div>
        <div className="sub-text">
          Know all the features and benefits of flixstudio{" "}
          <span>Chat with Sales</span>
        </div>
      </div>
    </div>
  );
};

export default ControlAndInformed;

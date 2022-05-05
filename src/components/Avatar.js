import React, { useEffect, useRef, useState } from "react";
import "../components/Avatar.css";
import { avatarData } from "../data/Data";
import LightBulb from "../assets/images/about-lightbulb.svg";
import Puzzle from "../assets/images/about-puzzle.svg";
import Robot from "../assets/images/about-robot.svg";
import Student from "../assets/images/about-student.svg";
import Eye from "../assets/images/about-eye.svg";
import Smile from "../assets/images/about-smile.svg";

const Avatar = () => {
  const [isShown, setIsShown] = useState(0);
  const [imgActive, setImgActive] = useState(false);

  useEffect(() => {
    setImgActive(true);
  }, [isShown]);

  return (
    <div className="avatar-container">
      <div className="avatar">
        <p className="avatar__icons-title">soft skills:</p>

        <div className="avatar__icons-wrapper">
          <img
            onClick={() => {
              setIsShown(1);
              setImgActive(false);
            }}
            className="avatar__icon"
            src={LightBulb}
            alt="creative"
          />

          <img
            onClick={() => {
              setIsShown(2);
              setImgActive(false);
            }}
            className="avatar__icon"
            src={Puzzle}
            alt="problem solving"
          />

          <img
            onClick={() => {
              setIsShown(3);
              setImgActive(false);
            }}
            className="avatar__icon"
            src={Robot}
            alt="passionate for technology"
          />

          <img
            onClick={() => {
              setIsShown(4);
              setImgActive(false);
            }}
            className="avatar__icon"
            src={Student}
            alt="constant learning"
          />

          <img
            onClick={() => {
              setIsShown(5);
              setImgActive(false);
            }}
            className="avatar__icon"
            src={Eye}
            alt="detail oriented"
          />

          <img
            onClick={() => {
              setIsShown(6);
              setImgActive(false);
            }}
            className="avatar__icon"
            src={Smile}
            alt="friendly"
          />
        </div>

        {/* <iframe
          className="avatar-image"
          src="https://my.spline.design/untitled-93c1753c6b5d2f301c418a677de96cc2/"
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
        <div className="white-square"></div> */}

        <img
          className={
            imgActive ? "avatar__image avatar__image--active" : "avatar__image"
          }
          src={avatarData[isShown].imgUrl}
          alt="my avatar images"
        />

        <div
          className={
            imgActive
              ? "avatar__skills-wrapper avatar__skills-wrapper--active"
              : "avatar__skills-wrapper"
          }
        >
          <h3 className="avatar__skills-title">{avatarData[isShown].title}</h3>
          <p className="avatar__skills-description">
            {avatarData[isShown].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Avatar;

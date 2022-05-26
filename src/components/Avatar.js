import React, { useEffect, useState } from "react";
import "../components/Avatar.css";
import { avatarData } from "../data/Data";
import LightBulb from "../assets/images/about-lightbulb.svg";
import Puzzle from "../assets/images/about-puzzle.svg";
import Chat from "../assets/images/about-chat.svg";
import Student from "../assets/images/about-student.svg";
import Eye from "../assets/images/about-eye.svg";
import Smile from "../assets/images/about-smile.svg";

const Avatar = () => {
  const [isImgShown, setIsImgShown] = useState(0);
  const [imgActive, setImgActive] = useState(false);

  useEffect(() => {
    setImgActive(true);
  }, [isImgShown]);

  return (
    <div className="avatar-container">
      <div className="avatar">
        <p className="avatar__icons-title">soft skills:</p>

        <div className="avatar__icons-wrapper">
          <img
            onClick={() => {
              setIsImgShown(1);
              setImgActive(false);
            }}
            className="avatar__icon"
            src={LightBulb}
            alt="creative"
          />

          <img
            onClick={() => {
              setIsImgShown(2);
              setImgActive(false);
            }}
            className="avatar__icon"
            src={Puzzle}
            alt="problem solving"
          />

          <img
            onClick={() => {
              setIsImgShown(3);
              setImgActive(false);
            }}
            className="avatar__icon"
            src={Chat}
            alt="passionate for technology"
          />

          <img
            onClick={() => {
              setIsImgShown(4);
              setImgActive(false);
            }}
            className="avatar__icon"
            src={Student}
            alt="constant learning"
          />

          <img
            onClick={() => {
              setIsImgShown(5);
              setImgActive(false);
            }}
            className="avatar__icon"
            src={Eye}
            alt="detail oriented"
          />

          <img
            onClick={() => {
              setIsImgShown(6);
              setImgActive(false);
            }}
            className="avatar__icon"
            src={Smile}
            alt="friendly"
          />
        </div>

        <img
          className={
            imgActive ? "avatar__image avatar__image--active" : "avatar__image"
          }
          src={avatarData[isImgShown].imgUrl}
          alt="my avatar images"
        />

        <div
          className={
            imgActive
              ? "avatar__skills-wrapper avatar__skills-wrapper--active"
              : "avatar__skills-wrapper"
          }
        >
          <h3 className="avatar__skills-title">
            {avatarData[isImgShown].title}
          </h3>
          <p className="avatar__skills-description">
            {avatarData[isImgShown].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Avatar;

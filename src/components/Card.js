import React, { useEffect, useRef, useState } from "react";
import "../components/Card.css";
import IconClose from "../assets/images/card-icon-close.svg";

const Card = ({ project }) => {
  // const [isActive, setIsActive] = useState(false);
  // const toggleClass = () => {
  //    setIsActive(!isActive);
  // };

  const [isOpen, setIsOpen] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const refCardFront = useRef(null);
  const refCardBack = useRef(null);
  let newState = {};
  let newStateClose = {};

  const handleClickToOpen = () => {
    // newStateClose = {
    //   1: false,
    //   2: false,
    //   3: false,
    //   4: false,
    //   5: false,
    // };
    // setIsOpen(newStateClose);
    // console.log(newStateClose);

    newState = { ...isOpen, [project.id]: true };
    setIsOpen(newState);
  };

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  const handleClickToClose = () => {
    refCardFront.current.style.display = "block";
    refCardBack.current.style.display = "none";
  };

  return (
    <div
      // className={isActive ? "card card--active" : "card"}
      // onClick={toggleClass}
      className="card"
    >
      {/* ========================== CARD FRONT ========================== */}

      <div
        className="card-front"
        ref={refCardFront}
        onClick={handleClickToOpen}
        style={{
          display: isOpen[project.id] === false ? "block" : "none",
        }}
      >
        <p className="card-front__category">{project.category}</p>
        <div className="card-front__box">
          <img
            className="card-front__icon"
            src={project.icon}
            alt="icon project"
          />
          <div className="card-front__title-wrapper">
            <h3 className="card-front__title card-front__title--red">
              {project.title0}
            </h3>
            <h3 className="card-front__title">{project.titleA}</h3>
            <h3 className="card-front__tech">{project.tech}</h3>
          </div>
        </div>
        <p className="card-front__text">{project.frontText}</p>
      </div>

      {/* ========================== CARD BACK ========================== */}

      <div
        className="card-back"
        ref={refCardBack}
        style={{
          display: isOpen[project.id] === true ? "block" : "none",
        }}
      >
        <div className="card-back__header">
          <p className="card-back__category">{project.category}</p>
          <img
            className="card-back__close"
            onClick={handleClickToClose}
            src={IconClose}
            alt="close button"
          />
        </div>

        <img
          className="card-back__image"
          src={project.image}
          alt="main image project"
        />
        <h3 className="card-back__main-title">
          <span style={{ color: "red" }}>{project.titleB}</span>
          {project.titleC}
        </h3>

        <div className="card-back__info-wrapper">
          <p className="card-back__text">{project.backText}</p>
          <h4 className="card-back__title icon-purpose">purpose</h4>
          <p className="card-back__purpose">{project.backTextPurpose}</p>
          <h4 className="card-back__title icon-robot">tech</h4>
          <p className="card-back__tech">{project.backTextTech}</p>

          {project.visitIcon ? (
            <a
              className="card-back__visit-wraper"
              href={project.url}
              target="_blank"
            >
              <p className="card-back__visit icon-visit">visit project</p>
            </a>
          ) : null}
        </div>
      </div>

      {/* ========================== END CARDS ========================== */}
    </div>
  );
};

export default Card;
// for (let i = 0; i < isOpen.lenght; i++) {
//   if (isOpen[i] === project.id) {
//     refCardBack.current.style.display = "block";
//     console.log(`ref card back: ${refCardBack.current}`);
//   } else {
//     refCardBack.current.style.display = "none";
//     console.log(`ref card back: ${refCardBack.current}`);
//   }
// }

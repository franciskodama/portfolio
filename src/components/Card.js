import React, { useEffect, useRef, useState } from "react";
import "../components/Card.css";
import IconClose from "../assets/images/card-icon-close.svg";

const Card = ({ project }) => {
  const [isOpen, setIsOpen] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const refCardFront = useRef(null);
  const refCardBack = useRef(null);
  const ref = useRef(isOpen);

  const handleClickToOpen = (e) => {
    let newState = {};
    if (project.id === 1) {
      newState = {
        1: true,
        2: false,
        3: false,
        4: false,
        5: false,
      };
    } else if (project.id === 2) {
      newState = {
        1: false,
        2: true,
        3: false,
        4: false,
        5: false,
      };
    } else if (project.id === 3) {
      newState = {
        1: false,
        2: false,
        3: true,
        4: false,
        5: false,
      };
    } else if (project.id === 4) {
      newState = {
        1: false,
        2: false,
        3: false,
        4: true,
        5: false,
      };
    } else if (project.id === 5) {
      newState = {
        1: false,
        2: false,
        3: false,
        4: false,
        5: true,
      };
    }
    console.log(project.id);
    updateState(newState);

    // for (let i = 0; i < isOpen.lenght; i++) {
    //   if (isOpen[i] === project.id) {
    //     refCardBack.current.style.display = "block";
    //     console.log(`ref card back: ${refCardBack.current}`);
    //   } else {
    //     refCardBack.current.style.display = "none";
    //     console.log(`ref card back: ${refCardBack.current}`);
    //   }
    // }
  };

  const updateState = (state) => {
    ref.current = state;
    setIsOpen(state);
    console.log(ref.current[project.id]);
  };

  const handleClickToClose = (e) => {
    refCardFront.current.style.display = "block";
    refCardBack.current.style.display = "none";
  };

  return (
    <div className="card">
      {/* ============================================================== */}

      <div
        className="card-front"
        ref={refCardFront}
        onClick={handleClickToOpen}
        style={{
          display: ref.current[project.id] === false ? "block" : "none",
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

      {/* ============================================================== */}

      <div
        className="card-back"
        ref={refCardBack}
        style={{
          display: ref.current[project.id] === true ? "block" : "none",
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
    </div>
  );
};

export default Card;

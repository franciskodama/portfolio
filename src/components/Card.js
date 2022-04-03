import React, { useRef, useState } from "react";
import "../components/Card.css";
import IconClose from "../assets/images/card-icon-close.svg";

const Card = ({ project }) => {
  // const [ isOpen, setIsOpen ] = useState({
  //   1: { front: true },
  //   2: { front: true },
  //   3: { front: true },
  //   4: { front: true },
  //   5: { front: true }
  // })

  const refCardFront = useRef(null);
  const refCardBack = useRef(null);

  const handleClickToOpen = (e) => {
    refCardFront.current.style.display = "none";
    refCardBack.current.style.display = "block";

    // setIsOpen(isOpen.front ? {front: false} : {front: true})

    // setIsFront({
    //   1: { front: true },
    //   2: { front: true },
    //   3: { front: true },
    //   4: { front: true },
    //   5: { front: true }
    // })
  };

  const handleClickToClose = (e) => {
    refCardFront.current.style.display = "block";
    refCardBack.current.style.display = "none";
  };

  return (
    <div className="card">
      <div
        className="card-front"
        ref={refCardFront}
        onClick={handleClickToOpen}
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

      <div className="card-back" ref={refCardBack}>
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

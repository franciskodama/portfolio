import React, { useEffect, useRef, useState } from "react";
import "../components/Card.css";
import IconClose from "../assets/images/card-icon-close.svg";

const Card = ({ project }) => {
  const [isBackActive, setIsBackActive] = useState(false);
  const toggleClass = () => {
    setIsBackActive(!isBackActive);
  };

  // const [isOpen, setIsOpen] = useState({
  //   1: false,
  //   2: false,
  //   3: false,
  //   4: false,
  //   5: false,
  // });

  // const refCardFront = useRef(null);
  // const refCardBack = useRef(null);
  // let newStateOpen = {};
  // let newStateClose = {};

  // const handleClickToOpen = () => {
  //   handleClickToClose();
  //   newStateOpen = { ...isOpen, [project.id]: true };
  //   setIsOpen(newStateOpen);
  // };

  // useEffect(() => {
  //   console.log(project.id);
  // }, [isOpen]);

  // const handleClickToClose = () => {
  //   newStateClose = {
  //     1: false,
  //     2: false,
  //     3: false,
  //     4: false,
  //     5: false,
  //   };
  //   setIsOpen(newStateClose);
  // };

  return (
    <div className="card">
      {/* ========================== CARD FRONT ========================== */}

      <div
        className={!isBackActive ? "card--active card-front" : "card-front"}
        // ref={refCardFront}
        // onClick={handleClickToOpen}

        onClick={toggleClass}
        // style={{
        //   display: isOpen[project.id] ? "none" : "block",
        // }}
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
        className={isBackActive ? "card--active card-back" : "card-back"}
        // ref={refCardBack}
        // style={{
        //   display: isOpen[project.id] ? "block" : "none",
        // }}
      >
        <div className="card-back__header">
          <p className="card-back__category">{project.category}</p>
          <img
            className="card-back__close"
            // onClick={handleClickToClose}
            onClick={toggleClass}
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

// -------------------------------------
// Hook to catch click outside of a Component
// -------------------------------------

// const useOutsideAlerter = (ref) => {
//   useEffect(() => {
//     const handleClickOutsideCard = (e) => {
//       if (ref.current && !ref.current.contains(e.target)) {
//         alert("clicked outside");
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutsideCard);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutsideCard);
//     };
//   }, [ref]);
// };
// useOutsideAlerter(refCardBack);

// -------------------------------------
// Hook to catch click outside of a Component | Second try
// -------------------------------------

// const useOutsideAlerter = (ref) => {
//   useEffect(() => {
//     const handleClickOutsideCard = (e) => {
//       if (isOpen && !ref.current.contains(e.target)) {
//         refCardBack.current.style.display = "none";
//         refCardFront.current.style.display = "block";
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutsideCard);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutsideCard);
//     };
//   }, [ref]);
// };

// useOutsideAlerter(refCardBack);

// -------------------------------------
// Hook to see previous value
// -------------------------------------

// const usePrevious = (value) => {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current = value;
//   }, [value]);
//   return ref.current;
// };

// const prevState = usePrevious(isOpen);

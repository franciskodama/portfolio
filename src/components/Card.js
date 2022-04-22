import React, { useEffect, useRef, useState } from "react";
import "../components/Card.css";
import IconClose from "../assets/images/card-icon-close-white.svg";

const Card = ({ project }) => {
  const [isOpen, setIsOpen] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  // const refCardFront = useRef(null);
  // const refCardBack = useRef(null);

  const handleClickToOpen = () => {
    handleClickToClose();
    setIsOpen((prev) => ({ ...prev, [project.id]: true }));
  };

  useEffect(() => {
    console.log(project.id);
  }, [isOpen]);

  const handleClickToClose = () => {
    setIsOpen((prev) => ({
      prev: false,
    }));
  };

  return (
    <div className="card">
      {/* ========================== CARD FRONT ========================== */}

      <div
        className="card-front"
        // ref={refCardFront}
        onClick={handleClickToOpen}
        style={{
          display: isOpen[project.id] ? "none" : "block",
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
            <h3 className="card-front__title--red">{project.title0}</h3>
            <h3 className="card-front__title">{project.titleA}</h3>
            <h3 className="card-front__tech">{project.tech}</h3>
          </div>
        </div>
        <p className="card-front__text">{project.frontText}</p>
      </div>

      {/* ========================== CARD BACK ========================== */}

      <div
        className="card-back"
        // ref={refCardBack}
        style={{
          display: isOpen[project.id] ? "block" : "none",
        }}
      >
        <div
          className="card-back__background"
          style={{ backgroundColor: project.backgroundColor }}
        >
          <img
            className="card-back__close"
            onClick={handleClickToClose}
            src={IconClose}
            alt="close button"
          />
          <div className="card-back__first-container">
            <div className="card-back__first-wrapper">
              <h2 className="card-back__main-title">
                <span>{project.title0}</span>
                {project.titleA}
              </h2>
              <h3 className="card-back__year">{project.year}</h3>
              <img
                className="card-back__image"
                src={project.image}
                alt="main image project"
              />
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
          <div className="card-back__second-container">
            <div className="card-back__second-wrapper">
              <p className="card-back__category">{project.category}</p>

              <h4 className="card-back__title">{project.backText_titleOne}</h4>
              <p className="card-back__text">{project.backText_textOne}</p>
              <h4 className="card-back__title">{project.backText_titleTwo}</h4>
              <p className="card-back__text">{project.backText_textTwo}</p>
              <h4 className="card-back__title">
                {project.backText_titleThree}
              </h4>
              <p className="card-back__text">{project.backText_textThree}</p>
              <h4 className="card-back__title">{project.backText_titleFour}</h4>
              <p className="card-back__text">{project.backText_textFour}</p>
            </div>
          </div>
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

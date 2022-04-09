import React, { useRef, useState } from "react";
import "../components/WhyCard.css";
import EyeOpen from "../assets/images/why-eye-open.svg";
import EyeClosed from "../assets/images/why-eye-closed.svg";
import Check from "../assets/images/why-icon-check.svg";
import Close from "../assets/images/card-icon-close-white.svg";

const WhyCard = ({
  titleOne,
  textOne,
  titleTwo,
  textTwo,
  titleThree,
  textThree,
  titleFour,
  textFour,
  observation,
  bottom,
  left,
}) => {
  const [isCardShow, setIsCardShow] = useState(false);
  const [isOnMouse, setisOnMouse] = useState(false);

  const refButton = useRef(null);
  const refButtonLabel = useRef(null);
  const refWhy = useRef(null);

  const onMouseEnterHandler = () => {
    setisOnMouse(true);
  };

  const onMouseOutHandler = () => {
    setisOnMouse(false);
  };

  const clickHandler = () => {
    isCardShow ? setIsCardShow(false) : setIsCardShow(true);
  };

  return (
    <div className="why-container" style={{ bottom: bottom, left: left }}>
      <button
        ref={refButton}
        className={`why-toggle ${isCardShow ? "why-toggle--active" : ""}`}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseOutHandler}
        onClick={clickHandler}
      >
        <span
          className={`why-toggle__label ${
            isOnMouse && !isCardShow ? "why-toggle__label--active" : null
          }`}
          ref={refButtonLabel}
        >
          Click me
        </span>

        {/* <img className="eye" src={EyeOpen} alt="icon eye" /> */}
        <img
          className="eye"
          src={isCardShow ? EyeClosed : EyeOpen}
          alt="icon eye"
        />
      </button>

      <ul
        className="why"
        ref={refWhy}
        style={{ display: isCardShow ? "block" : "none" }}
      >
        <img
          className="why__close"
          onClick={clickHandler}
          src={Close}
          alt="close button icon"
        />

        <li className="why__item">
          <h2 className="why__title why__title--flag">{titleOne}</h2>
          <p className="why__description">{textOne}</p>
        </li>

        <li className="why__item">
          <h2 className="why__title why__title--bolt">{titleTwo}</h2>
          <p className="why__description">{textTwo}</p>
        </li>

        <li className="why__item">
          <h2 className="why__title why__title--robot">{titleThree}</h2>
          <p className="why__description">{textThree}</p>
        </li>

        <li className="why__item">
          <h2 className="why__title why__title--brush">{titleFour}</h2>
          <p className="why__description">{textFour}</p>
        </li>

        <li className="why__footer">
          <img className="why__icon" src={Check} alt="icon check" />
          <p className="why__text">{observation}</p>
        </li>
      </ul>
    </div>
  );
};

export default WhyCard;

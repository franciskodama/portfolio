import React, { useEffect, useRef, useState } from "react";
import "../components/Palette.css";
import gsap from "gsap";

const Color = ({ isActive, firstColors, secondColors, thirdColors }) => {
  const [toggle, setToggle] = useState(false);
  const paletteRef = useRef();

  useEffect(() => {
    gsap.from(paletteRef.current, {
      opacity: 0,
      y: 50,
    });
  }, [toggle]);

  return (
    <div className="color">
      <div
        className="color__square-first"
        onClick={() => setToggle(!toggle)}
      ></div>

      <div
        className="color__square-wrapper"
        ref={paletteRef}
        style={{ display: toggle ? "block" : "none" }}
      >
        <ul
          className={
            isActive.first ? "color__options color--active" : "color__options"
          }
          onClick={firstColors}
        >
          <li className="color__square color--one"></li>
          <li className="color__square color--two"></li>
        </ul>
        <ul
          className={
            isActive.second ? "color__options color--active" : "color__options"
          }
          onClick={secondColors}
        >
          <li className="color__square color--three"></li>
          <li className="color__square color--four"></li>
        </ul>
        <ul
          className={
            isActive.third ? "color__options color--active" : "color__options"
          }
          onClick={thirdColors}
        >
          <li className="color__square color--five"></li>
          <li className="color__square color--six"></li>
        </ul>
      </div>
    </div>
  );
};

export default Color;

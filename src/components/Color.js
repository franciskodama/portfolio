import React, { useEffect, useState } from "react";
import "../components/Color.css";

const Color = () => {
  const [toggle, setToggle] = useState(false);
  const [isActive, setIsActive] = useState({
    first: true,
    second: false,
    third: false,
  });
  const [color, setColor] = useState({
    first: "1c1c1c",
    second: "ed1c24",
  });

  const handleClickFirstColors = () => {
    setColor({ first: "1c1c1c", second: "ed1c24" });
    setIsActive({
      first: true,
      second: false,
      third: false,
    });
  };

  const handleClickSecondColors = () => {
    setColor({ first: "a5a5a5", second: "ff9900" });
    setIsActive({
      first: false,
      second: true,
      third: false,
    });
  };

  const handleClickThirdColors = () => {
    setColor({ first: "006cd0", second: "faff00" });
    setIsActive({
      first: false,
      second: false,
      third: true,
    });
  };

  useEffect(() => {
    console.log(color);
    console.log(isActive);
  }, [color, isActive]);

  return (
    <div className="color">
      <div
        className="color__square-first"
        onClick={() => setToggle(!toggle)}
      ></div>

      <div
        className="color__square-wrapper"
        style={{ display: toggle ? "block" : "none" }}
      >
        <ul
          //   className="color__options color--active"
          className={
            isActive ? "color__options color--active" : "color__options"
          }
          onClick={handleClickFirstColors}
        >
          <li className="color__square color-one"></li>
          <li className="color__square color-two"></li>
        </ul>
        <ul
          // className="color__options"
          className={
            isActive ? "color__options color--active" : "color__options"
          }
          onClick={handleClickSecondColors}
        >
          <li className="color__square color-three"></li>
          <li className="color__square color-four"></li>
        </ul>
        <ul
          // className="color__options"
          className={
            isActive ? "color__options color--active" : "color__options"
          }
          onClick={handleClickThirdColors}
        >
          <li className="color__square color-five"></li>
          <li className="color__square color-six"></li>
        </ul>
      </div>
    </div>
  );
};

export default Color;

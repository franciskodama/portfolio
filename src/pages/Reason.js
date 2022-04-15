import React, { useState } from "react";
import "../styles/Reason.css";
import WhyCard from "../components/WhyCard";
import { whyData } from "../data/Data";
import Button from "../components/Button";

const Reason = () => {
  const originalMessageBright =
    "this portfolio has been built to showcase my variety of skills from creativity to code ";
  const originalMessageDark =
    "click on the eye below to know more of each page";
  const arrOfLettersBright = Array.from(originalMessageBright);
  const arrOfLettersDark = Array.from(originalMessageDark);

  let arrOfDiv = [];
  let arrOfDivUser = [];

  const createGrid = () => {
    for (let i = 0; i < arrOfLettersBright.length; i++) {
      arrOfDiv.push(
        <div key={i} className="reason__letter-bright">
          {arrOfLettersBright[i]}
        </div>
      );
    }
    for (let i = 0; i < arrOfLettersDark.length; i++) {
      arrOfDiv.push(
        <div key={i + 100} className="reason__letter-dark">
          {arrOfLettersDark[i]}
        </div>
      );
    }
    return arrOfDiv;
  };

  const [currentArray, setCurrentArray] = useState([]);

  const handleChange = (event) => {
    const letter = event.target.value;
    const divArray = [];
    divArray.push(<div className="reason__letter-bright">{letter}</div>);
    setCurrentArray((currentArray) => [...currentArray, divArray]);
    return currentArray;
  };

  return (
    <section className="section section--reason">
      <div className="reason__grid">{createGrid()}</div>
      <div>{currentArray}</div>

      {/* <form>
        <input
          className="grid__input"
          onChange={handleChange}
          type="text"
          placeholder="type something here..."
        />
        <Button
          text="reload original message"
          className="btn btn--third-color"
        />
        <div className="grid__input"></div>
      </form> */}

      <WhyCard
        titleOne={whyData.reason.titleOne}
        textOne={whyData.reason.textOne}
        titleTwo={whyData.reason.titleTwo}
        textTwo={whyData.reason.textTwo}
        titleThree={whyData.reason.titleThree}
        textThree={whyData.reason.textThree}
        titleFour={whyData.reason.titleFour}
        textFour={whyData.reason.textFour}
        observation={whyData.reason.observation}
        bottom={whyData.reason.bottom}
        left={whyData.reason.left}
      />
    </section>
  );
};

export default Reason;

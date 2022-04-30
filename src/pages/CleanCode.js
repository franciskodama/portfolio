import React, { useEffect, useRef, useState } from "react";
import "../styles/CleanCode.css";
import MagnifyingGlass from "../assets/images/code-check.svg";
// import Bubble from "../assets/images/code-bubble.png";
import WhyCard from "../components/WhyCard";
import { whyData } from "../data/Data";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

const CleanCode = () => {
  // const quoteRef = useRef();
  // const wordsRef = useRef();
  // const qQuote = gsap.utils.selector(quoteRef);
  // const qWords = gsap.utils.selector(wordsRef);

  // useEffect(() => {
  //   gsap.from(qQuote(".code__words--odd--inverse"), {
  //     scrollTrigger: {
  //       trigger: qQuote(".code__words--odd--inverse"),
  //       toggleActions: "restart pause restart pause",
  //       start: "center center",
  //       end: "top top",
  //       markers: true,
  //     },
  //     duration: 2,
  //     x: "-300px",
  //     stagger: "0.1",
  //     scale: 0,
  //   });
  //   gsap.from(qQuote(".code__words--even--inverse"), {
  //     scrollTrigger: {
  //       trigger: qQuote(".code__words--even--inverse"),
  //       toggleActions: "restart pause restart pause",
  //       start: "center center",
  //       end: "top top",
  //     },
  //     duration: 1,
  //     x: "300px",
  //     stagger: "0.5",
  //     opacity: 0,
  //     scale: 0,
  //   });
  // }, []);

  const [showBackground, setShowBackground] = useState(false);

  const handleClick = () => {
    setShowBackground(!showBackground);
    setInterval(createBubble, 500);
  };

  useEffect(() => {
    // console.log(showBackground);
  }, [showBackground]);

  // ------------------ BUBBLES ------------------

  const createBubble = () => {
    const section = document.getElementById("code");
    const createElement = document.createElement("span");
    let size = Math.random() * 120;
    createElement.style.width = 20 + size + "px";
    createElement.style.height = 20 + size + "px";
    createElement.style.left = Math.random() * window.innerWidth + "px";
    section.appendChild(createElement);
    setTimeout(() => {
      createElement.remove();
    }, 6000);
  };

  return (
    <section
      id="code"
      className={
        !showBackground
          ? "section section--code"
          : "section section--code code__background"
      }
      style={{ padding: showBackground && "35em" }}
    >
      <h1 className="section-title">clean code</h1>

      {showBackground && <div className="degrade"></div>}

      <div className="container">
        <div
          className="code__quote-wrapper"
          style={{ display: showBackground ? "none" : "block" }}
          // ref={quoteRef}
        >
          <ul className="code__quote">
            <li className="code__words--odd--inverse">"Clean code</li>
            <li className="code__words--even--inverse">always looks like</li>
            <li className="code__words--odd--inverse">it was written by</li>
            <li className="code__words--even--inverse">someone who</li>
            <li className="code__words--odd--inverse">cares."</li>
          </ul>
          <div className="code__author-wrapper">
            <p className="code__robert code__words--odd--inverse">
              ― Robert C. Martin
            </p>
            <p className="code_author code__words--odd--inverse">
              Author of Clean Code
            </p>
          </div>
        </div>
        <div className="code__icon-wrapper" onClick={handleClick}>
          <img
            className="code__icon"
            src={MagnifyingGlass}
            alt="magnifying glass icon"
          />
          <p
            className="code__icon-cta"
            style={{ display: !showBackground ? "block" : "none" }}
          >
            CLICK HERE TO CHECK MY CODE
          </p>
          <p
            className="code__icon-cta--bright"
            style={{
              display: showBackground ? "block" : "none",
            }}
          >
            CLICK HERE AGAIN TO RETURN
          </p>
        </div>
        {/* <img className="code__bubble" src={Bubble} alt="bubble image" /> */}
        <ul
          className="code__words-wrapper"
          style={{ display: showBackground ? "none" : "block" }}
          // ref={wordsRef}
        >
          <li className="code__words code__words--odd">meticulousness</li>
          <li className="code__words code__words--even">
            easy to read, easy to change
          </li>
          <li className="code__words code__words--odd">keep it simple</li>
          <li className="code__words code__words--even">
            don't repeat your self
          </li>
          <li className="code__words code__words--odd">naming conventions</li>
          <li className="code__words code__words--even">clear and concise</li>
          <li className="code__words code__words--odd">consistent</li>
          <li className="code__words code__words--even">uncomplicate</li>
          <li className="code__words code__words--odd">B.E.M.</li>
        </ul>

        <WhyCard
          titleOne={whyData.code.titleOne}
          textOne={whyData.code.textOne}
          titleTwo={whyData.code.titleTwo}
          textTwo={whyData.code.textTwo}
          titleThree={whyData.code.titleThree}
          textThree={whyData.code.textThree}
          titleFour={whyData.code.titleFour}
          textFour={whyData.code.textFour}
          observation={whyData.code.observation}
          bottom={whyData.code.bottom}
          left={whyData.code.left}
        />
      </div>
      {showBackground && (
        <div className="degrade" style={{ transform: "rotate(180deg)" }}></div>
      )}
    </section>
  );
};

export default CleanCode;

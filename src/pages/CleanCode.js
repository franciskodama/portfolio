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
      <h1
        className="section-title"
        style={{ display: showBackground ? "none" : "block" }}
      >
        clean code
      </h1>

      <div className="container">
        <ul
          className="code__quote"
          style={{ display: showBackground ? "none" : "block" }}
        >
          <li className="code__odd--inverse">"clean code</li>
          <li className="code__even--inverse">always looks like</li>
          <li className="code__odd--inverse">it was written by</li>
          <li className="code__even--inverse">someone who</li>
          <li className="code__odd--inverse">cares."</li>
          <li className="code__even--inverse code--stroke">
            ― Robert C. Martin
          </li>
          <li className="code__odd--inverse code--stroke">
            Author of Clean Code
          </li>
        </ul>

        <div className="code__icon-wrapper" onClick={handleClick}>
          <img
            className="code__icon"
            src={MagnifyingGlass}
            alt="magnifying glass icon"
          />
          <p style={{ display: !showBackground ? "block" : "none" }}>
            CLICK HERE TO CHECK MY CODE
          </p>
          <p
            className="code--bright"
            style={{
              display: showBackground ? "block" : "none",
            }}
          >
            CLICK HERE AGAIN TO RETURN
          </p>
        </div>
        {/* <img className="code__bubble" src={Bubble} alt="bubble image" /> */}
        <ul
          className="code__words"
          style={{ display: showBackground ? "none" : "block" }}
          // ref={wordsRef}
        >
          <li className="code__odd">meticulousness</li>
          <li className="code__even">easy to read, easy to change</li>
          <li className="code__odd">naming conventions</li>
          <li className="code__even">don't repeat your self</li>
          <li className="code__odd">keep it simple</li>
          <li className="code__even">clear and concise</li>
          <li className="code__odd">consistent</li>
          <li className="code__even">uncomplicate</li>
          <li className="code__odd">B.E.M.</li>
          <li className="code__even">D.R.Y.</li>
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
    </section>
  );
};

export default CleanCode;

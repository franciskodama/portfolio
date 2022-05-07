import React, { useEffect, useRef, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import "../styles/CleanCode.css";
import WhyCard from "../components/WhyCard";
import { whyData } from "../data/Data";
import ZoomIn from "../assets/images/code-check.svg";
import ZoomOut from "../assets/images/code-check-return.svg";

const CleanCode = () => {
  const [showBackground, setShowBackground] = useState(false);

  const handleClick = () => {
    setShowBackground(!showBackground);
    setInterval(createBubble, 500);
  };

  useEffect(() => {}, [showBackground]);

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
        !showBackground ? "section code" : "section code code__background"
      }
      style={{ padding: showBackground && "35em" }}
    >
      <Parallax opacity={[0, 1.5]}>
        <h1
          className="section-title"
          style={{ display: showBackground ? "none" : "block" }}
        >
          clean code
        </h1>
      </Parallax>
      <div className="container">
        <Parallax
          scale={[1.8, 0.8]}
          opacity={[0, 1.5]}
          translateX={["-100%", "50%"]}
        >
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
        </Parallax>
        <Parallax opacity={[0, 2]} translateY={["-100%", "50%"]}>
          <div className="code__icon-wrapper" onClick={handleClick}>
            <img
              className="code__icon"
              src={!showBackground ? ZoomIn : ZoomOut}
              alt="icon zoom in or out"
            />
            <p style={{ display: !showBackground ? "block" : "none" }}>
              CHECK MY CODE
            </p>
            <p
              className="code--bright"
              style={{
                display: showBackground ? "block" : "none",
              }}
            >
              RETURN
            </p>
          </div>
        </Parallax>

        <Parallax
          scale={[1.4, 0.8]}
          opacity={[0, 2]}
          translateX={["50%", "-100%"]}
        >
          <ul
            className="code__words"
            style={{ display: showBackground ? "none" : "block" }}
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
        </Parallax>
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

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

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

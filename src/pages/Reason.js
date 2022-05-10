import React, { useEffect, useRef, useState } from "react";
import "../styles/Reason.css";
import WhyCard from "../components/WhyCard";
import { whyData } from "../data/Data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Reason = () => {
  const originalMessageBright =
    "this portfolio has been built to showcase my variety of skills from creativity to code";
  const originalMessageDark =
    ".click on the eye below to know more about each page";
  const arrOfLettersBright = Array.from(originalMessageBright);
  const arrOfLettersDark = Array.from(originalMessageDark);
  let arrOfDiv = [];
  let arrOfDivUser = [];

  const createGrid = () => {
    for (let i = 0; i < arrOfLettersBright.length; i++) {
      arrOfDiv.push(
        <div key={i} className="reason__letter-bright reason__reveal-bright">
          {arrOfLettersBright[i]}
        </div>
      );
    }
    for (let i = 0; i < arrOfLettersDark.length; i++) {
      arrOfDiv.push(
        <div key={i + 100} className="reason__letter-dark reason__reveal-dark">
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

  // ========================== ANIMATION ==========================

  const reasonReveal = () => {
    const revealsBright = document.querySelectorAll(".reason__reveal-bright");
    const revealsDark = document.querySelectorAll(".reason__reveal-dark");
    const elementVisible = 250;
    let windowHeight = window.innerHeight;

    for (var i = 0; i < revealsBright.length; i++) {
      let elementTop = revealsBright[i].getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        revealsBright[i].classList.add("reason__reveal--active");
      } else {
        revealsBright[i].classList.remove("reason__reveal--active");
      }
    }

    for (var i = 0; i < revealsDark.length; i++) {
      let elementTop = revealsDark[i].getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        revealsDark[i].classList.add("reason__reveal--active");
      } else {
        revealsDark[i].classList.remove("reason__reveal--active");
      }
    }
  };

  window.addEventListener("scroll", reasonReveal);
  reasonReveal();

  // -------------- ANIMATION --------------

  const gridRef = useRef();
  // const q = gsap.utils.selector(gridRef);

  // useEffect(() => {
  //   gsap.from(q(".reason__letter-bright"), {
  //     scrollTrigger: {
  //       trigger: q(".reason__letter-bright"),
  //       toggleActions: "restart pause reverse pause",
  //       start: "top bottom",
  //       end: "top 20%",
  //       scrub: true,
  //       pin: true,
  //     },
  //     duration: 1,
  //     x: "1000",
  //     stagger: 0.01,
  //     yoyo: true,
  //   });
  //   gsap.from(q(".reason__letter-dark"), {
  //     scrollTrigger: {
  //       trigger: q(".reason__letter-dark"),
  //       toggleActions: "restart pause reverse pause",
  //       start: "top bottom",
  //       end: "top center",
  //       scrub: true,
  //       pin: true,
  //     },
  //     duration: 1,
  //     x: "-1000",
  //     stagger: 0.01,
  //     yoyo: true,
  //     ease: "power1.inOut",
  //   });
  // }, []);

  return (
    <section className="section reason" id="reason">
      <div className="reason__grid" ref={gridRef}>
        {createGrid()}
      </div>
      <div>{currentArray}</div>

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

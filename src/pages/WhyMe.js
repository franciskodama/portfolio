import React, { useEffect, useRef, useState } from "react";
import "../styles/WhyMe.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyMe = () => {
  const [firstclick, setFirstClick] = useState(false);

  const whyMeRef = useRef();
  const q = gsap.utils.selector(whyMeRef);

  useEffect(() => {
    gsap.from(q(".whyme__letter"), {
      scrollTrigger: {
        trigger: q(".whyme__letter"),
        toggleActions: "restart pause reverse pause",
        start: "top bottom",
        end: "top bottom",
        scrub: true,
      },
      x: "3000px",
      duration: 4,
    });
  });

  // ------------------ PARALLAX ------------------

  const [offsetY, setOffSetY] = useState(0);
  const handleScroll = () => setOffSetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log(offsetY);
    // return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ------------------ END PARALLAX ------------------

  return (
    <section
      className="section section--whyme"
      id="whyme"
      // style={{ transform: `translateY(${offsetY * 0.5}px)` }}
    >
      <div className="container">
        {/* ------------------ PARALLAX ------------------ */}
        <div className="whyme__background">
          <div
            className="whyme__elements"
            style={{ transform: `translateY(${offsetY * 0.7}px)` }}
          ></div>
          <div
            className="whyme__content"
            style={{ transform: `translateY(${offsetY * 0.4}px)` }}
          ></div>

          <ul
            className="whyme__title"
            ref={whyMeRef}
            onClick={() => setFirstClick(true)}
            style={{ transform: `translateY(${offsetY * 0.9}px)` }}
          >
            <li className="whyme__letter">W</li>
            <li className="whyme__letter">H</li>
            <li className="whyme__letter">Y</li>
            <li className="whyme__letter">M</li>
            <li className="whyme__letter">E</li>
            <li className="whyme__letter">?</li>
          </ul>

          {/* <h3 className="whyme__words valuable">valuable for</h3>
        <h3 className="whyme_words valuable-for">you</h3>
        <h3 className="whyme_words valuable-for">the company</h3>
        <h3 className="whyme_words valuable-for">your user</h3>
        <div className="test-wrapper">
          <p className="whyme_words test test-1">T</p>
          <p className="whyme_words test test-2">E</p>
          <p className="whyme_words test test-3">S</p>
          <p className="whyme_words test test-4">T</p>
          <p className="whyme_words test-second test-m">C</p>
          <p className="whyme_words test-second test-o">M</p>
          <p className="whyme_words test-second test-r">E</p>
        </div> */}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;

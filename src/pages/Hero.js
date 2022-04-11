import React, { useEffect, useRef } from "react";
import Video from "../assets/images/hero-bg.mp4";
import "../styles/Hero.css";
import { gsap } from "gsap";

const Hero = () => {
  let refTitle = useRef(null);
  let refParagraph = useRef(null);

  // useEffect(() => {
  //   gsap.to(refTitle.current, 0.8, { opacity: 0, x: 40, ease: Power3.easeOut });
  //   TweenMax.from(refParagraph.current, 0.8, {
  //     opacity: 0,
  //     y: 50,
  //     ease: Power3.easeOut,
  //     delay: 0.2,
  //   });
  // }, []);

  return (
    <section className="section section--hero" id="hero">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "49em",
          left: "50%",
          top: 0,
          objectFit: "cover",
          transform: "translate(-50%, 0)",
          zIndex: "1",
        }}
      >
        <source src={Video} type="video/mp4" />
      </video>

      <div className="hero__filter"></div>

      <div className="container">
        <div className="hero__info">
          <p className="hero__paragraphs" ref={refParagraph}>
            Hi, I'm Francis Kodama.
          </p>
          <div className="hero__typing-effect">
            <h1 className="hero__title" ref={refTitle}>
              Front-end developer{" "}
            </h1>
          </div>
          <h2 className="hero__title hero__title--highlight" ref={refTitle}>
            html, css, js, React,
          </h2>
          <h2 className="hero__title" ref={refTitle}>
            GIT, npm, FIGMA.
          </h2>
          <p className="hero__paragraphs" ref={refParagraph}>
            Based in Ottawa, ON - Canada.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

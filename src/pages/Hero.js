import React, { useEffect, useRef } from "react";
import Video from "../assets/images/hero-bg.mp4";
import "../styles/Hero.css";
import { gsap } from "gsap";

const Hero = () => {
  const infoRef = useRef();
  const q = gsap.utils.selector(infoRef);

  useEffect(() => {
    gsap.from(q(".hero__paragraphs"), {
      y: "100",
      opacity: 0,
      stagger: 0.3,
      ease: "elastic",
      delay: 3,
    });
    gsap.from(q(".hero__title"), {
      delay: 1,
      x: "-120%",
      ease: "elastic",
      delay: 2.5,

      // opacity: 0,
      // stagger: 0.1,
      // yoyo: true,
    });
  }, []);

  return (
    <section className="section section--hero" id="hero">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100vh",
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
        <div className="hero__info" ref={infoRef}>
          <p className="hero__paragraphs">Hi, I'm Francis Kodama.</p>
          <div className="hero__typing-effect">
            <h1 className="hero__title--typing">Front-end developer </h1>
          </div>
          <h2 className="hero__title hero__title--highlight">
            html, css, js, React,
          </h2>
          <h2 className="hero__title">GIT, npm, FIGMA.</h2>
          <p className="hero__paragraphs">Based in Ottawa, ON - Canada.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

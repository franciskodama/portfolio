import React, { useEffect, useRef } from "react";
import "../styles/Hero.css";

import { Link } from "react-scroll";
import Video from "../assets/images/hero-bg.mp4";
import Scroll from "../assets/images/ico-scroll.svg";
// import { gsap } from "gsap";

const Hero = () => {
  // --------------- INFO ANIMATION ---------------

  // const infoRef = useRef();
  // const q = gsap.utils.selector(infoRef);

  // useEffect(() => {
  //   gsap.from(q(".hero__paragraphs"), {
  //     y: "100",
  //     opacity: 0,
  //     stagger: 0.3,
  //     ease: "elastic",
  //     delay: 3,
  //   });
  //   gsap.from(q(".hero__title"), {
  //     delay: 1,
  //     x: -2000,
  //     ease: "elastic",
  //     delay: 2.5,
  //   });
  // }, []);

  // --------------- IMAGES ANIMATION ---------------

  const layersWrapperRef = useRef(null);
  const layerOneRef = useRef(null);
  const layerTwoRef = useRef(null);
  const layerThreeRef = useRef(null);
  const layerFourRef = useRef(null);
  const layerFiveRef = useRef(null);

  const onMoveHandler = (e) => {
    let X = e.pageX;
    let Y = e.pageY;
    // layerOneRef.current.style.transform =
    //   "translate(" + (X / 100) * -7 + "px, " + (Y / 100) * -7 + "px)";
    // layerTwoRef.current.style.transform =
    //   "translate(" + (X / 100) * -3 + "px, " + (Y / 100) * -3 + "px)";
    // layerThreeRef.current.style.transform =
    //   "translate(" + (X / 100) * -1 + "px, " + (Y / 100) * -1 + "px)";
    // layerFourRef.current.style.transform =
    //   "translate(" + (X / 100) * 7 + "px, " + (Y / 100) * 7 + "px)";
    // layerFiveRef.current.style.transform =
    //   "translate(" + (X / 100) * 11 + "px, " + (Y / 100) * 11 + "px)";

    layerTwoRef.current.style.transform =
      "skew(0deg, 30deg) scaleY(1.33333) translate(" +
      (X / 100) * -2 +
      "px, " +
      (Y / 100) * -2 +
      "px)";
    layerThreeRef.current.style.transform =
      "skew(60deg, -30deg) scaleY(.66667) translate(" +
      (X / 100) * -2 +
      "px, " +
      (Y / 100) * -2 +
      "px)";
    layerFourRef.current.style.transform =
      "skew(0deg, -30deg) scaleY(1.33333) translate(" +
      (X / 100) * 2 +
      "px, " +
      (Y / 100) * 2 +
      "px)";
  };

  return (
    <section className="section hero" id="hero">
      {" "}
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
        {" "}
        <source src={Video} type="video/mp4" />{" "}
      </video>{" "}
      <div className="hero__filter"></div>{" "}
      <div className="container" ref={layersWrapperRef}>
        {" "}
        {/* --------------- CUBE --------------- */}
        <div className="cube" onMouseMove={onMoveHandler}>
          {" "}
          <div className="cube__left" ref={layerTwoRef}>
            {" "}
            <h2>hey, I'm</h2>
            <h2>Francis</h2> <h2>Kodama</h2> <h2>Based in</h2> <h2>Ottawa, </h2>{" "}
            <h2>Canada.</h2>{" "}
          </div>{" "}
          <div className="cube__top" ref={layerThreeRef}>
            {" "}
            <h2>Front-end</h2> <h2>developer </h2> <h2>-----------</h2>{" "}
            <h2>product </h2> <h2>strategy </h2>{" "}
          </div>{" "}
          <div className="cube__right" ref={layerFourRef}>
            {" "}
            <h2>react, js, </h2> <h2>html, css, </h2> <h2>sass, git</h2>{" "}
            <h2>npm, figma</h2> <h2>adobe XD, </h2> <h2>PHOTOSHOP</h2>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <Link to="reason" spy={true} smooth={true} offset={-150} duration={2000}>
        {" "}
        <img src={Scroll} className="hero__scroll" />{" "}
      </Link>{" "}
    </section>
  );
};

export default Hero;

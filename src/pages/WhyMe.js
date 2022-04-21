import React, { useEffect, useRef } from "react";
import "../styles/WhyMe.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyMe = () => {
  const whyMeRef = useRef();

  useEffect(() => {
    gsap.to(whyMeRef.current, {
      scrollTrigger: {
        trigger: whyMeRef.current,
        toggleActions: "restart pause reverse pause",
        start: "top",
        end: "bottom",
        markers: true,
        scrub: true,
        pin: true,
      },
      x: 100,
      rotation: 360,
      duration: 3,
    });
  });

  return (
    <section className="section section--whyme" id="whyme">
      <div className="container">
        <h1 className="whyme__title" ref={whyMeRef}>
          WHY ME?
        </h1>
      </div>
    </section>
  );
};

export default WhyMe;

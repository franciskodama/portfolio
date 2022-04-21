import React, { useEffect, useRef } from "react";
import "../styles/Why.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Why = () => {
  const whyRef = useRef();

  useEffect(() => {
    gsap.to(whyRef.current, {
      scrollTrigger: {
        trigger: whyRef.current,
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
    <section className="section section--why" id="why">
      <div className="container">
        <h1 className="why__title" ref={whyRef}>
          WHY ME?
        </h1>
      </div>
    </section>
  );
};

export default Why;

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
      // ease: "elastic",
    });
  });

  return (
    <section className="section section--whyme" id="whyme">
      <div className="container">
        <ul
          className="whyme__title"
          ref={whyMeRef}
          onClick={() => setFirstClick(true)}
        >
          <li className="whyme__letter">W</li>
          <li className="whyme__letter">H</li>
          <li className="whyme__letter">Y</li>
          <li className="whyme__letter">M</li>
          <li className="whyme__letter">E</li>
          <li className="whyme__letter">?</li>
        </ul>
        <h3 className="whyme__words valuable">valuable for</h3>
        <h3 className="whyme_words valuable-for">you</h3>
        <h3 className="whyme_words valuable-for">the company</h3>
        <h3 className="whyme_words valuable-for">your user</h3>
      </div>
    </section>
  );
};

export default WhyMe;
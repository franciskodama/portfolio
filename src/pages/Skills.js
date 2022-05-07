import React from "react";
import "../styles/Skills.css";
import { Parallax } from "react-scroll-parallax";
import { useParallax } from "react-scroll-parallax";
import CloudOne from "../assets/images/skills-cloud-1.svg";
import CloudTwo from "../assets/images/skills-cloud-2.svg";
import Background from "../assets/images/xx-bg-test.jpg";

const Skills = () => {
  // const { cloudOneRef } =
  //   useParallax < HTMLDivElement > { speed: 10, translateX: [-20, 20] };

  return (
    <section className="section skills">
      <div className="container">
        <Parallax speed={-10} translateX={[1000, 100]}>
          <img className="skills__cloud-one" src={CloudOne} />
        </Parallax>
      </div>
    </section>
  );
};

export default Skills;

// import { Parallax } from "react-parallax";

// <Parallax
// bgImage={Background}
// style={{ width: "100%", height: "50em" }}
// strength={1500}
// blur={{ min: 0, max: 10 }}
// renderLayer={(percentage) => (
//   <div
//     className="square"
//     style={{
//       position: "absolute",
//       top: "50%",
//       left: percentage * -100,
//       width: "10em",
//       height: "10em",
//       transform: `scale(${percentage * 5})`,
//     }}
//   >
//     {" "}
//     <img
//       className="skills__cloud-one"
//       src={CloudOne}
//       style={{ transform: `rotate(${percentage * 5}deg)` }}
//     />
//   </div>
// )}
// >
// <img
//   className="skills__cloud-one"
//   strength={-500}
//   src={CloudOne}
//   style={{ transform: "rotateX(180deg)" }}
// />

// <img
//   className="skills__cloud-two"
//   strength={1000}
//   src={CloudTwo}
//   style={{ transform: "translate(15em, 15em)" }}
// />

// <img
//   className="skills__cloud-two"
//   strength={-1000}
//   src={CloudTwo}
//   style={{ transform: "rotateX(180deg)" }}
// />
// </Parallax>

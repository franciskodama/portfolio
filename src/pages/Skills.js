import React from "react";
import "../styles/Skills.css";
import { Parallax } from "react-parallax";
import CloudOne from "../assets/images/skills-cloud-1.svg";
import CloudTwo from "../assets/images/skills-cloud-2.svg";
import Background from "../assets/images/xx-bg-test.jpg";

const Skills = () => {
  return (
    <section className="section skills">
      <div className="container">
        <Parallax
          bgImage={Background}
          style={{ width: "100%", height: "50em" }}
          strength={1500}
          // blur={{ min: 0, max: 10 }}
          renderLayer={(percentage) => (
            <div
              className="square"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "10em",
                height: "10em",
                transform: `scale(${percentage * 5} )`,
              }}
            ></div>
          )}
        >
          {/* <img
            className="skills__cloud-one"
            strength={500}
            src={CloudOne}
            style={{ transform: "translate(-15em, 15em)" }}
          /> */}

          {/* <img
            className="skills__cloud-one"
            strength={-500}
            src={CloudOne}
            style={{ transform: "rotateX(180deg)" }}
          /> */}

          {/* <img
            className="skills__cloud-two"
            strength={1000}
            src={CloudTwo}
            style={{ transform: "translate(15em, 15em)" }}
          />

          <img
            className="skills__cloud-two"
            strength={-1000}
            src={CloudTwo}
            style={{ transform: "rotateX(180deg)" }}
          /> */}
        </Parallax>
      </div>
    </section>
  );
};

export default Skills;

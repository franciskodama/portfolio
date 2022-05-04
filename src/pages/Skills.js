import React from "react";
import "../styles/Skills.css";
import { Parallax } from "react-parallax";
import CloudOne from "../assets/images/skills-cloud-1.svg";
import CloudTwo from "../assets/images/skills-cloud-2.svg";

const Skills = () => {
  return (
    <section className="section section--skills">
      <div className="container">
        <div className="circle"></div>
        <img className="skills__cloud-one" src={CloudOne} />
        <img
          className="skills__cloud-one"
          src={CloudOne}
          // style={{ transform: "rotate(180deg) translateY(5em)" }}
        />
        <img className="skills__cloud-two" src={CloudTwo} />
        <img className="skills__cloud-two position" src={CloudTwo} />
      </div>
    </section>
  );
};

export default Skills;

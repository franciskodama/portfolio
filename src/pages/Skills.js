import React from "react";
import "../styles/Skills.css";
import { Parallax } from "react-scroll-parallax";
import CloudOne from "../assets/images/skills-cloud-1.svg";
import CloudTwo from "../assets/images/skills-cloud-2.svg";
import Background from "../assets/images/xx-bg-test.jpg";

const Skills = () => {
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

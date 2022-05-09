import React from "react";
import "../styles/Projects.css";
import Card from "../components/Card";
import WhyCard from "../components/WhyCard";
import { projects, whyData } from "../data/Data";
import { Parallax } from "react-scroll-parallax";

const Projects = () => {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <Parallax opacity={[0, 3]}>
          <h2 className="section-title projects__title">selected projects</h2>
        </Parallax>

        <div className="projects__wrapper">
          {projects.map((project) => (
            // <Parallax opacity={[0, 3]} speed={0} scale={[1.1, 0.9]}>
            <Card key={project.id} project={project} />
            // </Parallax>
          ))}
        </div>
        <WhyCard
          titleOne={whyData.selectedProjects.titleOne}
          textOne={whyData.selectedProjects.textOne}
          titleTwo={whyData.selectedProjects.titleTwo}
          textTwo={whyData.selectedProjects.textTwo}
          titleThree={whyData.selectedProjects.titleThree}
          textThree={whyData.selectedProjects.textThree}
          titleFour={whyData.selectedProjects.titleFour}
          textFour={whyData.selectedProjects.textFour}
          observation={whyData.selectedProjects.observation}
          bottom={whyData.selectedProjects.bottom}
          left={whyData.selectedProjects.left}
        />
      </div>
    </section>
  );
};

export default Projects;

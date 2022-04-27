import React from "react";
import "../styles/Projects.css";
import Card from "../components/Card";
import WhyCard from "../components/WhyCard";
import { projects, whyData } from "../data/Data";

const Projects = () => {
  return (
    <section className="section section--projects" id="projects">
      <div className="container">
        <h2 className="section-title section-title--projects">
          selected projects
        </h2>
        <div className="projects">
          {projects.map((project) => (
            <Card key={project.id} project={project} />
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

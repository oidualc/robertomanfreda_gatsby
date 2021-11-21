import React from "react";
import ProjectsData from "../../content/projects.json";
import Section from "./Section";
import ServiceBox from "./ServiceBox";

const ProjectsSection = () => (
  <Section
    id="projects"
    title="RESOURCES"
    subTitle="SOME OF MY OPEN SOURCE PROJECTS"
  >
    <div className="flex flex-wrap justify-center">
      {ProjectsData.map((project, index) => (
        <div className="p-4 w-auto sm:w-1/2 lg:w-1/3" key={index}>
          <ServiceBox
            title={project.title}
            text={project.text}
            btn={{ text: "VIEW IN GITHUB", link: project.link }}
          />
        </div>
      ))}
    </div>
  </Section>
);

export default ProjectsSection;

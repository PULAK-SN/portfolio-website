import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
const Projects = () => {
  return (
    <section className="scroll-mt-28 mb-28" id="projects">
      <SectionHeading>my projects</SectionHeading>
      {projectsData.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
};

export default Projects;

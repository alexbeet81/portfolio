import { useContext } from "react";

import DarkLightContext from "../store/dark-light-context";
import ProjectItem from "./ProjectItem";
import classes from "./Projects.module.css";

const Projects = () => {
  const darkLightCtx = useContext(DarkLightContext);

  const isDarkMode = darkLightCtx.isDarkMode;

  const projectSectionClasses = isDarkMode
    ? classes.projectsSectionDarkMode
    : classes.projectSectionLightMode;
    
  return (
    <section className={`${classes.projectsSection} ${projectSectionClasses}`}>
      <h1>A Few Projects I've Built</h1>
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </section>
  );
};

export default Projects;

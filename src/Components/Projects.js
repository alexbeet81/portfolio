import { useContext } from "react";

import DarkLightContext from "../store/dark-light-context";
import ProjectItem from "./ProjectItem";
import classes from "./Projects.module.css";

const PROJECTS = [
  {
    id: "p1",
    title: "Beet Blog",
    image:
      "https://images.unsplash.com/photo-1643960987290-37971bf5f2bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor made using React, Node.js and Djungo",
    tech: "React and Firebase",
    projectLink: "#",
    gitRepo: "https://github.com/alexbeet81",
  },
  {
    id: "p2",
    title: "Free Me",
    image:
      "https://images.unsplash.com/photo-1643960987290-37971bf5f2bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor made using React, Node.js and Djungo",
    tech: "Ruby, Ruby on Rails and Heroku",
    projectLink: "#",
    gitRepo: "https://github.com/alexbeet81",
  },
  {
    id: "p3",
    title: "Classicar",
    image:
      "https://images.unsplash.com/photo-1643960987290-37971bf5f2bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor made using React, Node.js and Djungo",
    tech: "Ruby, Ruby on Rails and Heroku",
    projectLink: "#",
    gitRepo: "https://github.com/alexbeet81",
  },
  {
    id: "p4",
    title: "Check It Off",
    image:
      "https://images.unsplash.com/photo-1643960987290-37971bf5f2bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor made using React, Node.js and Djungo",
    tech: "Ruby, Ruby on Rails and Heroku",
    projectLink: "#",
    gitRepo: "https://github.com/alexbeet81",
  },
];

const Projects = () => {
  const darkLightCtx = useContext(DarkLightContext);

  const isDarkMode = darkLightCtx.isDarkMode;

  const projectSectionClasses = isDarkMode
    ? classes.projectsSectionDarkMode
    : classes.projectSectionLightMode;

  const projectList = PROJECTS.map(project => {
    return(
      <ProjectItem 
        id={project.id}
        title={project.title}
        image={project.image}
        description={project.description}
        tech={project.tech}
        projectLink={project.projectLink}
        gitReop={project.gitRepo}
      />
    )
  })

  return (
    <section className={`${classes.projectsSection} ${projectSectionClasses}`}>
      <h1>A Few Projects I've Built</h1>
      {projectList}
    </section>
  );
};

export default Projects;

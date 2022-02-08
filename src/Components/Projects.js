import { useContext } from "react";

import BeetBlogImage from "../images/beetblog.png";
import Classicar from "../images/classicar.png";
import CheckItOff from "../images/checkitoff.png";
import Freeme from "../images/freeme.png";
import DarkLightContext from "../store/dark-light-context";
import ProjectItem from "./ProjectItem";
import classes from "./Projects.module.css";

const PROJECTS = [
  {
    id: "p1",
    title: "Free Me",
    image: Freeme,
    description:
      "The final project from my 24-week part-time boot camp at Le Wagon. The idea behind the project was to make a portfolio creation app targeted at software developers. Users can quickly and easily set up a portfolio of their work to send to potential clients or employers. I was in charge of the back-end and managing the git-hub repo. I also helped in the creation of the front end.",
    tech: "Ruby, Ruby on Rails and Heroku",
    projectLink: "https://freemedom.herokuapp.com/",
    gitRepo: "https://github.com/alexbeet81/freeme",
  },
  {
    id: "p2",
    title: "Beet Blog",
    image: BeetBlogImage,
    description:
      "After sinking many hours into tutorials on React, I decided to put to use what I had learned and created a simple blog post site. My aims were to build a simple multi-page SPA with React Router; have persistent login; create forms with validation feedback and use a custom hook for api-calls.",
    tech: "React and Firebase",
    projectLink: "https://beet-blog.web.app/",
    gitRepo: "https://github.com/alexbeet81/beet-blog",
  },
  {
    id: "p3",
    title: "Classicar",
    image: Classicar,
    description:
      "My first ever fully-functioning website. Built during my LeWagon bootcamp in a team of four, the brief was to build an AriBnb clone. My role in the team was backend lead and GitHub. Users are able to browse, hire or rent out classic cars in major cities around China. This site took two weeks to build.",
    tech: "Ruby, Ruby on Rails and Heroku",
    projectLink: "https://classicar-alexbeet81.herokuapp.com/",
    gitRepo: "https://github.com/alexbeet81/classicar",
  },
  {
    id: "p4",
    title: "Check It Off",
    image: CheckItOff,
    description:
      "A mobile only web app designed with a fellow Bootcamper directly after the end of the bootcamp. With the aim of keeping what we had learned fresh in our minds. We decided to make a simple shopping list app where users add, remove items on a list or set those items as bought. We took care to retrace each step taught during the bootcamp, from creating user stories, designing the Figma, using devise for login sessions to deploying on Heroku.",
    tech: "Ruby, Ruby on Rails and Heroku",
    projectLink: "https://checkitoff-shop.herokuapp.com/",
    gitRepo: "https://github.com/alexbeet81/check_it_off",
  },
];

const Projects = () => {
  const darkLightCtx = useContext(DarkLightContext);

  const isDarkMode = darkLightCtx.isDarkMode;

  const projectSectionClasses = isDarkMode
    ? classes.projectsSectionDarkMode
    : classes.projectSectionLightMode;

  const projectList = PROJECTS.map((project) => {
    return (
      <ProjectItem
        key={project.id}
        id={project.id}
        title={project.title}
        image={project.image}
        description={project.description}
        tech={project.tech}
        projectLink={project.projectLink}
        gitReop={project.gitRepo}
      />
    );
  });

  return (
    <section className={`${classes.projectsSection} ${projectSectionClasses}`}>
      <h1>A Few Projects I've Built</h1>
      {projectList}
    </section>
  );
};

export default Projects;

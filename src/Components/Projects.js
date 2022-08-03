import React, { useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import BeetBlogImage from "../images/beetblog.png";
import Classicar from "../images/classicar.png";
import CheckItOff from "../images/checkitoff.png";
import Freeme from "../images/freeme.png";
import GreenGymm from "../images/greengym.png";
import CatList from "../images/cat-list.png";
import DarkLightContext from "../store/dark-light-context";
import ProjectItem from "./ProjectItem";
import OtherProjectItem from "./OtherProjectItem";
import classes from "./Projects.module.css";

const PROJECTS = [
  {
    id: "p5",
    title: "Green Gym",
    image: GreenGymm,
    description:
      "My first professional gig! Build by a team of three, I was responsible for creating a working prototype using Figma. • Made using React and React Query, with app wide state using Context API, and multi language selection using the i18Next frame-work.",
    tech: "React, React Query and Ruby on Rails",
    projectLink: "https://greengym.com.cn/",
    gitRepo: "https://github.com/jrig95/green-gym-frontend",
  },
  {
    id: "p1",
    title: "Free Me",
    image: Freeme,
    description:
      "The final project from my 24-week part-time boot camp at Le Wagon. The idea behind the project was to make a portfolio creation app targeted at software developers. Users can quickly and easily set up a portfolio of their work to send to potential clients or employers. I was in charge of the back-end and managing the git-hub repo. I also helped in the creation of the front end. To explore the site, use username: alex@alex.com password: 123456",
    tech: "Ruby, Ruby on Rails and Heroku",
    projectLink: "https://freemedom.herokuapp.com/",
    gitRepo: "https://github.com/alexbeet81/freeme",
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

const OTHER_PROJECTS = [
  {
    id: "op1",
    title: "Beet Blog",
    image: BeetBlogImage,
    description:
      "A simple blog post site. My aims were to build a simple multi-page SPA with React Router; have persistent login; create forms with validation feedback and use a custom hook for api-calls.",
    projectLink: "https://beet-blog.web.app/",
    gitRepo: "https://github.com/alexbeet81/beet-blog",
  },
  {
    id: "op2",
    title: "Cat List",
    image: CatList,
    description:
      "Created using the Cat API. A quick front end task. Created with React and React Query",
    projectLink: "https://cat-list-77efe.web.app/",
    gitRepo: "https://github.com/alexbeet81/cat-list",
  },
];

const Projects = () => {
  AOS.init();

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

  const otherProjectList = OTHER_PROJECTS.map((otherProject) => {
    return (
      <OtherProjectItem
        key={otherProject.id}
        id={otherProject.id}
        title={otherProject.title}
        image={otherProject.image}
        description={otherProject.description}
        projectLink={otherProject.projectLink}
        gitReop={otherProject.gitRepo}
      />
    );
  });

  return (
    <section
      id="work"
      name="work"
      className={`${classes.projectsSection} ${projectSectionClasses}`}
    >
      <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        A Few Projects I've Built
      </h1>
      {projectList}
      <div className={classes.otherProjects}>{otherProjectList}</div>
    </section>
  );
};

export default Projects;

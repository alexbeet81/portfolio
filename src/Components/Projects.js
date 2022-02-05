import ProjectItem from "./ProjectItem";
import classes from './Projects.module.css';

const Projects = () => {
  return(
    <section className={classes.projectsSection}>
      <h1>A Few Projects I've Built</h1>
      <ProjectItem/>
      <ProjectItem/>
      <ProjectItem/>
      <ProjectItem/>
    </section>
  )
};

export default Projects;
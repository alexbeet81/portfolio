import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { useContext } from "react";

import classes from "./ProjectItem.module.css";
import DarkLightContext from "../store/dark-light-context";

const ProjectItem = (props) => {
  const darkLightCtx = useContext(DarkLightContext);

  const isDarkMode = darkLightCtx.isDarkMode;

  const projectClasses = isDarkMode
    ? classes.projectContainerDarkMode
    : classes.projectContainerLightMode;

  const techUsedClasses = isDarkMode
    ? classes.techUsedDark
    : classes.techUsedLight;
  
  return (
    <div className={`${classes.projectContainer} ${projectClasses}`}>
      <div className={classes.image}>
        <img
          src="https://images.unsplash.com/photo-1643960987290-37971bf5f2bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          alt="image of webpage"
        />
      </div>
      <div className={classes.projectContent}>
        <div className={classes.titleAndIcons}>
          <h2>Project Title</h2>
          <div className={classes.icons}>
            <a href="https://github.com/alexbeet81" target="_blank">
              <BiLinkExternal />
            </a>
            <a href="https://github.com/alexbeet81" target="_blank">
              <AiFillGithub />
            </a>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor made using React,
          Node.js and Djungo
        </p>
        <div className={classes.projectContentFooter}>
          <p>
            Made using <a className={techUsedClasses}>React and Firebase</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

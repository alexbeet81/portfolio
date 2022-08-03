import AOS from "aos";
import { useContext } from "react";

import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import classes from "./OtherProjectItem.module.css";
import DarkLightContext from "../store/dark-light-context";

// Copy style from project item and reshape to fit new component
// Add two projects to this senction - Cat API and Beet Blog
// Add Title for this section on the projects page.
// Enjoy making a project. This is what it has all been for.

const OtherProjectItem = (props) => {
  AOS.init();

  const darkLightCtx = useContext(DarkLightContext);

  const isDarkMode = darkLightCtx.isDarkMode;

  const projectClasses = isDarkMode
    ? classes.projectContainerDarkMode
    : classes.projectContainerLightMode;

  const techUsedClasses = isDarkMode
    ? classes.techUsedDark
    : classes.techUsedLight;

  return (
    <div data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
      <div className={`${classes.projectContainer} ${projectClasses}`}>
        <div className={classes.image}>
          <a
            // href={`${props.projectLink}`}
            href="/"
            target="blank"
            rel="noopener noreferrer"
          >
            <img
              src={
                "https://images.unsplash.com/photo-1659412321527-8cddf2458faa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              }
              alt={`Screenshot of ${props.title}`}
            />
          </a>
        </div>
        <div className={classes.projectContent}>
          <div className={classes.titleAndIcons}>
            <h2>Title</h2>
            <div className={classes.icons}>
              <a
                // href={props.projectLink}
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLinkExternal />
              </a>
              <a
                // href={props.gitRepo}
                href="/"
                targe="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </div>
          </div>
          <p>Description</p>
          <div className={classes.projectContentFooter}>
            <p>Made using....</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherProjectItem;

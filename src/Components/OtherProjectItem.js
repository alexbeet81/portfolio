import AOS from "aos";
import { useContext } from "react";

import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import classes from "./OtherProjectItem.module.css";
import DarkLightContext from "../store/dark-light-context";

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
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
      <div className={`${classes.projectContainer} ${projectClasses}`}>
        <div className={classes.image}>
          <a
            href={`${props.projectLink}`}
            target="blank"
            rel="noopener noreferrer"
          >
            <img
              src={props.image}
              alt={`Screenshot of ${props.title}`}
            />
          </a>
        </div>
        <div className={classes.projectContent}>
          <div className={classes.titleAndIcons}>
            <h2>{props.title}</h2>
            <div className={classes.icons}>
              <a
                href={props.projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLinkExternal />
              </a>
              <a
                href={props.gitRepo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </div>
          </div>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default OtherProjectItem;

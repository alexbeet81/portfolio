import React, { useContext } from "react";

import profilePhoto from '../images/profile-photo.png';
import DarkLightContext from "../store/dark-light-context";
import classes from "./About.module.css";

const About = () => {
  const darkLightCtx = useContext(DarkLightContext);

  const isDarkMode = darkLightCtx.isDarkMode;

  const aboutSectionClasses = isDarkMode
    ? classes.aboutSectionDarkMode
    : classes.aboutSectionLightMode;

  return (
    <section className={`${classes.aboutSection} ${aboutSectionClasses}`}>
      <div id="work" className={classes.image}>
        <img src={profilePhoto} alt="profile photo"/>
      </div>
      <div>
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation
        </p>
      </div>
    </section>
  );
};

export default About;

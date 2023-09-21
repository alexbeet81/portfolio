import React, { useContext } from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiRubyonrails, SiRuby, SiCss3 } from "react-icons/si";
import { getItemWithExpiry } from "../utils/localStorageHelper"
import AOS from "aos";
import "aos/dist/aos.css";

import DarkLightContext from "../store/dark-light-context";
import classes from "./Learning.module.css";

const Learning = () => {
  AOS.init();

  const hasVisited = getItemWithExpiry('hasVisited');
  const darkLightCtx = useContext(DarkLightContext);

  const isDarkMode = darkLightCtx.isDarkMode;

  const learningSectionClasses = isDarkMode
    ? classes.learningDarkMode
    : classes.learningLightMode;

  return (
    <div {...(hasVisited ? {} : { "data-aos": "fade-down", "data-aos-duration": "1000", "data-aos-once": "true" })}>
      <section
        className={`${classes.learningSection} ${learningSectionClasses}`}
      >
        <h1>What I've Been Learning</h1>
        <div className={classes.iconGrid}>
          <div className={classes.iconItem}>
            <div className={classes.icon}>
              <SiRubyonrails />
            </div>
            <h2>Ruby On Rails</h2>
          </div>
          <div className={classes.iconItem}>
            <div className={classes.icon}>
              <SiRuby />
            </div>
            <h2>Ruby</h2>
          </div>
          <div className={classes.iconItem}>
            <div className={classes.icon}>
              <SiJavascript />
            </div>
            <h2>JavaScript (ES6)</h2>
          </div>
          <div className={classes.iconItem}>
            <div className={classes.icon}>
              <FaReact />
            </div>
            <h2>React</h2>
          </div>
          <div className={classes.iconItem}>
            <div className={classes.icon}>
              <FaNodeJs />
            </div>
            <h2>Node.js</h2>
          </div>
          <div className={classes.iconItem}>
            <div className={classes.icon}>
              <SiCss3 />
            </div>
            <h2>CSS</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Learning;

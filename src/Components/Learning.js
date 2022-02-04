import { useContext } from "react";
import { FaReact } from "react-icons/fa";

import DarkLightContext from "../store/dark-light-context";
import classes from "./Learning.module.css";

const Learning = () => {
  const darkLightCtx = useContext(DarkLightContext);

  const isDarkMode = darkLightCtx.isDarkMode;

  const learningSectionClasses = isDarkMode
    ? classes.learningDarkMode
    : classes.learningLightMode;

  return (
    <section className={`${classes.learningSection} ${learningSectionClasses}`}>
      <h1>What I've Been Learning</h1>
      <div className={classes.iconGrid}>
        <div className={classes.iconItem}>
          <div className={classes.icon}>
            <FaReact />
          </div>
          <h2>React</h2>
        </div>
        <div className={classes.iconItem}>
          <div className={classes.icon}>
            <FaReact />
          </div>
          <h2>React</h2>
        </div>
        <div className={classes.iconItem}>
          <div className={classes.icon}>
            <FaReact />
          </div>
          <h2>React</h2>
        </div>
        <div className={classes.iconItem}>
          <div className={classes.icon}>
            <FaReact />
          </div>
          <h2>React</h2>
        </div>
        <div className={classes.iconItem}>
          <div className={classes.icon}>
            <FaReact />
          </div>
          <h2>React</h2>
        </div>
        <div className={classes.iconItem}>
          <div className={classes.icon}>
            <FaReact />
          </div>
          <h2>React</h2>
        </div>
      </div>
    </section>
  );
};

export default Learning;

import { useContext } from "react";

import classes from "./Hero.module.css";
import heroDark from "../images/hero-dark.png";
import heroLight from "../images/hero-light.png";
import DarkLightContext from "../store/dark-light-context";

const Hero = () => {
  const darkLightCtx = useContext(DarkLightContext);
  const isDarkMode = darkLightCtx.isDarkMode;

  const heroImg = isDarkMode ? heroDark : heroLight;
  const heroSectionClasses = isDarkMode
    ? classes.heroSectionDarkMode
    : classes.heroSectionLightMode;

  return (
    <section
      id="home"
      className={`${classes.heroSection} ${heroSectionClasses}`}
    >
      <div>
        <h1>Hello, I'm</h1>
        <h2>Alex Pritchard</h2>
        <h3>A Full-Stack Developer In Training</h3>
        <p>
          My current development job is to learn as much as possible and improve
          my skills. I am just beginning my journey as a full-stack developer. I
          am interested in all aspects of the process, from Figma design to
          working on the back-end.
        </p>
        <p>
          I recently completed a 24-Week remote full stack bootcamp with{" "}
          <a href="https://www.lewagon.com" target="_blank">
            {" "}
            LeWagon
          </a>
        </p>
      </div>
      <div className={classes.image}>
        <img src={heroImg} alt="hero-image"></img>
      </div>
    </section>
  );
};

export default Hero;

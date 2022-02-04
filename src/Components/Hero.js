import { useContext } from "react";

import classes from "./Hero.module.css";
import heroDark from '../images/hero-dark.png';
import heroLight from '../images/hero-light.png';
import DarkLightContext from "../store/dark-light-context";

const Hero = () => {
  const darkLightCtx = useContext(DarkLightContext)
  const isDarkMode = darkLightCtx.isDarkMode;

  const heroImg = isDarkMode ? heroDark : heroLight;
  const heroSectionClasses = isDarkMode ? classes.heroSectionDarkMode : classes.heroSectionLightMode;

  return (
    <section className={`${classes.heroSection} ${heroSectionClasses}`}>
      <div>
        <h1>Hello, I'm</h1>
        <h2>Alex Pritchard</h2>
        <h3>A Full-Stack Developer In Training</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          <a href="#"> exercitation</a>
        </p>
      </div>
      <div className={classes.image}>
        <img src={heroImg} alt="hero-image"></img>
      </div>
    </section>
  );
};

export default Hero;

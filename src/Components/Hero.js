import React, { useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import classes from "./Hero.module.css";
import heroDark from "../images/hero-dark.png";
import heroLight from "../images/hero-light.png";
import { getItemWithExpiry } from "../utils/localStorageHelper"
import DarkLightContext from "../store/dark-light-context";

const Hero = () => {
  AOS.init();

  const hasVisited = getItemWithExpiry('hasVisited');
  const darkLightCtx = useContext(DarkLightContext);
  const isDarkMode = darkLightCtx.isDarkMode;

  const heroImg = isDarkMode ? heroDark : heroLight;
  const heroSectionClasses = isDarkMode
    ? classes.heroSectionDarkMode
    : classes.heroSectionLightMode;

  const aosAttributes = (delay) => (hasVisited ? {} : {"data-aos":"fade-up", "data-aos-duration":"1000", "data-aos-delay": `${delay}`, "data-aos-once":"true"});

  return (
    <section
      id="home"
      className={`${classes.heroSection} ${heroSectionClasses}`}
    >
      <div>
        <h1 {...aosAttributes('0')} >
          Hello, I'm
        </h1>
        <h2 {...aosAttributes('50')}>
          Alex Pritchard
        </h2>
        <h3 {...aosAttributes('100')}>
          A Full-Stack Developer
        </h3>
        <p {...aosAttributes('200')}>
          Experienced junior full-stack developer specializing in Ruby on Rails. 
          Committed to continuous learning and skill enhancement. 
          Passionate about all aspects of the development process, from design to back-end work. 
          Excited to collaborate on innovative projects.{" "}
          <a 
            href="mailto:alexbeet1234@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Let's connect!
          </a>
        </p>
      </div>
      <div
        className={classes.image}
        {...aosAttributes('400')}
      >
        <img src={heroImg} alt="hero"></img>
      </div>
    </section>
  );
};

export default Hero;

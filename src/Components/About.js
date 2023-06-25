import React, { useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import profilePhoto from "../images/profile-photo.png";
import DarkLightContext from "../store/dark-light-context";
import classes from "./About.module.css";

const About = () => {
  AOS.init({
    once: true,
  });

  const darkLightCtx = useContext(DarkLightContext);

  const isDarkMode = darkLightCtx.isDarkMode;

  const aboutSectionClasses = isDarkMode
    ? classes.aboutSectionDarkMode
    : classes.aboutSectionLightMode;

  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <section
        id="about"
        className={`${classes.aboutSection} ${aboutSectionClasses}`}
      >
        <div className={classes.image}>
          <img src={profilePhoto} alt="My big old beautiful face" />
        </div>
        <div>
          <h1>About Me</h1>
          <p>
            Over the past year, I've gained valuable professional experience in the field of web development.
          </p>
          <p>
            Since graduating from a full-stack bootcamp, I've been working in a fast-paced startup, constantly learning new. Every day presents new challenges that push me. The more I learn, the deeper my passion for development grows.
          </p>
          <p>
            I had the incredible opportunity to contribute as a teaching assistant for LeWagon Shanghai, not only enabling me to pick up new skills, but also to share my interest in code with others.
          </p>
          <p>
          I am eagerly seeking new opportunities to apply my skills and contribute to exciting projects. If you would like to connect or discuss potential collaborations, please don't hesitate to{" "}
            <a
              href="mailto:alexbeet1234@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              reach out.
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;

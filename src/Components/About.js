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
            Since graduating from a full-stack bootcamp, I've been thriving in a fast-paced startup environment, constantly expanding my knowledge and skill set. Every day presents new challenges that push me to my limits, and I embrace them wholeheartedly. With each coding task, I discover a deeper passion for the craft, and my enthusiasm only continues to grow.
          </p>
          <p>
            I had the incredible opportunity to contribute as a teaching assistant for LeWagon Shanghai, where I further honed my expertise and shared my passion for web development.
          </p>
          <p>
            Based on my newfound knowledge and experience, I am eagerly seeking new opportunities to apply my skills and contribute to exciting projects. If you would like to connect or discuss potential collaborations, please don't hesitate to{" "}
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

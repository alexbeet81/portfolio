import React, { useContext } from "react";

import profilePhoto from "../images/profile-photo.png";
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
        <img src={profilePhoto} alt="My big old beautiful face" />
      </div>
      <div>
        <h1>About Me</h1>
        <p>
          I printed my first “hello, world” over two years ago and have been
          busy learning ever since.
        </p>
        <p>
          Since completing a full-stack Bootcamp in July of last year, I have
          been trying to cram as much information in my head as I can. Mainly
          Udemy courses with a focus on React and Node.js. I am now trying to
          put all this new information to good use. This portfolio is a product
          of that; I built it with React and am hosting it on firebase.
        </p>
        <p>
          I was also honored to be a teaching assistant for LeWagon Shanghai.
        </p>
        <p>
          I am based in Beijing but will move home to the UK this July, where I
          shall be eagerly looking for opportunities. Please,{" "}
          <a href="mailto:alexbeet1234@gmail.com" target="_blank" rel="noopener noreferrer">
            {" "}
            get in touch
          </a>{" "}
          if you would like to chat.
        </p>
      </div>
    </section>
  );
};

export default About;

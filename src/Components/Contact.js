import React, { useContext } from "react";
import AOS from "aos";

import classes from "./Contact.module.css";
import DarkLightContext from "../store/dark-light-context";

const Contact = () => {
  AOS.init();

  const darkLightCtx = useContext(DarkLightContext);

  const isDarkMode = darkLightCtx.isDarkMode;

  const contactClasses = isDarkMode
    ? classes.contactSectionDarkMode
    : classes.contactSectionLightMode;

  const buttonClasses = isDarkMode ? classes.buttonDark : classes.buttonLight;

  return (
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
      <section
        id="contact"
        className={`${classes.contactSection} ${contactClasses}`}
      >
        <h1>Get In Contact</h1>
        <p>
          I am currently on the lookout for new opportunities. I am interested
          in both freelance and full-time positions. If you are looking to add
          someone to your team, someone to help build your next web app, or if
          you are just interested in working on a hobby project with me, please
          get in touch.
        </p>
        <a href="mailto:alexbeet1234@gmail.com">
          <button
            type="button"
            className={`${classes.button} ${buttonClasses}`}
          >
            message me
          </button>
        </a>
      </section>
    </div>
  );
};

export default Contact;

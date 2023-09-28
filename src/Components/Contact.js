import React, { useContext } from "react";
import AOS from "aos";

import classes from "./Contact.module.css";
import DarkLightContext from "../store/dark-light-context";
import { getItemWithExpiry } from "../utils/localStorageHelper";
import Button from "./UI/Button";

const Contact = () => {
  AOS.init();

  const darkLightCtx = useContext(DarkLightContext);
  const hasVisited = getItemWithExpiry("hasVisited");
  const isDarkMode = darkLightCtx.isDarkMode;

  const contactClasses = isDarkMode
    ? classes.contactSectionDarkMode
    : classes.contactSectionLightMode;

  return (
    <div
      {...(hasVisited
        ? {}
        : {
            "data-aos": "fade-up",
            "data-aos-duration": "1000",
            "data-aos-once": "true",
          })}
    >
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
        <p>Mobile: 07405 656326</p>
        <Button href="mailto:alexbeet@icloud.com">message me</Button>
      </section>
    </div>
  );
};

export default Contact;

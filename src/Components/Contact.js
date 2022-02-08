import { useContext } from "react";

import classes from "./Contact.module.css";
import DarkLightContext from "../store/dark-light-context";

const Contact = () => {
  const darkLightCtx = useContext(DarkLightContext);

  const isDarkMode = darkLightCtx.isDarkMode;

  const contactClasses = isDarkMode
    ? classes.contactSectionDarkMode
    : classes.contactSectionLightMode;

  const buttonClasses = isDarkMode ? classes.buttonDark : classes.buttonLight;

  return (
    <section
      id="contact"
      className={`${classes.contactSection} ${contactClasses}`}
    >
      <h1>Get In Contact</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation
      </p>
      <a href="mailto:alexbeet1234@gmail.com">
        <button type="button" className={`${classes.button} ${buttonClasses}`}>
          message me
        </button>
      </a>
    </section>
  );
};

export default Contact;

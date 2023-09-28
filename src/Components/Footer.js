import React, { useContext } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

import DarkLightContext from "../store/dark-light-context";
import classes from "./Footer.module.css";

const Footer = () => {
  const darkLightCtx = useContext(DarkLightContext);
  const isDarkMode = darkLightCtx.isDarkMode;

  const footerClasses = isDarkMode
    ? classes.footerDarkMode
    : classes.footerLightMode;
  const iconClasses = isDarkMode
    ? classes.darkModeIcons
    : classes.lightModeIcons;

  return (
    <section className={`${classes.footerSection} ${footerClasses}`}>
      <div className={`${classes.icons} ${iconClasses}`}>
        <a
          href="https://github.com/alexbeet81"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/alexpritchard1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://twitter.com/AlexBeet4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillTwitterCircle />
        </a>
      </div>
      <a
        href="mailto:alexbeet@icloud.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h1>alexbeet@icloud.com</h1>
      </a>
      <a
        href="https://github.com/alexbeet81/portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>Made by Alex Pritchard</h2>
      </a>
    </section>
  );
};

export default Footer;

import { useContext } from "react";
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
        <a href="https://github.com/alexbeet81" target="_blank">
          <AiFillGithub />
        </a>
        <a href="#">
          <AiFillLinkedin />
        </a>
        <a href="#">
          <AiFillTwitterCircle />
        </a>
      </div>
      <a href="mailto:alexbeet1234@gmail.com">
        <h1>alexbeet1234@gmail.com</h1>
      </a>
      <a href="#">
        <h2>Made by Alex Pritchard</h2>
      </a>
    </section>
  );
};

export default Footer;

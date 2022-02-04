import { useContext } from "react";
import { AiFillGithub } from "react-icons/ai";

import DarkLightContext from "../store/dark-light-context";
import classes from "./Footer.module.css";

const Footer = () => {
  const darkLightCtx = useContext(DarkLightContext);
  const isDarkMode = darkLightCtx.isDarkMode;

  const footerClasses = isDarkMode ? classes.footerDarkMode : classes.footerLightMode;

  return (
    <section className={`${classes.footerSection} ${footerClasses}`}>
      <div className={classes.icons}>
        <AiFillGithub />
      </div>
      <h1>alexbeet1234@gmail.com</h1>
      <h2>Made by Alex Pritchard</h2>
    </section>
  );
};

export default Footer;

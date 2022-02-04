import { useContext } from "react";
import { Fragment } from "react/cjs/react.production.min";
import { MdDarkMode } from "react-icons/md";

import DarkLightContext from "../../store/dark-light-context";
import classes from "./NavBar.module.css";

const NavBar = () => {
  const darkLightCtx = useContext(DarkLightContext);

  const isDarkMode = darkLightCtx.isDarkMode;

  const darkLightIconHandler = (event) => {
    event.preventDefault();

    darkLightCtx.toggleDarkLight();
  }

  const navBarDarkLightClasses = isDarkMode ? classes.navbarDark : classes.navbarLight

  return (
    <Fragment>
      <div onClick={darkLightIconHandler} className={classes.darkLightModeIcon}>
          <MdDarkMode />
      </div>
      <div className={`${classes.navbar} ${navBarDarkLightClasses}`}>
        <a href="#home">Home</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
        <a href="#resume">Resume</a>
      </div>
    </Fragment>
  );
};

export default NavBar;

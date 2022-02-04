import { useContext } from "react";
import { Fragment } from "react/cjs/react.production.min";
import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";

import DarkLightContext from "../../store/dark-light-context";
import classes from "./NavBar.module.css";

const NavBar = () => {
  const darkLightCtx = useContext(DarkLightContext);

  const isDarkMode = darkLightCtx.isDarkMode;

  const darkLightIconHandler = (event) => {
    event.preventDefault();

    darkLightCtx.toggleDarkLight();
  };

  const navBarDarkLightClasses = isDarkMode
    ? classes.navbarDark
    : classes.navbarLight;
  const iconDarkLightClasses = isDarkMode
    ? classes.iconDarkMode
    : classes.iconLightMode;

  const darkModeToggleIcon = isDarkMode ?  <BsSunFill /> : <MdDarkMode />

  return (
    <Fragment>
      <div
        onClick={darkLightIconHandler}
        className={`${classes.darkLightModeIcon} ${iconDarkLightClasses}`}
      >
        {darkModeToggleIcon}
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

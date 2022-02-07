import React, { useContext } from "react";
import { Fragment } from "react/cjs/react.production.min";
import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import { Link } from "react-scroll";

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

  const darkModeToggleIcon = isDarkMode ? <BsSunFill /> : <MdDarkMode />;

  return (
    <Fragment>
      <div className={`${classes.navbar} ${navBarDarkLightClasses}`}>
        <div
          onClick={darkLightIconHandler}
          className={`${classes.darkLightModeIcon} ${iconDarkLightClasses}`}
        >
          {darkModeToggleIcon}
        </div>
        <div className={classes.navLinks}>
          <Link to="home" spy={true} smooth={false} offset={50} duration={500}>
            Home
          </Link>
          <Link to="work" spy={true} smooth={true} offset={50} duration={500}>
            Work
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact
          </Link>
          <a href="#resume">Resume</a>
        </div>
      </div>
    </Fragment>
  );
};

export default NavBar;
